// src/pages/Home.js
import React, { useState } from "react";
import "./Events.css";
import MainPic from "../assets/Events/MainPic.png"
import events from "../data/events.json"
import { Link, useNavigate } from "react-router-dom";

function GambarUtama(){
  return (
    <img src={MainPic} alt="Gambar" className='mainPic'/>
  );
}

function ItemGambarUtama(){
  return(
    <div className="itemGambarutama">
      <h1 className="judulUtama">Ikut Menjadi Pahlawan Bumi</h1>
      <p className="descUtama">Temukan cara yang positif untuk membantu komunitas dan<br></br>memberikan dampak positif</p>
    </div>
  )
}

function WrapGambarUtama(){
  return(
    <div className="wrapGambarUtama">
    <GambarUtama/>
    <ItemGambarUtama/>
    </div>
  )
}


function EventPage() {
  const [filter, setFilter] = React.useState("Semua");
  const [sortType, setSortType] = React.useState("oldest"); // ⬅️ tambahkan ini
  const [visibleCount, setVisibleCount] = React.useState(6); // ⬅️ jumlah awal
  const filteredEvents = events.filter(event => 
    filter === "Semua" || event.categories.includes(filter)
  );

  // urutkan berdasarkan sortType
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    switch (sortType) {
      case "oldest":
        return dateA - dateB;
      case "newest":
        return dateB - dateA;
      case "az":
        return a.title.localeCompare(b.title);
      case "za":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });
  const formatDate = (dateStr) => {
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

  const visibleEvents = sortedEvents.slice(0, visibleCount);

  return (
    <div>
      <div className="atasEvent">
      <div className="kiriEvent">
        <h2 className="eventVolunteer">Event Volunteer</h2>
      <p className="jelajahiKegiatan">Jelajahi kegiatan untuk membantu sesama</p>
      </div>
      <div className="kananEvent">
        {/* Dropdown Filter */}
      <label>
        Filter Kategori:{" "}
        <select value={filter} onChange={e => setFilter(e.target.value)} className="filter">
          <option value="Semua">Semua</option>
          <option value="Lingkungan">Lingkungan</option>
          <option value="Kebersihan">Kebersihan</option>
          <option value="Pendidikan">Pendidikan</option>
        </select>
      </label>

      {/* Dropdown Sort */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="sort">Urutkan: </label>
        <select
          className="filter"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="oldest">Tanggal Terlama</option>
          <option value="newest">Tanggal Terbaru</option>
          <option value="az">Nama A-Z</option>
          <option value="za">Nama Z-A</option>
        </select>
      </div>
      </div>
      </div>

      {/* Card List */}
     <div className="eventGrid">
          {visibleEvents.map(ev => (
          
          <div key={ev.id} className="eventCard">
            <img src={process.env.PUBLIC_URL + ev.pic} title={ev.title} className="eventPic"/>
            <div className="cardEventAtas">
            <div className="wrapTeksEvent">
              <h3 className="eventTitle">{ev.title}</h3>
            <p className="organizer">By {ev.organizer}</p>
            <p className="date">📅{formatDate(ev.date)}, {ev.jam}</p>
            <p className="date">📌{ev.location}<br></br>Jarak {ev.distance}</p>
            <div>
              {ev.categories.map(cat => (
                <span key={cat} className="badge">{cat}</span>
              ))}
            </div>
            </div>
            <div>
              <p className="point">{ev.points} Points</p>
            </div>
            </div>
            <Link className="link">
              <button className="detailBtn">
                Lihat Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
      {/* Tombol "Muat Lebih Banyak" */}
      <div className="wrapButton">
        {visibleCount < sortedEvents.length && (
        <button
          onClick={() => setVisibleCount(prev => prev + 3)} // tiap klik tambah 3
          className="loadMoreBtn"
        >
          Muat Lebih Banyak
        </button>
      )}
      </div>
    </div>
  );
}





function FullPageEvents() {
   return (
    <div>
      <WrapGambarUtama/>
      <EventPage/>
    </div>
  );
}

export default FullPageEvents;
