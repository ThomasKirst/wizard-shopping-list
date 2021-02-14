function ShoppingItem({ title, isDone }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={isDone} />
        {title}
      </label>
    </div>
  );
}

export default ShoppingItem;
