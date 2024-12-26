import "./Team.css"
import CEO from "../../Assets/Group-ceo.svg";
import CTO from "../../Assets/Group-cto.svg";
import Designer from "../../Assets/Group-designer.svg";
import Developer from "../../Assets/Group-devloper.svg";

function Team() {
   const team = "TEAM";
   const spacedTeam = team.split("").join(" ");

  return (
    <div className="team-box">
      <div className="team-text">
        <p className="team">{spacedTeam}</p>
        <h2 className="team-h2">Our Talents</h2>
        <p className="team-p">
          Lorem ipsum, dolor sit amet consectetur <br></br> adipicing elit
        </p>
      </div>
      <div className="team-img">
        <img src={CEO} alt="CEO" />
        <img src={CTO} alt="CTO" />   
        <img src={Designer} alt="Designer" />
        <img src={Developer} alt="Developer" />
      </div>
      <div className="team-btn-container">
        <button className="team-btn">Team View</button>
      </div>
    </div>
  );
};

export default Team;


