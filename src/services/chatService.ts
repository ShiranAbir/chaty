import axios from 'axios'

async function getAnswer(question: string) : Promise<string>{
  return await axios
    .post(`http://127.0.0.1:3000`, {
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
  getAnswer,
  getSpeechUrl
}