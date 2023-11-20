import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src = "https://content.vistana.com/files/live/sites/vistana-digital-content-manager/files/images/properties/Marriott Vacation Club/WK/RTNS1A-2314_WaikoloaOceanClub_exterior_amenities_pool_aerial_WK-P-068_4_3.png"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Marriott's Waikoloa Ocean Club</h1>
        <span className="siDistance">Waikoloa Beach, Big Island, Hawai‘i, United States</span>
        <span className="siTaxiOp">Top Rated Snorkeling Destination </span>
        <span className="siSubtitle">
        One and Two-bedroom Suites Available
        </span>
        <span className="siCancelOp">Discover paradise inspired.</span>
        <span className="siCancelOpSubtitle">
        This welcoming oasis celebrates the breathtaking landscapes of the Big Island — its white-sand beaches, lush green flora and sparkling waterfalls.
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.7</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$754 / Night</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
