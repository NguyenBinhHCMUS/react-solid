import React, { useState, useEffect } from "react";
import { showAlert } from "./alert";

interface ListItem {
  id: number | string;
  name: string;
}

export function ListComponent() {
  // Our local state
  const [list, setList] = useState<ListItem[]>([]);

  // Handler to load data from the server
  const fetchList = async () => {
    try {
      const resp = await fetch("https://www.url.com/list");
      const data = await resp.json();

      setList(data);
    } catch {
      showAlert({ text: "Something went wrong!" });
    }
  };

  // We want to fetch only on mount
  useEffect(() => {
    fetchList();
  }, []);

  // Handler responsible for deleting items
  const handleDeleteItem = (id) => {
    return () => {
      try {
        fetch(`https://www.url.com/list/${id}`, {
          method: "DELETE",
        });
        setList((prev) => prev.filter((x) => x.id !== id));
      } catch {
        showAlert({ text: "Something went wrong!" });
      }
    };
  };

  // Here we just render our data items
  return (
    <div className="list-component">
      {list.map(({ id, name }) => (
        <div key={id} className="list-component__item>">
          {/* We want to trim long name with ellipsis */}
          {name.slice(0, 30) + (name.length > 30 ? "..." : "")}

          <div
            onClick={handleDeleteItem(id)}
            className="list-component__icon"
          >
            DeleteIcon
          </div>
        </div>
      ))}
    </div>
  );
}
