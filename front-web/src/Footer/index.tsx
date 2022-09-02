import './style.css';
import { ReactComponent as GitHub } from "./iconmonstr-github-1.svg";
import {ReactComponent as Linkedin} from "./iconmonstr-linkedin-2.svg";

function Footer() {
  return (
    <>
    <footer className="main-footer">
        <p>App desenvolvido por Eduardo Oliveira Ramos</p>
        <div className="footer-icons">
          <a href="https://github.com/Edu25664" target="_new">
            <GitHub />
          </a>

          <a href="https://www.linkedin.com/in/ramosedu/" target="_new">
            <Linkedin/>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
