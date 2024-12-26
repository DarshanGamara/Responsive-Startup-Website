import "./Work.css"



  function Work() {
      const works = "WORKS";
      const spacedWorks = works.split("").join(" "); 

       return (
         <div className="workBox">
           <p className="work">{spacedWorks}</p>
           <h2 className="work-h2">Portfolio</h2>
           <p className="work-text">
             Lorem ipsum, dolor sit amet consectetur <br></br> adipicing elit
           </p>   
         </div>
       );
  };


  export default Work;

