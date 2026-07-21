exports.handler = async (event, context) => {
  switch (event.httpMethod) {
    case "POST":
      const params = JSON.parse(event.body);
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
