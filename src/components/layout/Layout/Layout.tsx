import Navbar from './Navbar';
import { ReactNode } from 'react';
import { Grid } from '@mui/material';

type Props = {
  children: ReactNode;
};
function Layout({ children }: Props) {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} lg={6}>
        <Navbar />
        {children}
      </Grid>
    </Grid>
  );
}

export default Layout;
