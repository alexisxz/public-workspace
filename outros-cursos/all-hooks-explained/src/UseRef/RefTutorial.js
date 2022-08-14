import React, { useRef, useState } from "react";

function RefTutorial() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };

  let onChange = (event) => {
    const newValue = event.target.value;
    setName(newValue);
  }

  return (
    <div>
      <h1>{name}</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} onChange={onChange} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
