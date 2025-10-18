export const getAllJokes = () => {
    return fetch(`http://localhost:8088/jokes`).then(res => res.json())
}

export const postNewJoke = async (jokeText) => {
    const newJoke = {
        text: jokeText,
        told: false
    }
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newJoke)
        }
        await fetch("http://localhost:8088/jokes", postOptions)
    }


export const toggleJokeStatus = async (joke) => {
  const editedJoke = {
    id: joke.id,
    text: joke.text,
    told: !joke.told,
  }

  await fetch(`http://localhost:8088/jokes/${joke.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedJoke),
  })
}


export const deleteJoke = async (joke) => {
  const deleteOptions = {
    method: "DELETE",
  }

  await fetch(`http://localhost:8088/jokes/${joke.id}`, deleteOptions);
};