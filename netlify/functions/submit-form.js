exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);

  // You can send this to an email, database, or logging
  console.log("Received form data:", data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Thank you! Your message has been received." }),
  };
};
