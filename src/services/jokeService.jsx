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
