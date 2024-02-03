import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";

interface Category {
  id: string;
  name: string;
  numberOfItems: number;
}

interface Shelf {
  id: string;
  name: string;
  categories: Category[];
  numberOfItems: number;
}

const BGKSidebar = () => {
  const shelves: Shelf[] = [
    {
      id: "1",
      name: "Owned",
      categories: [
        {
          id: "1",
          name: "Strategy",
          numberOfItems: 8,
        },
        {
          id: "2",
          name: "Card",
          numberOfItems: 21,
        },
        {
          id: "3",
          name: "Puzzles",
          numberOfItems: 5,
        },
      ],
      numberOfItems: 3,
    },
    {
      id: "2",
      name: "Interests",
      categories: [],
      numberOfItems: 0,
    },
    {
      id: "3",
      name: "Reject Pile",
      categories: [],
      numberOfItems: 0,
    },
  ];

  return (
    <Sidebar>
      <Menu>
        {shelves.map((shelf: Shelf, index: number) =>
          shelf.numberOfItems > 0 ? (
            <SubMenu
              key={index}
              label={shelf.name + " (" + shelf.numberOfItems + ")"}
            >
              {shelf.categories.map((category: Category, catIndex) => (
                <MenuItem key={catIndex}>
                  {category.name + " (" + category.numberOfItems + ")"}
                </MenuItem>
              ))}
            </SubMenu>
          ) : (
            <MenuItem key={index}>
              {shelf.name + " (" + shelf.numberOfItems + ")"}
            </MenuItem>
          )
        )}
      </Menu>
    </Sidebar>
  );
};

export default BGKSidebar;
