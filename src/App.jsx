import { useEffect, useState } from "react"
import { getAllJokes,postNewJoke } from "./services/jokeService"
import "./App.css"

export const App = () => {

  const [newJoke, setNewJoke] = useState("")


const handlePostJoke = async () => {
  await postNewJoke(newJoke)
  setNewJoke("")
}

return ( 
<div className="app-container">
  <div className="app-heading">
    <h1 className="app-heading-text"></h1>
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
</div>

)
}
