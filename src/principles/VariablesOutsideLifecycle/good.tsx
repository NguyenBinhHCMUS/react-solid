import React, { useState } from "react";

const DEFAULT_ITEMS = [1, 2, 3, 4, 5];

const toggleArrayItem = (arr, val) => {
  return arr.includes(val)
    ? arr.filter((el) => el !== val)
    : [...arr, val];
};

export function useItemsList() {
  const [items, setItems] = useState(DEFAULT_ITEMS);

  const handleToggleItem = (num: number) => {
    return () => {
      setItems(toggleArrayItem(items, num));
    };
  };

  return {
    items,
    handleToggleItem,
  };
}
