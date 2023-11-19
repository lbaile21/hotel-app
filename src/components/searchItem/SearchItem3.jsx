import "./searchItem.css";

const SearchItem3 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://content.vistana.com/files/live/sites/vistana-digital-content-manager/files/images/properties/Marriott Vacation Club/KO/21-772433_KoOlinaBeachClub_hero_exterioraerial_mvcHNLKOex_189177_4_3.png?t=663"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Marriott's Ko Olina Beach Club®</h1>
        <span className="siDistance">Kapolei, O‘ahu, Hawai‘i, United States</span>
        <span className="siTaxiOp">Golfer's Paradise</span>
        <span className="siSubtitle">
        One and Two-bedroom Suites Available
        </span>
        <span className="siCancelOp">Discover your beachfront hideaway.</span>
        <span className="siCancelOpSubtitle">
        This Hawaiian hideaway is tucked within Ko Olina Resort & Marina, a lush, 640-acre gated community built around picturesque crystal-clear lagoons, just half an hour from Honolulu.
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.8</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$705 USD / Night</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem3;
