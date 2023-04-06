import React from "react";
import { useList } from "./useList";
import { trimName } from "./utils";

export function ListComponentItem({ name, onDelete }) {
  return (
    <div className="list-component__item>">
      {trimName(name)}

      <div onClick={onDelete} className="list-component__icon">
        DeleteIcon
      </div>
    </div>
  );
}

export function ListComponent() {
  const { list, handleDeleteItem } = useList();

  return (
    <div className="list-component">
      {list.map(({ id, name }) => (
        <ListComponentItem
          key={id}
          name={name}
          onDelete={handleDeleteItem(id)}
        />
      ))}
    </div>
  );
}
