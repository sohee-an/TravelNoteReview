import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1 1 20%;
  gap: 2rem;
`;
