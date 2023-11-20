import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chat } from "../../components/chatbot/chatb";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/fd/a8/86.jpg",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/fd/a8/8a.jpg",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/97/f7/3d.jpg",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6e/cc/d2.jpg",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0d/f9/7a/58.jpg",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/91/0f/95.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Marriott's Waikoloa Ocean Club</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Waikoloa Beach, Big Island, Hawai‘i, United States</span>
          </div>
          <span className="hotelDistance">
            Vacationer's like you enjoy these activities around the resort!
          </span>
          <span className="hotelPriceHighlight">
          Top Rated Snorkeling Destination
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Discover paradise inspired.</h1>
              <p className="hotelDesc">
              Marriott's Waikoloa Ocean Club is a paradise in paradise, where the ancient love story between the goddess Pele and Kamapua'a comes to life and inspires every detail. From the island's lush green flora and pristine waterfalls to its fiery red volcanos and black lava beds, the spacious one- and two-bedroom suites of this welcoming resort celebrate the rich culture and diverse landscape of the Big Island.

Beyond the 15-acre resort and on-site beach, adventure awaits. You can explore jungle trails on foot or horseback, trek ancient lava tubes, stroll black sand beaches and wander through colorful towns. Or set your sights even higher and tour active volcanoes of the snowcapped summit of Mauna Kea.
              </p>
            </div>
           
          </div>
        </div>
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

export default Hotel;
