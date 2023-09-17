import { css } from '@emotion/react';

export const container = css`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fff3da;
`;

export const userProfile = css`
  width: 100%;
  height: 20%;
  display: flex;
`;

export const profileLeft = css`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;
export const userImg = css`
  height: 80%;
  width: 14rem;
  border: 1px solid gray;
  border-radius: 50%;
  margin: 1rem;
`;
export const profilRight = css`
  width: 80%;
  height: 100%;
  font-size: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;
export const profilDesc = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 5rem;
  height: 8rem;
`;
export const favoriteIcone = css`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;
export const number = css`
  font-size: 1.5rem;
  color: gray;
`;
export const text = css`
  margin-top: 1rem;
  color: gray;
`;
