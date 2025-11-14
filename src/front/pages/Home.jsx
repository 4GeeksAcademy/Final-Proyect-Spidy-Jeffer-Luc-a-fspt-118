import React, { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { Features1 } from "../components/Features1";
import StartShopping from "../components/Call";
import GenerateQr from "../components/GenerateQr.jsx";
import { SingleProduct } from "../components/singleProduct.jsx";


export const Home = () => {
  const { store, dispatch } = useGlobalReducer();



  return (
    <>
      <Header />
      <HeroSection />
      <Features1 />
      <GenerateQr />
      <StartShopping />
    </>
  );
};

