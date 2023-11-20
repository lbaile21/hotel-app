import "./searchItem.css";

const SearchItem2 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://content.vistana.com/files/live/sites/vistana-digital-content-manager/files/images/properties/skrv/PT-3487_SheratonKauaiResortVillas_exterior_amenities_firepit_svoLIHSUexrgb-198868_4_3.png"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Sheraton Kaua‘i Resort Villas</h1>
        <span className="siDistance">Koloa, Kaua‘i, Hawai‘i, United States</span>
        <span className="siTaxiOp">Hikers Paradise</span>
        <span className="siSubtitle">
        One and Two-bedroom Suites Available
        </span>
        <span className="siCancelOp">Gather Together on the Garden Isle of Kaua‘i</span>
        <span className="siCancelOpSubtitle">
        Ideally located on exquisite Po‘ipū Beach, Sheraton Kaua‘i Resort welcomes you to discover the island's beauty and warm aloha spirit.
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$460 USD / Night</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem2;
