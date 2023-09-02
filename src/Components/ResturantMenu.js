import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utilis/useResturantMenu";
import ResturantCategory from "./ResturantCategory"

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

  const [showIndex, setShowIndex] = useState(null)

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0].card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ce) =>
        ce.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl border-top">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/** Categories Accordions*/}
      {categories.map((category, index) => {
        {
          /**Controlled Components */
        }
        return (
          <ResturantCategory
            key={category.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)} 
          />
        );
      })}
    </div>
  );
};

export default ResturantMenu;
