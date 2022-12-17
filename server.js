const compression = require('compression');
const express = require('express');
const app = express();
const port = 3000;

var chatgptFunc = null;
var speechFunc = null;
// need to import es module dynamically
import('./chatgpt.service.mjs').then(chatgpt =>
  {
    chatgptFunc = chatgpt.chatgpt
    speechFunc = chatgpt.getSpeechUrl
    chatgpt.chatgpt_init()
  }
);

app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async function (req, res) {
  if (!chatgptFunc){
    res.send("Backend isn't ready yet!")
    return
  }

  const question = req.body.question;
  res.send(await chatgptFunc(question));
});

app.post("/speech", function (req, res) {
  const text = req.body.text;
  res.send(speechFunc(text));
});

app.listen(port, async function () {
  console.log(`Example app listening on port ${port}!`);
});
