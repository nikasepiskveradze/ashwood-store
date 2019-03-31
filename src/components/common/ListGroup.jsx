import React from "react";

const ListGroup = props => {
  const { items, onItemSelect, selectedItem } = props;
  return (
    <div className="single category">
      <ul className="list-unstyled">
        {items.map(item => (
          <li
            onClick={() => onItemSelect(item)}
            key={item._id}
            className={item === selectedItem ? "category-active" : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
