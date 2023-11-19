import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/97/f7/3d.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Ali'i VIP Whale Tour</span>
        <span className="fpCity">Kahului, Hawaii</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/fd/a7/1b.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Turtle Canyon Snorkel Adventure</span>
        <span className="fpCity">Honolulu, Hawaii</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/74/ba/88.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Kaka'ako Bar Tour</span>
        <span className="fpCity">Honolulu, Hawaii</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/32/f3/fc.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Active Volcanoes & Helicopter Tour</span>
        <span className="fpCity">Honolulu, Hawaii</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
