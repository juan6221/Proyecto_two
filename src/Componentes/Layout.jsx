{/* Se importa Header, Menu, Footer*/}

import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import { Children } from 'react';


const Layout = ({Children}) => {
    return (
    <div className="Container">
      <Header />
      <Menu />
            {Children}
      <Footer />
    </div>
  );
};

export default Layout;
