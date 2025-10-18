import { useEffect, useState } from "react"
import { getAllJokes,postNewJoke,toggleJokeStatus,deleteJoke } from "./services/jokeService"
import "./App.css"
import stevePic from "./assets/steve.png"

export const App = () => {

  const [newJoke, setNewJoke] = useState("")
  const [allJokes, setAllJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])

const rerenderNewJoke = () => {
  getAllJokes().then((jokeArr) => {
  setAllJokes(jokeArr)
})
  }

const handlePostJoke = async () => {
  await postNewJoke(newJoke)
  setNewJoke("")
  rerenderNewJoke()
}

useEffect(() => {
  getAllJokes().then((jokesArray) => {
    setAllJokes(jokesArray)
    console.log("jokes set!")
  })
}, [])

  useEffect(() => { 
    const toldJokesArray = allJokes.filter(joke => joke.told === true)
    setToldJokes(toldJokesArray)

    const untoldJokesArray = allJokes.filter(joke => joke.told === false)
    setUntoldJokes(untoldJokesArray)
  },[allJokes])

const handleToggle = (joke) => {

  toggleJokeStatus(joke).then(() => {
    rerenderNewJoke()
  })
}

const handleDelete = (joke) => {
  deleteJoke(joke).then(() => {
    rerenderNewJoke()
  })
}



return ( 
<div className="app-container">
  <div className="app-heading"><div className="app-heading-circle">
   <img className="app-logo" src={stevePic} alt="Good job Steve" />
 </div>
    <h1 className="app-heading-text">Chuckle Checklist</h1>
    </div>

    <h2>Add a Joke</h2>
    <div className="joke-add-form">
  <input
  className="joke-input"
  type="text"
  value={newJoke}
  placeholder="New One Liner"
  onChange={(event) => {
  return setNewJoke(event.target.value)
  }}/> 
  <button className="joke-input-submit"
  onClick={handlePostJoke}>
    Add
  </button>
</div>
<div className="joke-lists-container">
  <div className="joke-list-container">
    <h2>
      Untold Jokes
      <span className="untold-count">{untoldJokes.length}</span>
    </h2>
    <ul>
      {untoldJokes.map((joke) => {
        return (
          <li className="joke-list-item" key={joke.id}>
            <p className="joke-item-text">{joke.text}</p>
            <button className="joke-list-action-toggle" onClick={() => handleToggle(joke)}><i className="fa-regular fa-face-smile" /></button>
            <button className="joke-list-action-delete" onClick={() => handleDelete(joke)}><i className="fa-regular fa-trash-can" /></button>
          </li>
        )
      })}
    </ul>
  </div>
    <div className="joke-list-container">
    <h2>
      Told Jokes
      <span className="told-count">{toldJokes.length}</span>
    </h2>
    <ul>
      {toldJokes.map((joke) => {
        return (
          <li className="joke-list-item" key={joke.id}>
            <p className="joke-item-text">{joke.text}</p>
            <button className="joke-list-action-toggle" onClick={() => handleToggle(joke)}><i className="fa-regular fa-face-meh" /></button>
            <button className="joke-list-action-delete" onClick={() => handleDelete(joke)}><i className="fa-regular fa-trash-can" /></button>
          </li>
        )
      })}
    </ul>
  </div>
</div>
</div>

)
}
