
import { JokeActions } from "./JokeActions";

export const JokeList = ({ title, jokes, count, handleToggle, handleDelete }) => {
  return (
    <div className="joke-list-container">
      <h2>
        {title}
        <span className={title === "Told Jokes" ? "told-count" : "untold-count"}>
          {count}
        </span>
      </h2>
      <ul>
        {jokes.map((joke) => {
          return (
            <JokeActions
              key={joke.id}
              joke={joke}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};