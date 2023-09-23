import styled from '@emotion/styled';

export const Container = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    border: 2px solid blue;
    transform: scale(1.05);
  }
`;
