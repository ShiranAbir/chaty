import axios from 'axios'

async function initBackend(username: string, password: string, accountType: string) : Promise<string>{
  return await axios
    .post(`http://127.0.0.1:3000/init`, {
      username,
      password,
      accountType
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
        console.log(error)
    })
}

async function getAnswer(question: string) : Promise<string>{
  return await axios
    .post(`http://127.0.0.1:3000/ask`, {
      question
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
        console.log(error)
    })
}


async function getSpeechUrl(text: string) : Promise<string>{
  return await axios
    .post(`http://127.0.0.1:3000/speech`, {
      text
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
        console.log(error)
    })
}

export{
  initBackend,
  getAnswer,
  getSpeechUrl
}