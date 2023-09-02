import Navbar from './Navbar';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
function UserLayout({ children }: Props) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
}

export default UserLayout;
