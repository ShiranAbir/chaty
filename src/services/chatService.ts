import axios from 'axios'

async function getAnswer(question: string) : Promise<string>{
  return await axios
    .post(`http://127.0.0.1:3000`, {
      question
    })
    .then((response) => {
      console.log(response)
      return response.data
    })
    .catch((error) => {
        console.log(error)
    })
}

// async function getAnswer(question: string) : Promise<string>{
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('hi shiran ' + question);
//     }, 3000);
//   });
// }

export{
  getAnswer
}