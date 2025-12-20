// お問い合わせページの設定
// メールアドレスなどの設定を管理します

const contactConfig = {
    // 送信先メールアドレス
    email: "taikigoto.31@gmail.com",
    
    // メールの件名（プレフィックス）
    subjectPrefix: "Nomadic Tribe Ultimate お問い合わせ: ",
    
    // EmailJSの設定
    // EmailJSのアカウント作成後、以下を設定してください
    // 1. https://www.emailjs.com/ でアカウントを作成
    // 2. Email Serviceを設定（Gmailなど）
    // 3. Email Templateを作成
    // 4. Public Key、Service ID、Template IDを取得して設定
    useEmailJS: true,
    emailJSPublicKey: "e2Zg7O8y8v-Wl0IVz", // EmailJSのPublic Key（例: "YOUR_PUBLIC_KEY"）
    emailJSServiceID: "service_o3k5hxj", // EmailJSのService ID（例: "service_xxxxxxx"）
    emailJSTemplateID: "template_xjzar5f" // EmailJSのTemplate ID（例: "template_xxxxxxx"）
};

