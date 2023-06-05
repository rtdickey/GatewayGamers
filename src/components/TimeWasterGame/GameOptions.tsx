import { Form } from "react-bootstrap";
import Icon from "./Icon";

interface Props {
  selectType: (iconType: string) => void;
  selectColor: (iconColor: string) => void;
  selectNumberOfGamePieces: (numberOfGamePieces: number) => void;
}

const GameOptions = ({
  selectType,
  selectColor,
  selectNumberOfGamePieces,
}: Props) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          Choose an icon: <Icon type="heart" selectType={selectType} />
          <Icon type="star" selectType={selectType} />
          <Icon type="square" selectType={selectType} />
          {/* <Icon type="suit" selectType={selectType} /> */}
        </div>
        <div className="col">
          <Form.Select
            aria-label="Default select example"
            onChange={(event) => selectColor(event.target.value)}
            className="mt-2"
          >
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </Form.Select>
        </div>
        <div className="col">
          <Form.Select
            aria-label="Default select example"
            onChange={(event) =>
              selectNumberOfGamePieces(parseInt(event.target.value))
            }
            className="mt-2"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
};

export default GameOptions;
