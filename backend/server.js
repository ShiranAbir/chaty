const compression = require('compression');
const express = require('express');
const app = express();
const port = 3000;

var chatgptFunc = null;
var chatgptInitFunc = null;
var speechFunc = null;

app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/init", async function (req, res) {
  if (!chatgptFunc){
    const chatgpt = await import('./chatgpt.service.mjs')
    chatgptFunc = chatgpt.chatgpt
    chatgptInitFunc = chatgpt.chatgpt_init
    speechFunc = chatgpt.getSpeechUrl

    console.log("Backend isn't ready yet!")
  }

  res.send(await chatgptInitFunc(req.body));
});

app.post("/ask", async function (req, res) {
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
