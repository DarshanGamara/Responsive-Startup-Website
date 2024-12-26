import "./Home.css";
import GroupImg from "../../Assets/Group.svg";
import Partners from "./Partners";
import { Fragment } from "react";
import MessageBox from "./MessageBox";
import SettingBox from "./SettingBox";
import Team from "./Team";


function Home() {
   const welcome = "WELCOME";
   const spacedWelcome = welcome.split("").join(" ");


  return (
    <Fragment>
      <div className="home">
        <div className="home-text">
          <p className="welcome">{spacedWelcome}</p>
          <h2 className="text-h2">
            Lorem ipsum dolor sit <br></br> amet consectetur
          </h2>
          <p className="text-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <button className="btn">Explore</button>   
        </div>
        <div className="home-pic">
          <img src={GroupImg} alt="Group" className="group" />
        </div>
      </div>
      <Partners />
      <MessageBox />
      <SettingBox />
      <Team />
      
    </Fragment>
  );
};

export default Home;