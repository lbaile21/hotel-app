import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import { Chat } from '../../components/chatbot/chat';
import { useState } from "react";

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Experiences Guests Love</h1>
        <FeaturedProperties />

        {isChatOpen && (
          <div className="chatOverlay">
            <Chat />
          </div>
        )}

        <button className={`openChatButton ${isChatOpen ? 'active' : ''}`} onClick={toggleChat}>
          <span className="openChatIcon">🗨️</span>
          {isChatOpen ? <span className="closeChatText">Close Chat</span> : <span className="openChatText">AI Concierge</span>}
        </button>

        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
