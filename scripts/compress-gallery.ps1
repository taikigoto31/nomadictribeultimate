Add-Type -AssemblyName System.Drawing

$galleryDir = Join-Path $PSScriptRoot "..\images\gallery"
$maxSize = 1600
$quality = 80

$jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" } | Select-Object -First 1

$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$quality)

$files = Get-ChildItem -Path $galleryDir -Recurse -File | Where-Object { $_.Extension.ToLower() -eq ".jpg" -or $_.Extension.ToLower() -eq ".jpeg" }

$total = $files.Count
$current = 0

foreach ($file in $files) {
    $current++
    $origSize = [math]::Round($file.Length / 1KB)

    $img = [System.Drawing.Image]::FromFile($file.FullName)
    $w = $img.Width
    $h = $img.Height

    if ($w -le $maxSize -and $h -le $maxSize) {
        $newW = $w
        $newH = $h
    } elseif ($w -ge $h) {
        $newW = $maxSize
        $newH = [int]($h * $maxSize / $w)
    } else {
        $newH = $maxSize
        $newW = [int]($w * $maxSize / $h)
    }

    $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $newW, $newH)
    $g.Dispose()
    $img.Dispose()

    $tmp = $file.FullName + ".tmp"
    $bmp.Save($tmp, $jpegEncoder, $encoderParams)
    $bmp.Dispose()

    Remove-Item $file.FullName -Force
    Rename-Item $tmp $file.FullName

    $newSize = [math]::Round((Get-Item $file.FullName).Length / 1KB)
    $saved = $origSize - $newSize
    Write-Host "[$current/$total] $($file.Name): ${origSize}KB -> ${newSize}KB (-${saved}KB)"
}

Write-Host ""
Write-Host "完了: $total 枚を処理しました"
