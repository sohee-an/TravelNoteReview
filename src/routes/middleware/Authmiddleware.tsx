import { Fragment, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
const Authmiddleware = (props: Props) => {
  // if (!localStorage.getItem('token')) {
  //   return <Navigate to={{ pathname: '/login' }} />;
  // }
  return <Fragment>{props.children}</Fragment>;
};

export default Authmiddleware;
