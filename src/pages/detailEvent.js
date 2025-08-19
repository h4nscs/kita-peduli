import React, { useState } from "react";
import "./detailEvent.css";
import events from "../data/events.json"
import { Link, useNavigate, useParams } from "react-router-dom";
import Loc from "../assets/loc_event.png"
import People from "../assets/people.png"
import Calendar from "../assets/calendar.png"
import Clock from "../assets/clock.png"


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

function OverlayBawah( {event}){
    return(
        <div className="overlayBawah">
            <img src={Calendar} title="Calendar" className="icon"/>
            <p>{formatDate(event.date)}</p>
            <img src={Clock} title="Clock" className="icon"/>
            <p>{event.jam}</p>
            <img src={Loc} title="Location" className="icon"/>
            <p>{event.location}</p>
            <img src={People} title="People" className="icon"/>
            <p>{event.persons} Persons</p>
        </div>
    )
}

function OverlayGambar({event}){
    return(
        <div className="overlayGambar">
            <div>
            {event.categories.map(cat => (
              <span key={cat} className="badge">{cat}</span>
            ))}
          </div>
            <h1 className="title">{event.title}</h1>
            <p className="eo">Oleh: {event.organizer}</p>
            <OverlayBawah event={event}/>

        </div>
    )
}

function GambarUtama({event}){
  return (
    <img src={`${process.env.PUBLIC_URL}${event.pic}`} alt="Gambar" className='gambar'/>
  );
}

function WrapMainPic({event}){
    return(
        <div className="wrapMainPic">
        <GambarUtama event={event}/>
        <OverlayGambar event={event}/>
        </div>
    )
}

function AllTeks({ judul, isi }) {
  return (
    <div className="allTeks">
      <h1 className="judulTeks">{judul}</h1>
      <p className="isi">{isi}</p>
    </div>
  );
}




function PageDetailEvent({ events }) {
  const { id } = useParams(); // ambil id dari URL
  const event = events.find(ev => ev.id.toString() === id);

  if (!event) return <p className="error">Event tidak ditemukan!</p>;

  return (
    <div>
     <WrapMainPic event={event}/>
     <AllTeks judul="About This Event" isi="Ini isi teks" />
     <AllTeks judul="Requirement" isi="Ini isi teks" />
     <AllTeks judul="What Will We Do" isi="Ini isi teks" />
     <h1 className="aboutEO">About the Organizer</h1>
    </div>
  );
}



export default PageDetailEvent;