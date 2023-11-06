import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const anchore = css`
  cursor: pointer;
`;
export const TopWrapper = styled.div`
  width: 100%;
  height: 20%;
  padding: 1rem;
  background-color: whitesmoke;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
`;

export const TripCardContentsWrapper = styled.div`
  gap: 1rem;
`;

export const DayStyle = styled.h3`
  border: 1px solid gray;
  padding: 0.5rem;
  width: 10rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  color: gray;
`;
