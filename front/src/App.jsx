import { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [text, setText] = useState([])
  const [input, setInput] = useState("")

  const CallAPI = () => {
    //     fetch("http://localhost:3001/moviesData")
    //     .then(response => {
    //         // handle the response
    //         return response.json()
    //     }).then((data)=>{
    // setText(data)    })
    //     .catch(error => {
    //         // handle the error
    //     });
    axios.get("http://localhost:3005/moviesData").then((response) => {
      setText(response.data);
    });
  }
  function handleChange(event) {
    setInput(event.target.value)

  }
  function handleClick() {
    axios
      .post("http://localhost:3005/moviesData", {
        input
      })
      .then((response) => {
        console.log("hi")
      });
  }
  return (
    <div className="App">
      <button onClick={() => CallAPI()}>Call me to see</button>
      {
        text.map((value) => {
          return <p >{value.title}</p>
        })
      }
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>send text to backend</button>

    </div>
  )
}

export default App
