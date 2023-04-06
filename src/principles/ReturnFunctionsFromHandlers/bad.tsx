import React, { useState } from "react";

interface User {
  name: string;
  surname: string;
  address: string;
}

export default function Bad() {
  const [user, setUser] = useState<User>({
    name: "",
    surname: "",
    address: "",
  });

  // First handler
  const handleNameChange = (e) => {
    setUser((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  // Second handler!
  const handleSurnameChange = (e) => {
    setUser((prev) => ({
      ...prev,
      surname: e.target.value,
    }));
  };

  // Third handler!!!
  const handleAddressChange = (e) => {
    setUser((prev) => ({
      ...prev,
      address: e.target.value,
    }));
  };

  // What if we need one more input? Should we create another handler for it?

  return (
    <>
      <input value={user.name} onChange={handleNameChange} />
      <input value={user.surname} onChange={handleSurnameChange} />
      <input value={user.address} onChange={handleAddressChange} />
    </>
  );
}
