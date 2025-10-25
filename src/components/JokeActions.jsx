

export const JokeActions = ({ joke, handleToggle, handleDelete }) => {
  return (
    <li className="joke-list-item">
      <p className="joke-item-text">{joke.text}</p>
      {/* This component is smart: it checks joke.told to show the right icon */}
      {joke.told ? (
        <button
          className="joke-list-action-toggle"
          onClick={() => handleToggle(joke)}
        >
          <i className="fa-regular fa-face-meh" />
        </button>
      ) : (
        <button
          className="joke-list-action-toggle"
          onClick={() => handleToggle(joke)}
        >
          <i className="fa-regular fa-face-smile" />
        </button>
      )}
      <button
        className="joke-list-action-delete"
        onClick={() => handleDelete(joke)}
      >
        <i className="fa-regular fa-trash-can" />
      </button>
    </li>
  );
};