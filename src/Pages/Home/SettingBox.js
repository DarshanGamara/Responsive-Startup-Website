import "./SettingBox.css";
import SettingImg from "../../Assets/Setting-img.svg";

function SettingBox() {
    return (
      <div className="setting-box">
        <div className="setting-text">
          <h2 className="setting-h2">
            Lorem ipsum dolar sit <br></br> amet consectetur
          </h2>
          <p className="setting-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="setting-btn">Learn More</button>   
        </div>
        <div className="setting-pic">
          <img src={SettingImg} alt="setting-image" className="setting-img" />
        </div>
      </div>    
    );
};

export default SettingBox;