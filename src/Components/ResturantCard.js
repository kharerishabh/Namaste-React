import { CDN_URL } from "../utilis/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId} = resData?.info;
  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ★</h4>
      <h5>{resData.info.sla.deliveryTime} min</h5>
    </div>
  );
};

 // Higher Order Component
  
 // Input - ResturantCard ==>> ResturantCardAreaName
 export const withAreaNameLabel = (ResturantCard) => {
  return (props) => {
    const {resData} = props
    const {areaName} = resData?.info
    return (<div>
      <label className="absolute bg-black text-white m-2 p-2 rounded-lg">{areaName}</label>
      <ResturantCard {...props}/>
    </div>)
  }
 }
export default ResturantCard;
