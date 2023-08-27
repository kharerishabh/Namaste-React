import React, {useState} from "react";
import ItemLists from "./itemLists";

const ResturantCategory = ({ data }) => {
  //  console.log(data);
  const [showItems, setShowItems] = useState(false)
  const handleClick = () => {
    setShowItems(!showItems)
  }

  return (
    <div>
      {/**Accordin Header */}
      <div className="mx-auto my-4 w-6/12 bg-gray-100 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemLists items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;