import styled from '@emotion/styled';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CardStyle = styled(Card)`
  max-width: 800px;
  min-width: 500px;
  min-height: 300px;
`;
export const CardContentStyle = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
`;
