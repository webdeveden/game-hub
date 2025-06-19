import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOder: string;
}

const sortSelector = ({ onSelectSortOrder, selectedSortOder }: Props) => {
  const sortOrderItems = [
    // { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Realease date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  // dynamycally passing the name of the selected sorted in the sorting box
  const curentSelectedOrder = sortOrderItems.find(
    (order) => order.value === selectedSortOder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {curentSelectedOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrderItems.map((item) => (
          <MenuItem
            onClick={() => onSelectSortOrder(item.value)}
            key={item.value}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default sortSelector;
