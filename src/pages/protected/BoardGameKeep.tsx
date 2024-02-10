import { Col, Row } from "react-bootstrap";
import GameSearch from "../../components/boardgame-geek/GameSearch";
import BGKSidebar from "../../components/boardgame-keep/BGKSidebar";
import Shelf from "../../components/boardgame-keep/Shelf";
import { useState } from "react";

const BoardGameKeep = () => {
  const [activeShelf, setActiveShelf] = useState<string>("1");
  const [activeCategory, setActiveCategory] = useState<string>(null);

  const handleShelfSelect = (shelfId: string, categoryId?: string) => {
    console.log("Shelf Id: ", shelfId);
    console.log("Category Id: ", categoryId);
    setActiveShelf(shelfId);
    setActiveCategory(categoryId);
  };

  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <BGKSidebar handleShelfSelect={handleShelfSelect} />
      <div className="p-4 pt-0 w-100">
        <Row>
          <Col>
            <GameSearch />
            <Shelf id={activeShelf} categoryId={activeCategory} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BoardGameKeep;
