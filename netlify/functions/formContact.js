import process from "process";

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
      //
      return;
    default:
      return {
      statusCode: 405,
      message: "Not supported Method"
      }
  }
}
