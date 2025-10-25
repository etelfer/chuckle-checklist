
export const AddAJoke = ({ newJoke, setNewJoke, handlePostJoke }) => {
  return (
    <div className="joke-add-form">
      <input
        className="joke-input"
        type="text"
        value={newJoke}
        placeholder="New One Liner"
        onChange={(event) => {
          return setNewJoke(event.target.value);
        }}
      />
      <button className="joke-input-submit" onClick={handlePostJoke}>
        Add
      </button>
    </div>
  );
};