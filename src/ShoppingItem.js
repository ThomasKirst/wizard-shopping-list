function ShoppingItem({ title, isDone = false, onItemClick }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={isDone} onChange={onItemClick} />
        {title}
      </label>
    </div>
  );
}

export default ShoppingItem;
