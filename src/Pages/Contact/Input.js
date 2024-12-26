import "./Input.css";
import Bvn from "../../Assets/ContactUs/static_map.png";

function Input() {
  return (
    <div className="input-box"> 

      <div className="input">
          <label htmlFor="name">Name</label>
          <br></br>
          <input id="name" placeholder="Enter Name Here" className="name" />
          <br></br>

          <label htmlFor="email">Email</label>
          <br></br>
          <input
            id="email"
            placeholder="Enter Email Address Here"
            className="email"
          />
          <br></br>

          <label htmlFor="msg">Message</label>
          <br></br>
          <input id="msg" placeholder="Write Your Message" className="msg" />
          <br></br>
          <button className="submit">Submit</button>
      </div>

      <div className="input-pic">
        <img src={Bvn} alt="Bhavnagar City Map" className="bvn" />
      </div>
    </div>
  );
};

export default Input;