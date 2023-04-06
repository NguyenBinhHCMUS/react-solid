import React, { useState } from "react";

export function useItemsList() {
  const defaultItems = [1, 2, 3, 4, 5];
  const [items, setItems] = useState(defaultItems);

  const toggleArrayItem = (arr, val) => {
    return arr.includes(val)
      ? arr.filter((el) => el !== val)
      : [...arr, val];
  };

  const handleToggleItem = (num) => {
    return () => {
      setItems(toggleArrayItem(items, num));
    };
  };

  return {
    items,
    handleToggleItem,
  };
}
