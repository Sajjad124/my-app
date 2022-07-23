import React from "react";

export function Card() {
  return (
    <div>
      <h1>This is the first card</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem.
      </p>
    </div>
  );
}

export function InputFields() {
  return <input type="text" className="name" required maxLength={10}></input>;
}

