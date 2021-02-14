function ShoppingItem({ title, isDone = false }) {
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
