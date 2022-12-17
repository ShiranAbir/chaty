const compression = require('compression');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

var chatgptFunc = null;
// need to import es module dynamically
import('./chatgpt.service.mjs').then(chatgpt =>
  {
    chatgptFunc = chatgpt.chatgpt
    chatgpt.chatgpt_init()
  }
);

app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuring CORS
const corsOptions = {
	// Make sure origin contains the url your frontend is running on
	origin: ['http://localhost:5173'],
	credentials: true
}
app.use(cors(corsOptions))

app.post("/", async function (req, res) {
  if (!chatgptFunc){
    res.send("Backend isn't ready yet!")
    return
  }

  const question = req.body.question;
  res.send(await chatgptFunc(question));
});

app.listen(port, async function () {
  console.log(`Example app listening on port ${port}!`);
});
