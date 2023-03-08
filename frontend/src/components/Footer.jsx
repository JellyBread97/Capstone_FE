import React from "react";

function Footer() {
  return (
    <div className="footer container">
      <div className="footer-section">
        <p className="title">LiquidLibrary.com</p>
        <p>
          Some random text about how the app works and that it's free and that
          it's a student project for Epicode bootcamp. I will come up with the
          text once I'm done with functionality, I hope
        </p>
        <p>© 2023 | All Rights Reserved</p>
      </div>
      <div className="footer-section">
        <p className="title">Contact Us</p>
        <p>kotasmartin1997@gmail.com</p>
        <p>+44 7872 622451</p>
        <p>+420 736 485 279</p>
      </div>
      <div className="footer-section">
        <p className="title">Socials</p>
        <p>LinkedIn</p>
        <p>GitHub</p>
        <p>Discord</p>
      </div>
    </div>
  );
}

export default Footer;
