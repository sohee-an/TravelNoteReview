import Navbar from './Navbar';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
function Layout({ children }: Props) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
}

export default Layout;
