import React from "react";
import FaqItem from "./FaqItem.jsx";

function FaqItems() {
  return (
    <FaqItem
      item={0}
      heading="What is Netflix"
      discription={`Netflix is a streaming service that offers a wide 
        variety of award-winning TV shows, movies, anime, documentaries,
         and more on thousands of internet-connected devices.`}
    />
  );
}

const Faq = () => {
  return (
    <>
      <div
        className="faqs text-white"
        style={{
          borderTop: "8px  #222 solid",
          width: "100%",
          height: "100%",
          padding: "30px 80px 30px 80px",
        }}
      >
        <h1 className="font-bold  text-5xl  text-center">
          Frequently Asked Question{" "}
        </h1>
      </div>
      <FaqItems />
    </>
  );
};

export default Faq;
