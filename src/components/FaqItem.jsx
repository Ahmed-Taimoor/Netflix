import React, { useState } from "react";

const FaqItem = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handelClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="flex justify-center">
      <div
        className="faq-item text-white flex justify-around w-[50%] pb-24"
        style={{}}
      >
        <div
          onClick={() => {
            handelClick(props.index);
          }}
        >
          <h3>{props.heading}</h3>
          {activeIndex === props.index && (
            <p className=" inline">{props.discription}</p>
          )}
        </div>
        <div>
          <img src="x.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
