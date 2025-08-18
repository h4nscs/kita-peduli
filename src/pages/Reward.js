// src/pages/Home.js
import React from "react";
import "./Home.css";
import GambarHome from "../assets/Home.png"



export default function beranda() {
   return (
    <div className="gambarHome" style={{ backgroundImage: `url(${GambarHome})` }}>
      <h2>REWARD</h2>
      <p>Ini konten komponen dengan background gambar</p>
    </div>
  );
}
