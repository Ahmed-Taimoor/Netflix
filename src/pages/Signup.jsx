import React from "react";
import MainComponent from "../components/MainComponent";
import HeroSignup from "../components/HeroSignup";
import Faq from "../components/Faq";

const Signup = () => {
  return (
    <>
      <HeroSignup />
      <MainComponent
        heading="Enjoy on your TV."
        discription={` Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
        players, and more.`}
        textPosition="1"
        imagePosition="2"
        imgSource="tv.png"
        videoSource="a.m4v"
      />
      <MainComponent
        heading="Download your shows to watch offline.
        "
        discription=" Save your favorites easily and always have something to watch.
        "
        textPosition="2"
        imagePosition="1"
        imgSource="mobile-0819.jpg"
      />
      <MainComponent
        heading="Watch everywhere."
        discription=" Stream unlimited movies and TV shows on  your phone, tablet, laptop, and TV."
        textPosition="1"
        imagePosition="2"
      />
      <MainComponent
        heading="Create profiles for kids.
        "
        discription="Send kids on adventures with their favorite characters in a space made just for them—free with your membership.      "
        textPosition="2"
        imagePosition="1"
        imgSource="kids.png"
      />
      <Faq />
    </>
  );
};

export default Signup;
