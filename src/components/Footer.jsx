export const Footer = () => {
  return (
    <footer>
      <div className="footer-horizon">
        <div className="footer-start">
          <h6>Get to Know</h6>
          <p>
            Phone: <a href="tel:+573124119120">+57 312 4119120</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:contact@company.com">medstrings6@gmail.com</a>
          </p>
        </div>
        <div className="footer-mid">

          <h6>Zain Software</h6>
          <p>
            <strong>Location: </strong>Cundinamarca, Colombia
          </p>
        </div>
        <div className="footer-end">
          <address>
            <h6>External Links</h6>
            <p>Github <a href="#"></a></p>
            <p>LinkedIn <a href="#"></a></p>
          </address>

        </div>
      </div>
      <div className="copyright">
        <p>All rights reserved &copy;</p>
      </div>
    </footer>
  );
};
