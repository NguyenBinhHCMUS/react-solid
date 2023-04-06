import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { ListItem } from "./type";
import { deleteListItem, getList } from "./utils";

export function useList() {
  const [list, setList] = useState<ListItem[]>([]);

  const handleDeleteItem = useCallback((id: number | string) => {
    return () => {
      deleteListItem(id, () => {
        setList((prev) => prev.filter((x) => x.id !== id));
      });
    };
  }, []);

  useEffect(() => {
    getList(setList);
  }, []);

  return useMemo(
    () => ({
      list,
      handleDeleteItem,
    }),
    [list, handleDeleteItem]
  );
}
