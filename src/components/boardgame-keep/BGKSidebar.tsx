import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import { Category, Shelf } from "../../interfaces/GameShelf";
import { useGetTemporaryShelf } from "../../hooks/useTemporaryDataStore";

interface BGKSidebarProps {
  handleShelfSelect: (shelfId: string, categoryId?: string) => void;
}

const BGKSidebar = ({ handleShelfSelect }: BGKSidebarProps) => {
  const shelves = useGetTemporaryShelf();
  return (
    <Sidebar breakPoint="sm">
      <Menu>
        {shelves.map((shelf: Shelf, index: number) =>
          shelf.numberOfItems > 0 ? (
            <SubMenu
              key={index}
              label={shelf.name + " (" + shelf.numberOfItems + ")"}
            >
              <MenuItem onClick={() => handleShelfSelect(shelf.id)}>
                All
              </MenuItem>
              {shelf.categories.map((category: Category, catIndex) => (
                <MenuItem
                  key={catIndex}
                  onClick={() => handleShelfSelect(shelf.id, category.id)}
                >
                  {category.name + " (" + category.numberOfItems + ")"}
                </MenuItem>
              ))}
            </SubMenu>
          ) : (
            <MenuItem key={index} onClick={() => handleShelfSelect(shelf.id)}>
              {shelf.name + " (" + shelf.numberOfItems + ")"}
            </MenuItem>
          )
        )}
      </Menu>
    </Sidebar>
  );
};

export default BGKSidebar;
