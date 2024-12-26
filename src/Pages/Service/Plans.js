import "./Plans.css";
import { FcCheckmark } from "react-icons/fc";

const plans = [
  {
    name: "Basic",
    price: "Rs.4999",
    features: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
  {
    name: "Plus",
    price: "Rs.9999",
    features: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
  {
    name: "Pro",
    price: "Rs.14999",
    features: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
];


function Plans() {
    return (
      <div className="plansBox">
        {plans.map((plan, index) => (
          <div className={plan.name.toLowerCase()} key={index}>
            <p>{plan.name}</p>
            <p>
              <b className="rs">{plan.price}</b> /month
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet
              <br /> consectetur adipiscing elit, sed
              <br /> do eiusmod tempor
            </p>
            {plan.features.map((feature, i) => (
              <p className="checkmark" key={i}>
                <FcCheckmark />
                &emsp; {feature}
              </p>
            ))}
            <button className="setting-btn">Learn More</button>
          </div>
        ))}
      </div>
    );
};





/*function Plans() {
   return (
     <div className="plansBox">
       <div className="basic">
         <p>Basic</p>
         <p>
           <b className="rs">Rs.4999</b> /month
         </p>
         <p className="text">
           Lorem ipsum dolor sit amet<br></br> consectetur adipiscing elit, sed
           <br></br> do eiusmod tempor
         </p>
         <p className="checkmark">
           <FcCheckmark />
           &emsp; Lorem ipsum dolor sit
         </p>
         <p className="checkmark">
           <FcCheckmark />
           &emsp; Lorem ipsum dolor sit
         </p>
         <p className="checkmark">
           <FcCheckmark />
           &emsp; Lorem ipsum dolor sit
         </p>
         <p className="checkmark">
           <FcCheckmark />
           &emsp; Lorem ipsum dolor sit
         </p>
         <p className="checkmark">
           <FcCheckmark />
           &emsp; Lorem ipsum dolor sit
         </p>
         <button className="setting-btn">Learn More</button>;
       </div>
       <div className="plus">
         <p>Plus</p>
         <p>
           <b className="rs">Rs.7999</b> /month
         </p>
         <p className="text">
           Lorem ipsum dolor sit amet<br></br> consectetur adipiscing elit, sed
           <br></br> do eiusmod tempor
         </p>
       </div>
       <div className="pro">
         <p>Pro</p>
         <p>
           <b className="rs">Rs.11999</b> /month
         </p>
         <p className="text">
           Lorem ipsum dolor sit amet<br></br> consectetur adipiscing elit, sed
           <br></br> do eiusmod tempor
         </p>
       </div>
     </div>
   );
  };*/

  export default Plans;
