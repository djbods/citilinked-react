import React from "react";
import Contact from './Contact';
import FooterNav from './FooterNav';

const AppFooter = () => {
  return (
    <React.Fragment>
      <footer>
        <Contact />
        <FooterNav />
      </footer>
    </React.Fragment>

  );
};

export default AppFooter;
