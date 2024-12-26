import "./Message.css";
import GroupChat from "../../Assets/Group_chat.svg";

  function MessageBox() {
    return (
      <div className="message">
        <div className="message-pic">
          <img src={GroupChat} alt="people chat" className="group-chat-pic" />
        </div>
        <div className="message-text">      
          <h2 className="chat-h2">
            Lorem ipsum dolar sit <br></br> amet consectetur
          </h2>
          <p className="chat-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <button className="chat-btn">Learn More</button>
        </div>
      </div>
    );
  };

  export default MessageBox;