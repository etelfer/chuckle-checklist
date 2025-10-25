
import { useEffect, useState } from "react";
import { getAllJokes, postNewJoke, toggleJokeStatus, deleteJoke } from "./services/jokeService";
import "./App.css";
// Import your new components
import { Header } from "./components/Header";
import { AddAJoke } from "./components/AddAJoke";
import { JokeList } from "./components/JokeList";

export const App = () => {
  // All state lives in the top-level component
  const [newJoke, setNewJoke] = useState("");
  const [allJokes, setAllJokes] = useState([]);
  const [untoldJokes, setUntoldJokes] = useState([]);
  const [toldJokes, setToldJokes] = useState([]);

  // All data-handling functions live here
  const rerenderNewJoke = () => {
    getAllJokes().then((jokeArr) => {
      setAllJokes(jokeArr);
    });
  };

  const handlePostJoke = () => {
    postNewJoke(newJoke).then(() => {
      setNewJoke("");
      rerenderNewJoke();
    });
  };

  const handleToggle = (joke) => {
    toggleJokeStatus(joke).then(() => {
      rerenderNewJoke();
    });
  };

  const handleDelete = (joke) => {
    deleteJoke(joke).then(() => {
      rerenderNewJoke();
    });
  };

  // All effects that manage data live here
  useEffect(() => {
    rerenderNewJoke();
  }, []);

  useEffect(() => {
    const toldJokesArray = allJokes.filter((joke) => joke.told);
    setToldJokes(toldJokesArray);

    const untoldJokesArray = allJokes.filter((joke) => !joke.told);
    setUntoldJokes(untoldJokesArray);
  }, [allJokes]);

  return (
    <div className="app-container">
      <Header />
      <h2>Add a Joke</h2>
      <AddAJoke
        newJoke={newJoke}
        setNewJoke={setNewJoke}
        handlePostJoke={handlePostJoke}
      />
      <div className="joke-lists-container">
        <JokeList
          title="Untold Jokes"
          jokes={untoldJokes}
          count={untoldJokes.length}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
        <JokeList
          title="Told Jokes"
          jokes={toldJokes}
          count={toldJokes.length}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};