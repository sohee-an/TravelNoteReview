import styled from '@emotion/styled';
import { Button } from '@material-ui/core';
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
  width: 550px;
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

export const RegisterButton = styled(Button)`
  width: 15rem;
  height: 3rem;
`;
