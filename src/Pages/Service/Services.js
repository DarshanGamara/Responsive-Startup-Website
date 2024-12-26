import "./Services.css";



  function Services() {
      const plans = "PLANS";
      const spacedPlans = plans.split("").join(" "); 

       return (
         <div className="servicesBox">
           <p className="services">{spacedPlans}</p>
           <h2 className="services-h2">Our Services</h2>
           <p className="services-text">
             Lorem ipsum, dolor sit amet consectetur <br></br> adipicing elit
           </p>
         </div>
       );  
  };


  export default Services;

