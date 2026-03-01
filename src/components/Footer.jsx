const Footer = ({ openHour, closeHour }) => {
  return (
    <footer className="footer">
      <p className="footer-text">
        We are open from <strong>{openHour}:00am</strong> to{" "}
        <strong>{closeHour}:00pm</strong>. Come visit us or order online.
      </p>

      <p className="copyright">
        © 2026 FORNO. All rights reserved.
        <br /> Solution Powered by <strong>NEXSUS</strong>
      </p>
    </footer>
  );
};

export default Footer;
