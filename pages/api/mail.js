const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);
export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const message = `
        <strong>NAME:</strong> ${body.name}\r<br><br>
        <strong>EMAIL:</strong> ${body.email}\r<br><br>
        <strong>MESSAGE:</strong> ${body.message}\r\n
    `;
  const data = {
    to: "info@frizhub.com",
    from: "info@frizhub.com",
    subject: "New Message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);
  res.status(200).json({ status: "ok" });
}
