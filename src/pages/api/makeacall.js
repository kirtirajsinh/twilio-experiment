const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

export default async function handler(req, res) {
  const to = req.body;

  try {
    const value = await client.calls.create({
      url: "http://demo.twilio.com/docs/voice.xml",
      to: to,
      from: process.env.TWILIO_PHONE_NUMBER,
    });
    console.log(value);

    res.status(200).json(value);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
