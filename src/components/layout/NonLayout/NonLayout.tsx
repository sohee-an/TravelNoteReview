import { Fragment } from 'react';

type Props = {
  children: React.ReactNode;
};
function NonLayout({ children }: Props) {
  return <Fragment>{children}</Fragment>;
}

export default NonLayout;
