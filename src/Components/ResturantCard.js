import { CDN_URL } from "../utilis/constants";

const ResturantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId} = resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h5>{resData.info.sla.deliveryTime} min</h5>
      </div>
    );
  };
  export default ResturantCard