import "./Partners.css";
import Google from "../../Assets/all logo/XMLID_24_.svg"
import Microsoft from "../../Assets/all logo/XMLID_M_.svg";
import Airbnb from "../../Assets/all logo/XMLID_a_.svg";
import Facebook from "../../Assets/all logo/Group_f.svg";
import Spotify from "../../Assets/all logo/XMLID_s_.svg";
   
function partners() {
   const partners = "PARTNERS";
   const spacedPartners = partners.split("").join(" "); 

     return (
       <div className="partner-main">
         <div className="partner-text">
           <p className="partner">{spacedPartners}</p>
           <h2 className="partner-h2">Lorem ipsum dolar</h2>
           <p className="partner-p">
             Lorem ipsum, dolor sit amet consectetur <br></br> adipicing elit
           </p>
         </div>
         <div className="partner-logo">
           <img src={Google} alt="google" />
           <img src={Microsoft} alt="microsoft" />
           <img src={Airbnb} alt="airbnb" />
           <img src={Facebook} alt="facebook" />
           <img src={Spotify} alt="spotify" />
         </div>
         <button className="learn">Learn More</button>
       </div>
     );
};

export default partners;