import styled from 'styled-components';

export default function Button({ text }) {
  return <MainButton>{text}</MainButton>;
}

const MainButton = styled.button`
  background: rebeccapurple;
  border: none;
  border-radius: 4px;
  color: ivory;
  margin: 1rem 0;
  padding: 0.4rem 0.8rem;
  transition: opacity 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 2px 10px rgba(45, 0, 77, 0.7);
    cursor: pointer;
  }
`;
