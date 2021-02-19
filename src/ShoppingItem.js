import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function ShoppingItem({
  title,
  isDone = false,
  onItemClick,
  onItemDelete,
}) {
  return (
    <div>
      <label>
        <BigCheckbox type="checkbox" checked={isDone} onChange={onItemClick} />
        {title}
      </label>
      <DeleteButton onClick={onItemDelete}>&times;</DeleteButton>
    </div>
  );
}

ShoppingItem.propTypes = {
  title: PropTypes.string,
  isDone: PropTypes.bool,
  onItemClick: PropTypes.func,
  onItemDelete: PropTypes.func,
};

const BigCheckbox = styled.input`
  margin-top: 0.5rem;
  margin-right: 0.7rem;
  transform: scale(1.3);
`;

const DeleteButton = styled.span`
  padding-left: 1rem;
  color: var(--warning);
  cursor: pointer;
`;
