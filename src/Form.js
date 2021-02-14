export default function Form({ onCreateShoppingItem }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.title;
    onCreateShoppingItem(input.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add shopping item:
        <input
          className="add"
          name="title"
          type="text"
          placeholder="What else needs to be bought?"
        />
      </label>
      <button>Create</button>
    </form>
  );
}
