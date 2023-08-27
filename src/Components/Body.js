import ResturantCard, { withAreaNameLabel } from "./ResturantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utilis/useOnlineStatus";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const ResturantCardAreaName = withAreaNameLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3528525&lng=82.99719089999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    
    //optional chaining(?)
    setListOfResturant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1 style={{ textAlign: "center" }}>
        'Looks Like You Are offline!! Please Check Your Internet connection'
      </h1>
    );
  }
  //Conditional Rendering
  // if(listOfResturant.length === 0){
  //   return <Shimmer/>
  // }
  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-1 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              //filter the resturant cards and update the UI
              //Search Text
              const filteredResturant = listOfResturant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredResturant(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg"
            onClick={() => {
              console.log("cli");
              let filteredList = listOfResturant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredResturant(filteredList);
            }}
          >
            Top Rated Resturant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap m-4 p-4">
        {filteredResturant.map((resturant) => (
          <Link key={resturant.info.id} to={"/restaurant/" + resturant.info.id}>
            {" "}
            {
              /* {/**If the Resturant is AreaName Paharia then add label to it */
              resturant.info.areaName === "Shastri Nagar" ? (
                <ResturantCardAreaName resData={resturant} />
              ) : (
                <ResturantCard resData={resturant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
