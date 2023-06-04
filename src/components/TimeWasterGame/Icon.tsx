import { useState } from "react";
import {
  BsHeart,
  BsHeartFill,
  BsStar,
  BsStarFill,
  BsSquare,
  BsSquareFill,
  // BsSuitClub,
  // BsSuitClubFill,
  // BsSuitDiamond,
  // BsSuitDiamondFill,
  // BsSuitHeart,
  // BsSuitHeartFill,
  // BsSuitSpade,
  // BsSuitSpadeFill,
} from "react-icons/bs";
import { GiSuits } from "react-icons/gi";

interface Props {
  type: "heart" | "star" | "square" | "suit";
  color?: string;
  selectType?: (iconType: string) => void;
}

const Icon = ({ type, color, selectType }: Props) => {
  const [active, setActive] = useState(false);

  const handleOnClick = () => {
    if (typeof selectType === "undefined") {
      setActive(!active);
    } else {
      selectType(type);
    }
  };

  switch (type) {
    case "star":
      return (
        <div className="p-1 d-inline text-muted">
          {typeof selectType === "undefined" && !active && (
            <BsStar size={25} color={color} onClick={handleOnClick} />
          )}
          {(typeof selectType !== "undefined" || active) && (
            <BsStarFill size={25} color={color} onClick={handleOnClick} />
          )}
        </div>
      );
    case "square":
      return (
        <div className="p-1 d-inline text-muted">
          {typeof selectType === "undefined" && !active && (
            <BsSquare size={25} color={color} onClick={handleOnClick} />
          )}
          {(typeof selectType !== "undefined" || active) && (
            <BsSquareFill size={25} color={color} onClick={handleOnClick} />
          )}
        </div>
      );
    case "suit":
      return (
        <div className="p-1 d-inline text-muted">
          <GiSuits size={25} color={color} />
        </div>
      );
    default:
      return (
        <div className="p-1 d-inline text-muted">
          {typeof selectType === "undefined" && !active && (
            <BsHeart size={25} color={color} onClick={handleOnClick} />
          )}
          {(typeof selectType !== "undefined" || active) && (
            <BsHeartFill size={25} color={color} onClick={handleOnClick} />
          )}
        </div>
      );
  }
};

export default Icon;
