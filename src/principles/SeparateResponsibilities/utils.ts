import { showAlert } from "./alert";

export async function getList(onSuccess) {
  try {
    const resp = await fetch("https://www.url.com/list");
    const data = await resp.json();

    onSuccess(data);
  } catch {
    showAlert({ text: "Something went wrong!" });
  }
}

export async function deleteListItem(id, onSuccess) {
  try {
    fetch(`https://www.url.com/list/${id}`, {
      method: "DELETE",
    });
    onSuccess();
  } catch {
    showAlert({ text: "Something went wrong!" });
  }
}

export function trimName(name) {
  return name.slice(0, 30) + (name.lenght > 30 ? "..." : "");
}
