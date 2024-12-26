import "./Footer.css";
import FaceLogo from "../Assets/Vector-f.svg";
import InstaLogo from "../Assets/Group-I.svg";
import Twitter from "../Assets/vector-T.svg";
import Picasa from "../Assets/Vector-p.svg";
import Music from "../Assets/Vector-M.svg";
import Whatsup from "../Assets/Vector-W.svg";
import Youtube from "../Assets/Vector-Y.svg";

function Footer() {
  return (
    <div className="footer-box">
      <div className="footer-logo">
        <img src={FaceLogo} alt="Facebook-logo" />
        <img src={InstaLogo} alt="InstaLogo-logo" />
        <img src={Twitter} alt="Twitter-logo" />
        <img src={Picasa} alt="Picasa-logo" />
        <img src={Music} alt="Music-logo" />
        <img src={Whatsup} alt="What'sup-logo" /> 
        <img src={Youtube} alt="Youtube-logo" />
      </div>
      <div className="footer-text">
        <p className="footer-p">© Start, 2022. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;