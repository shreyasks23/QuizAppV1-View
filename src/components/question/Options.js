import React from "react";

export default function Option(props) {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <>
      <div>
        <input
          type="radio"
          value={props.value}
          name="options"
          onClick={onClick}
        />
        tejas
        <input
          type="radio"
          value={props.value}
          name="options"
          onClick={onClick}
        />
        shreyas
        <input
          type="radio"
          value={props.value}
          name="options"
          onClick={onClick}
        />
        mama
      </div>
    </>
  );
}
