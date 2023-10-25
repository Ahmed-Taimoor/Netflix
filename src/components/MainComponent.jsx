import React from "react";

const MainComponent = (props) => {
  return (
    <div
      style={{
        borderTop: "8px  #222 solid",
        width: "100%",
        height: "100%",
        padding: "30px 80px 30px 80px",
      }}
    >
      {" "}
      <div className="flex justify-around  ">
        <div
          className={`flex align-middle justify-center flex-col order-${props.textPosition} flex-wrap	`}
          style={{
            color: "#fff",
          }}
        >
          <h1 className="font-bold  text-5xl">{props.heading}</h1>
          <p className="mt-2 text-xl">{props.discription}</p>
        </div>
        <div className={`relative text-center order-${props.imagePosition}`}>
          <img src={props.imgSource} className="relative z-50" alt="" />
          {props.videoSource && (
            <video
              width="425"
              height="265"
              autoPlay
              muted
              loop
              className="absolute top-[21%] right-[14%] z-10"
            >
              <source src={props.videoSource} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
