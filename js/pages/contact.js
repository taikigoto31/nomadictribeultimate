// ============================================
// お問い合わせフォームの処理
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    
    if (!contactForm) {
        return;
    }

    // EmailJSの初期化
    if (typeof contactConfig !== 'undefined' && contactConfig.useEmailJS && contactConfig.emailJSPublicKey) {
        if (typeof emailjs !== 'undefined') {
            emailjs.init(contactConfig.emailJSPublicKey);
            console.log('EmailJSが初期化されました');
        } else {
            console.error('EmailJS SDKが読み込まれていません');
        }
    }

    // メールアドレス確認用のバリデーション
    const emailInput = document.getElementById("email");
    const emailConfirmInput = document.getElementById("email_confirm");
    
    if (emailInput && emailConfirmInput) {
        emailConfirmInput.addEventListener("blur", function() {
            if (emailInput.value !== emailConfirmInput.value) {
                emailConfirmInput.setCustomValidity("メールアドレスが一致しません");
            } else {
                emailConfirmInput.setCustomValidity("");
            }
        });
    }

    // 送信ボタンの状態管理
    const submitButton = contactForm.querySelector('.submit-button');
    let isSubmitting = false;

    // フォーム送信処理
    contactForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        
        if (isSubmitting) {
            return;
        }

        // メールアドレスの確認
        if (emailInput && emailConfirmInput && emailInput.value !== emailConfirmInput.value) {
            alert("メールアドレスが一致しません。確認してください。");
            return;
        }

        // 送信中の状態に変更
        isSubmitting = true;
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "送信中...";
        }

        try {
            // フォームデータを取得
            const formData = new FormData(contactForm);
            const formValues = {};
            formData.forEach((value, key) => {
                formValues[key] = value;
            });

            // メール本文を作成
            const emailBody = createEmailBody(formValues);
            
            // メールアドレスを取得（設定ファイルから）
            const recipientEmail = typeof contactConfig !== 'undefined' ? contactConfig.email : 'nomadictribe2013@gmail.com';
            const subject = typeof contactConfig !== 'undefined' ? 
                contactConfig.subjectPrefix + formValues.type : 
                'Nomadic Tribe Ultimate お問い合わせ: ' + formValues.type;

            // メール送信（Web APIを使用）
            await sendEmail(recipientEmail, subject, emailBody, formValues.email);

            // 送信成功
            showSuccessMessage();
            
            // フォームをリセット
            contactForm.reset();
            
        } catch (error) {
            console.error('送信エラー:', error);
            alert("送信に失敗しました。しばらく時間をおいて再度お試しください。");
        } finally {
            // 送信状態をリセット
            isSubmitting = false;
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "送信する";
            }
        }
    });

    /**
     * メール送信処理
     * @param {string} to - 送信先メールアドレス
     * @param {string} subject - 件名
     * @param {string} body - 本文
     * @param {string} fromEmail - 送信元メールアドレス
     */
    async function sendEmail(to, subject, body, fromEmail) {
        // EmailJSを使用してメール送信
        // ローカル環境（file://、localhost）でも正常に動作します
        
        // 設定の確認
        if (typeof contactConfig === 'undefined' || !contactConfig.useEmailJS) {
            throw new Error('EmailJSが有効になっていません。設定を確認してください。');
        }

        if (!contactConfig.emailJSPublicKey || !contactConfig.emailJSServiceID || !contactConfig.emailJSTemplateID) {
            throw new Error('EmailJSの設定が不完全です。Public Key、Service ID、Template IDを設定してください。');
        }

        if (typeof emailjs === 'undefined') {
            throw new Error('EmailJS SDKが読み込まれていません。');
        }

        try {
            // フォームの値を取得
            const formValues = {
                name: contactForm.querySelector('#name').value,
                kana: contactForm.querySelector('#kana').value || '',
                company: contactForm.querySelector('#company').value || '',
                phone: contactForm.querySelector('#phone').value || '',
                email: fromEmail,
                email_confirm: contactForm.querySelector('#email_confirm').value,
                type: contactForm.querySelector('#type').value,
                message: contactForm.querySelector('#message').value
            };

            // EmailJSのテンプレートパラメータ
            // テンプレート内で使用する変数名に合わせて設定
            // テンプレートで使用されている変数:
            // - {{title}} : お問い合わせ内容
            // - {{name}} : 送信者名
            // - {{email}} : 送信者メールアドレス（Reply To用）
            // - {{message}} : メッセージ本文
            // - {{time}} : 送信時刻（EmailJSが自動設定）
            const templateParams = {
                title: formValues.type, // お問い合わせ内容（Subjectの{{title}}とContent内で使用）
                name: formValues.name, // 送信者名（From NameとContent内の{{name}}で使用）
                email: formValues.email, // 送信者メールアドレス（Reply Toの{{email}}で使用）
                message: body, // メッセージ本文（Content内の{{message}}で使用）
                // 追加情報（必要に応じてテンプレートで使用可能）
                kana: formValues.kana,
                company: formValues.company,
                phone: formValues.phone,
                inquiry_type: formValues.type, // titleと同じ（互換性のため）
                inquiry_message: formValues.message // messageの元データ（互換性のため）
            };

            console.log('EmailJSでメール送信を開始します...', {
                serviceID: contactConfig.emailJSServiceID,
                templateID: contactConfig.emailJSTemplateID,
                to: to
            });

            // EmailJSでメール送信
            const response = await emailjs.send(
                contactConfig.emailJSServiceID,
                contactConfig.emailJSTemplateID,
                templateParams
            );

            console.log('EmailJS送信成功:', response);
            
            if (response.status === 200) {
                console.log('メール送信が成功しました');
                return true;
            } else {
                throw new Error('送信に失敗しました。ステータス: ' + response.status);
            }
            
        } catch (error) {
            console.error('EmailJS送信エラー:', error);
            
            // EmailJSのエラーメッセージを処理
            if (error.text) {
                throw new Error('EmailJSエラー: ' + error.text);
            }
            
            if (error.message) {
                throw error;
            }
            
            throw new Error('メール送信に失敗しました。設定を確認してください。');
        }
    }

    /**
     * 送信成功メッセージを表示
     */
    function showSuccessMessage() {
        // モーダルまたはアラートで成功メッセージを表示
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="success-message-content">
                <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--accent-color); margin-bottom: 20px;"></i>
                <h2 style="font-size: 2rem; font-weight: 700; color: var(--main-color); margin-bottom: 15px;">送信が完了しました。</h2>
                <p style="font-size: 1.1rem; color: var(--light-text); line-height: 1.8;">
                    お問い合わせありがとうございます。<br>
                    内容を確認次第、ご連絡いたします。
                </p>
            </div>
        `;
        successMessage.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;
        successMessage.querySelector('.success-message-content').style.cssText = `
            background-color: var(--white);
            padding: 60px 40px;
            border-radius: 8px;
            text-align: center;
            max-width: 500px;
            margin: 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        `;
        
        document.body.appendChild(successMessage);
        
        // 3秒後に自動で閉じる
        setTimeout(function() {
            successMessage.remove();
        }, 3000);
        
        // クリックで閉じる
        successMessage.addEventListener('click', function(e) {
            if (e.target === successMessage) {
                successMessage.remove();
            }
        });
    }

    /**
     * メール本文を作成
     * @param {Object} values - フォームの値
     * @returns {string} メール本文
     */
    function createEmailBody(values) {
        let body = "";
        body += "以下の内容でお問い合わせがありました。\n";
        body += "\n";
        body += "\n";
        body += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
        body += "\n";
        
        // お問い合わせ内容
        body += "【お問い合わせ内容】\n";
        body += "\n";
        body += (values.type || "（未選択）") + "\n";
        body += "\n";
        
        // お名前
        body += "【お名前】\n";
        body += "\n";
        body += (values.name || "（未入力）") + "\n";
        body += "\n";   
        
        // ふりがな
        if (values.kana && values.kana.trim()) {
            body += "【ふりがな】\n";
            body += "\n";
            body += values.kana + "\n";
            body += "\n";
        }
        
        // 貴社名・団体名
        if (values.company && values.company.trim()) {
            body += "【貴社名・団体名】\n";
            body += "\n";
            body += values.company + "\n";
            body += "\n";
        }
        
        // 電話番号
        if (values.phone && values.phone.trim()) {
            body += "【電話番号】\n";
            body += "\n";
            body += values.phone + "\n";
            body += "\n";
        }
        
        // メールアドレス
        body += "【メールアドレス】\n";
        body += "\n";
        body += (values.email || "（未入力）") + "\n";
        body += "\n";
        
        // お問い合わせ詳細
        body += "【お問い合わせ詳細】\n";
        body += "\n";
        const messageLines = (values.message || "（未入力）").split('\n');
        messageLines.forEach(line => {
            body += line + "\n";
        });
        body += "\n";
        
        body += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
        body += "\n";
        body += "このメールは Nomadic Tribe Ultimate のお問い合わせフォームから送信されました。\n";
        body += "\n";
        
        return body;
    }
});

