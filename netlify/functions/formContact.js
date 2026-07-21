import process from "process";
import * as dotenv from "dotenv";
import * as nodemailer from "nodemailer";

dotenv.config();


const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
  });


const sendEmail = (mail, headers) => {
  return new Promise((resolve, reject) => {
    transport.sendMail(mail,
      (error, _) => {
        error ?
          reject({
            statusCode: 500,
            body: error
          })
          : resolve({
            statusCode: 200,
            body: "Email Successfully sended to" + mail.to,
          })
      })
  });
}

const generateBodyMsg = (params) => {
  return `Formulario de contacto enviado por ${params.name} - ${params.email}.
  con el tema: ${params.title} y el siguiente mensaje:
    ${params.subject}
  `;
}

export const handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Headers': "Content-Type, Authorization",
    'Access-Control-Allow-Methods': "POST"
  }

  switch (event.httpMethod) {
    case "POST":
      const data = JSON.parse(event.body);

      console.log("Recibí una sollicitud", data);
      return await sendEmail({
        from: process.env.EMAIL_USER,
        to: "medstrings6@gmail.com",
        subject: "Contacto - " + data.subject,
        text: generateBodyMsg(data)
      });

    default:
      return {
        statusCode: 405,
        message: "Not supported Method"
      }
  }
}
