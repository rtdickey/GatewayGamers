import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface Props {
  index: number;
  onClick: () => void;
}

const Like = ({ index, onClick }: Props) => {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  const [status, setStatus] = useState(false);

  const setColor = (index: number) => {
    return colors[index % 6];
  };

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  return (
    <div onClick={toggle} className="d-inline">
      {!status && <BsHeart color={setColor(index)} size={25} />}
      {status && <BsHeartFill color={setColor(index)} size={25} />}
    </div>
  );
};

export default Like;
