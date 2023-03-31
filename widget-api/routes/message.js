// Handle incoming HTTP POST requests to send messages

const io = require("../websocket/websocket");
const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
  const { timestamp, text } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: text,
  });

  console.log('return message');


  io.emit('message', { timestamp: new Date(), text: completion.data.choices[0].text, from: 'bot' });

  res.sendStatus(200);
}

