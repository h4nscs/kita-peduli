import React from "react";
import { useNavigate } from "react-router-dom"; // jangan lupa import
import "./header.css";
import IconImage from "../assets/Icon.png";
import Profile from "../assets/Profile.png";

// Komponen Icon
function Icon() {
  return <img src={IconImage} alt="Logo" className="logo" />;
}

// Komponen Tombol Login
function TombolLogin() {
  return (
    <div className="authButtons">
      <button className="tombolMasuk">Masuk</button>
      <button className="tombolDaftar">Daftar</button>
    </div>
  );
}

// Komponen Foto Profil
function FotoProfil() {
  return <img src={Profile} alt="Foto Profil" className="fotoProfil" />;
}

// Tombol dengan navigasi ke Home
function TombolHome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <button onClick={handleClick} className="tombolHeader">
      Home
    </button>
  );
}

// Tombol dengan navigasi ke Event
function TombolEvent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/event');
  };

  return (
    <button onClick={handleClick} className="tombolHeader">
      Event
    </button>
  );
}

// Tombol dengan navigasi ke Rewards
function TombolRewards() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/rewards');
  };

  return (
    <button onClick={handleClick} className="tombolHeader">
      Rewards
    </button>
  );
}

// Komponen Kumpulan Tombol Header
function KumpulanTombolHeader({ isLoggedIn }) {
  return (
    <div className="kumpulanTombolHeader">
      <TombolHome />
      <TombolEvent />
      <TombolRewards />
      {isLoggedIn ? <FotoProfil /> : <TombolLogin />}
    </div>
  );
}

// Komponen Header Utama
function Header({ isLoggedIn }) {
  return (
    <div className="header">
      <Icon />
      <KumpulanTombolHeader isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Header;
