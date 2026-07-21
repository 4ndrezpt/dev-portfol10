import process from "process";

export const handler =  async (event, context) => {
  switch (event.httpMethod) {
    case "POST":
      const data = JSON.parse(event.body);
      console.log("Recibí una sollicitud, params");
      //
      return;
    default:
      return {
      statusCode: 405,
      message: "Not supported Method"
      }
  }
}
