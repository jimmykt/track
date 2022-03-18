import "./HomePage.scss";
import React, { useState, useEffect } from "react";

function HomePage() {
  const token = sessionStorage.getItem("token");

  return (
    <body className="home">
      <p className="home__test">testt</p>
    </body>
  );
}

export default HomePage;
