import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
`;

export const UserProfile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ProfileLeft = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;
export const Img = styled.img`
  height: 12rem;
  width: 12rem;
  border: 1px solid gray;
  border-radius: 50%;
  margin: 1rem;
`;
export const ProfilRight = styled.div`
  width: 70%;
  height: 100%;
  font-size: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;
export const ProfilDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 5rem;
  height: 8rem;
`;
export const FavoriteIcone = styled.div`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;
export const Number = styled.span`
  font-size: 1.5rem;
  color: gray;
`;
export const Text = styled.span`
  margin-top: 1rem;
  color: gray;
`;
