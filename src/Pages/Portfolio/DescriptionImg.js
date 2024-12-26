import "./DescriptionImg.css";
import Frame1 from "../../Assets/PortfolioImg/dscdscd 1.svg";
import Frame2 from "../../Assets/PortfolioImg/Frame 2.svg";
import Frame3 from "../../Assets/PortfolioImg/Frame 3.svg";
import Frame4 from "../../Assets/PortfolioImg/Frame 4.svg";
import Frame5 from "../../Assets/PortfolioImg/Frame 5.svg";
import Frame6 from "../../Assets/PortfolioImg/Frame 6.svg";
import Frame7 from "../../Assets/PortfolioImg/Freame 7.svg";
import Frame8 from "../../Assets/PortfolioImg/Frame 8.svg";

function DescriptionImg() {
    
     const images = [Frame1, Frame2, Frame3, Frame4, Frame5, Frame6, Frame7, Frame8];

  return (
    <div className="desc-img">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`frame-${index + 1}`} />
      ))}
    </div>
  );
};

export default DescriptionImg;