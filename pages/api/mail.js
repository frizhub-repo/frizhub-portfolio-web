const mail = require("@sendgrid/mail");
debugger;
mail.setApiKey(process.env.SENDGRID_API_KEY);
export default function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log(body);
  const message = `
        Name : ${body.name}\r\n
        Email :${body.email}\r\n
        Message : ${body.message}\r\n
    `;
  const data = {
    to: "info@frizhub.com",
    from: "info@frizhub.com",
    subject: "New Message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
  res.status(200).json({ status: "ok" });
}
