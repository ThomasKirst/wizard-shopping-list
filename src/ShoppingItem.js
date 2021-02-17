function ShoppingItem({ title, isDone = false, onItemClick, onItemDelete }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={isDone} onChange={onItemClick} />
        {title}
      </label>
      <span
        onClick={onItemDelete}
        style={{ paddingLeft: '1rem', color: 'crimson', cursor: 'pointer' }}
      >
        &times;
      </span>
    </div>
  );
}

export default ShoppingItem;
