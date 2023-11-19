import "./propertyList.css";

const PropertyList = () => {
  return (
    
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://s23040.pcdn.co/wp-content/images/destinations-overview/vacationClubDestinations.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://s23040.pcdn.co/wp-content/images/sct_content/CUSTOM_290_1.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://s23040.pcdn.co/wp-content/images/explorer-collection/Cruise_2.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cruises</h1>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://s23040.pcdn.co/wp-content/images/explorer-collection/vacation-homes.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Vacation Homes</h1>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://s23040.pcdn.co/wp-content/images/explorer-collection/specialty.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Speciality Packages & Activities</h1>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
