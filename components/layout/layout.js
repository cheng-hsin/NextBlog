import { Fragment } from 'react';
import MainNavigation from '../layout/main-navigation';
const Layout_18 = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout_18;
