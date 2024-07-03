import React from "react";
import HomePage from "./Home/HomePage";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <main className="">
        <Navbar />
        <HomePage />
      </main>
    </>
  );
};

export default Home;
