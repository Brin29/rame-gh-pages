import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={classes.container}>
        <section>
          <a href="/">
            <img className={classes.img__footer} src="/resource/img/Logo.jpg" />
          </a>
          <div className={classes.socials}>
            <a href="https://www.instagram.com/r.rame_/">
              <img
                className={classes.icons__footer}
                src="resource/img/ig.png"
                alt="img__footer__ig"
              />
            </a>
          </div>
          <ul>
            <li>
              <h3>Resources</h3>
              <a>Usage</a>
              <a>Docs</a>
              <a>Support</a>
              <a>Hardware</a>
            </li>
            <li>
              <h3>Developers</h3>
              <a>Forum</a>
              <a>Projects</a>
              <a>Source</a>
              <a>GitHub</a>
            </li>
            <li>
              <p className="legal">© 2024 All rights reserved</p>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
