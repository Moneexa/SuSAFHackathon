import React from 'react';

function DropdownMenu({ options }) {
  return (
    <div>
      <h2>Select a Feature:</h2>
      <select>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownMenu;
