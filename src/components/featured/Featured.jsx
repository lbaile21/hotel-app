import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://content.vistana.com/files/live/sites/vistana-digital-content-manager/files/images/properties/Marriott Vacation Club/AB/RTNS1A-2314_ArubaOceanClub_exterior_ARU-P-274_4_3.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Palm Beach, Aruba</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://content.vistana.com/files/live/sites/vistana-digital-content-manager/files/images/properties/Marriott Vacation Club/LS/RTNS1A-2314_LosSuenos_exterior_resortaerial_mvcSJOMVexcmyk-196632_4_3.png" data-src="https://content.vistana.com/files/live/sites/vistana-digital-content-manager/files/images/properties/Marriott Vacation Club/LS/RTNS1A-2314_LosSuenos_exterior_resortaerial_mvcSJOMVexcmyk-196632_4_3.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Puntarenas, Costa Rica</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://content.vistana.com/files/live/sites/vistana-digital-content-manager/files/images/properties/wlcrv/VMA-23827_WestinLosCabos_hero_exterior_svoSJDWVex-198569_4_3.png" data-src="https://content.vistana.com/files/live/sites/vistana-digital-content-manager/files/images/properties/wlcrv/VMA-23827_WestinLosCabos_hero_exterior_svoSJDWVex-198569_4_3.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Baja California Sur, Mexico</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
