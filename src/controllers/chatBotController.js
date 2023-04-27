const asyncHandler = require("express-async-handler");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({ apiKey: process.env.API_KEY });

const openai = new OpenAIApi(configuration);

const chatBot = asyncHandler(async (req, res) => {
  try {
    openai
      .createChatCompletion({
        model: "text-davinci-003",
        messages: [{ role: "user", content: req.body.content }],
        max_tokens: 5,
      })
      .then((data) => {
        return res.json({ reply: data.data.choices[0].message.content });
      });
  } catch (err) {
    res.status(401);
    throw new Error(err.message);
  }
});
module.exports = { chatBot };
