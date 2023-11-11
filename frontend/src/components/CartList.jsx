// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function ShoppingList() {
  const [listName, setListName] = useState("John Smith Shopping List");
  const [newListName, setNewListName] = useState("");

  const editListName = () => {
    setListName(newListName);
    setNewListName("");
  };

  return (
    <div>
      <h2>{listName}</h2>
      <input
        type="text"
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)}
        placeholder="Enter new list name"
      />
      <button onClick={editListName}>Edit List Name(owner)</button>
    </div>
  );
}

export default ShoppingList;
