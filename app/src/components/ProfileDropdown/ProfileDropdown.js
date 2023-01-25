import React, { useState, useEffect } from "react";
import "./ProfileDropdown.css";

function ProfileDropdown({ items, select, setOpen }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
    return () => setOpacity(0);
  }, []);

  const itemProps = {
    edit: false,
  };

  return (
    <div className="ProfileDropdown" style={{ opacity }}>
      <ul className="profile-dropdown-list">
        {items.map((item) => (
          <li
            key={item[0]}
            onClick={(e) => {
              select(item[1], { updateData: item[2], ...itemProps });
              setOpen(false);
            }}
            className="profile-dropdown-item"
          >
            {item[0]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileDropdown;
