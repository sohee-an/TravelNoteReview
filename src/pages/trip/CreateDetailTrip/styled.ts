import styled from '@emotion/styled';

export const Coniainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CardHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const PackageWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const TripWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 2rem;
`;

export const Day = styled.div`
  border: 1px solid blue;
  padding: 0.5rem;
  border-radius: 3px;
  color: blue;
`;
export const CardTopWrapper = styled.div`
  color: gray;

  & div {
    margin-bottom: 1rem;
  }
`;
