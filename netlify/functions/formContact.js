import process from "process";
import * as dotenv from "dotenv";
import * as nodemailer from "nodemailer";

dotenv.config();

/*
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
*/

export const handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail', // or your provider
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD, // Use an App Password for Gmail, not your login password
        },
      });

      const body = JSON.parse(event.body);

      // You MUST await this call so the function doesn't close early
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "medstrings6@gmail.com",
        subject: body.title,
        text: body.name +"send "+body.email+" "+body.subject,
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Email sent successfully!" }),
      };
    } catch (error) {
      console.error("Detailed Error:", JSON.stringify(error, null, 2));
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
}
