import PropTypes from 'prop-types';

import './Form.css';

export default function Form({ onCreateShoppingItem }) {
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default behaviour of the form element
    const form = event.target; // Get the form element by the event
    const input = form.title; // The name attribute of the input field
    onCreateShoppingItem(input.value);
    form.reset();
    input.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add shopping item</h3>
      <input
        name="title"
        type="text"
        placeholder="What else needs to be bought?"
      />
      <button>Add to List</button>
    </form>
  );
}

Form.propTypes = {
  onCreateShoppingItem: PropTypes.func,
};
