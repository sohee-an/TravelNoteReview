import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 64px);
`;

export const TopButtonGroup = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const ProfileButton = styled(Button)`
  width: 49%;
  border-color: #4682a9;
  color: #4682a9;
`;

// export const MenuTabButton = styled(Button)`
//   && {
//     background-color: white;
//     color: black;
//     border: none;
//     &:hover {
//       background-color: #fff3da;
//     }
//   }
// `;
