export default function Form() {
  return (
    <form>
      <label>
        Add shopping item:
        <input
          name="title"
          type="text"
          placeholder="What else needs to be bought?"
        />
      </label>
      <button>Create</button>
    </form>
  );
}
