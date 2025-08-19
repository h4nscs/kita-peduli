// src/pages/Home.js
import React from "react";
import "./Home.css";
import GambarHome from "../assets/Home.png"
import Home2 from "../assets/home2.png"
import Home3 from "../assets/home3.png"
import Home4 from "../assets/home4.png"
import Pohan from "../assets/foto pohan.jpg"
import Brian from "../assets/foto pohan.jpg"
import Hans from "../assets/foto pohan.jpg"
import Daftar from "../assets/daftar.png"
import Kontribusi from "../assets/kontribusi.png"
import Cari from "../assets/cari.png"
import Marquee from "react-fast-marquee";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';


function GambarBeranda() {
   return (
    <div className="gambarHome" style={{ backgroundImage: `url(${GambarHome})` }}>
    </div>
  );
}
function TeksGambar() {
  return (
    <div className="teksGambar">
      <h1 className="judulGambar">KitaPEDULI</h1>
      <p className="descJudul">
        Jadilah bagian dari kami dan menuju dunia yang lebih baik. Yuk cari kegiatan volunteermu!
      </p>
    </div>
  );
}

function BungkusGambar() {
  return (
    <div className="bungkusGambar">
      <GambarBeranda />
      <TeksGambar />
    </div>
  );
}

function JudulTeks1(){
  return(
    <h1 className="judulTeks">
    SIAPA KITA?
    </h1>
  )
}


function Teks1(){
  return (
    <p className="teks">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis placerat metus, id molestie metus mollis quis. Etiam vehicula, nulla eget suscipit faucibus, arcu lacus fringilla dolor, ac pharetra augue orci at nunc. Nullam finibus cursus libero, ut gravida nisl porttitor nec. Suspendisse facilisis odio porta, fermentum lacus quis, euismod ipsum. Aenean leo lectus, tincidunt et erat vel, semper vulputate magna. Maecenas euismod vitae mi ut tempus. Integer fermentum elit ut gravida convallis. Ut iaculis vitae nibh porttitor pellentesque. Pellentesque quis elementum velit. Nam ornare euismod massa, quis luctus nisl convallis eget. Nunc egestas semper sem, vel volutpat odio mollis sed. Sed facilisis at ligula id pulvinar. Donec gravida dolor a sapien ultrices lobortis. Nam mauris massa, varius tincidunt porttitor eget, malesuada consectetur eros. Morbi sed lorem a nulla bibendum condimentum at at metus.
    </p>
  )
}

function JudulTeks2(){
  return(
    <h1 className="judulTeks">
    TUJUAN KAMI?
    </h1>
  )
}


function Teks2(){
  return (
    <p className="teks">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis placerat metus, id molestie metus mollis quis. Etiam vehicula, nulla eget suscipit faucibus, arcu lacus fringilla dolor, ac pharetra augue orci at nunc. Nullam finibus cursus libero, ut gravida nisl porttitor nec. Suspendisse facilisis odio porta, fermentum lacus quis, euismod ipsum. Aenean leo lectus, tincidunt et erat vel, semper vulputate magna. Maecenas euismod vitae mi ut tempus. Integer fermentum elit ut gravida convallis. Ut iaculis vitae nibh porttitor pellentesque. Pellentesque quis elementum velit. Nam ornare euismod massa, quis luctus nisl convallis eget. Nunc egestas semper sem, vel volutpat odio mollis sed. Sed facilisis at ligula id pulvinar. Donec gravida dolor a sapien ultrices lobortis. Nam mauris massa, varius tincidunt porttitor eget, malesuada consectetur eros. Morbi sed lorem a nulla bibendum condimentum at at metus.
    </p>
  )
}

function WrapTeks1(){
  return(
    <div className="wrapperTeks">
      <JudulTeks1/>
      <Teks1></Teks1>
    </div>
  )
}
function WrapTeks2(){
  return(
    <div className="wrapperTeks">
      <JudulTeks2/>
      <Teks2></Teks2>
    </div>
  )
}

function WrapItem1(){
  return(
    <div className='wrapperItem'>
      <WrapTeks1></WrapTeks1>
      <img
        src={Home2}
        alt="home2"
        className= "gambarItem"
      />
    </div>
  )
}

function WrapItem2(){
  return(
    <div className="wrapperItem">
    <img 
    src={Home3}
        alt="home3"
        className= "gambarItem"/>
        <WrapTeks2></WrapTeks2>
    </div>
  )
}

function Gambar4(){
  return (
    <img src={Home4} alt="Gambar" className='gambar4'/>
  );
}

function RelawanAktif(){
  return(
    <div className="wrapperDescGambar4">
<h1 className="subJudulGambar4">5,000+</h1>
    <p className="subDescGambar4">
      Relawan Aktif
    </p>
    </div>
  )
}

function OrganisasiMitra(){
  return(
    <div className='wrapperDescGambar4'>
    <h1 className="subJudulGambar4">120+</h1>
    <p className="subDescGambar4">Organisasi Mitra</p>
    </div>
  )
}

function RelawanMitra(){
  return(
    <div className="barisGambar4">
      <RelawanAktif></RelawanAktif>
      <OrganisasiMitra></OrganisasiMitra>
    </div>
  )
}

function KegiatanSelesai(){
  return(
    <div className="wrapperDescGambar4">
<h1 className="subJudulGambar4">350+</h1>
    <p className="subDescGambar4">
      Kegiatan Selesai
    </p>
    </div>
  )
}

function JamRelawan(){
  return(
    <div className="wrapperDescGambar4">
<h1 className="subJudulGambar4">35,000+</h1>
    <p className="subDescGambar4">
      Jam Relawan
    </p>
    </div>
  )
}

function KegiatanRelawan(){
  return(
    <div className="barisGambar4">
      <KegiatanSelesai></KegiatanSelesai>
      <JamRelawan></JamRelawan>
    </div>
  )
}

function TeksGambar4(){
  return(
    <div className="teksGambar4">
    <h1 className="judulGambar4">
Dampak Kami
      </h1>
      <p className="descGambar4">
Bersama-sama, kita telah membuat perbedaan yang signifikan. Lihat apa yang telah kita capai sejauh ini.
      </p>
  </div>
  )
}

function AllTextGambar4(){
  return(
    <div className='allTextGambar4'>
    <TeksGambar4></TeksGambar4>
    <RelawanMitra></RelawanMitra>
    <KegiatanRelawan></KegiatanRelawan>
    </div>
  )
}

function WrapGambar4(){
  return(
    <div className="wrapGambar4">
    <Gambar4></Gambar4>
    <AllTextGambar4></AllTextGambar4>
    </div>
  )
}

function ApaKataRelawan(){
  return(
    <div className="kataRelawan">
      <h1 className='apaKataRelawanKami'>
    Apa Kata Relawan Kami
    </h1>
    <p className='dengarkanPengalaman'> Dengarkan pengalaman dari para relawan yang telah bergabung dengan kegiatan kami.</p>
    </div>
  )
}

const dataRelawan = [
  { nama: "Pohan", asal:"Makassar" ,testi: "Bagus", foto:Pohan },
  { nama: "Hans", asal:"Jakarta" ,testi: "Oke", foto:Hans },
  { nama: "Brian", asal:"Semarang" ,testi: "Pengalaman menjadi relawan di platform ini sangat memuaskan. Saya bisa bertemu dengan banyak orang yang memiliki visi yang sama.", foto:Brian}
];

function FotoRelawan({ foto, nama }){
  return(
    <img src={foto} alt={nama} className="fotoRelawan"/>
  )
}

function InfoRelawan({ nama }) {
  const relawan = dataRelawan.find((p) => p.nama === nama);
  if (!relawan) return null;

  return (
    <div className="infoRelawan">
      <FotoRelawan foto={relawan.foto} nama={relawan.nama} />
      <TeksRelawan relawan={relawan} />
    </div>
  );
}

function TeksRelawan({ relawan }) {
  return (
    <div className="teksRelawan">
      <h2 className="namaRelawan">{relawan.nama}</h2>
      <p className="asalRelawan">{relawan.asal}</p>
      <p className="testiRelawan">{relawan.testi}</p>
    </div>
  );
}


function Karosel() {
  return (
    <Marquee speed={200} autoFill>
      <div className="karosel">
      <div className="card"><InfoRelawan nama="Pohan"/></div>
      <div className="card"><InfoRelawan nama="Brian"/></div>
      <div className="card"><InfoRelawan nama="Hans"/></div>
      </div>
    </Marquee>
  );
}

function KotakCaraIkut({icon, judul, isi}){
  return(
    <div className="kotakCaraIkut">
      <img  src={icon} alt="icon" className="iconCaraIkut"/>
      <h4 className="judulKotakCaraIkut">{judul}</h4>
      <p className="isiCaraIkut">{isi}</p>
    </div>
  )
}

function WrapKotakCaraIkut(){
  return(
    <div className="wrapKotakCaraIkut">
    <KotakCaraIkut icon={Cari} judul="1. Cari Kegiatan" isi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis placerat metus, id"></KotakCaraIkut>
    <KotakCaraIkut icon={Daftar} judul="2. Daftar" isi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis placerat metus, id"></KotakCaraIkut>
    <KotakCaraIkut icon={Kontribusi} judul="3. Kontribusi" isi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis placerat metus, id"></KotakCaraIkut>
    </div>
  )
}

function WrapCaraIkut(){
  return(
    <div className="wrapCaraIkut">
    <h1 className="judulCaraIkut">Cara Ikut</h1>
    <p className="bergabungDengan">Bergabung dengan kegiatan volunteer sangat mudah.<br></br>Ikuti langkah-langkah berikut untuk mulai berkontribusi.</p>
    <WrapKotakCaraIkut></WrapKotakCaraIkut>
    </div>
  )
}

function WrapInginBergabung(){
  return(
    <div className="wrapInginBergabung">
      <h1 className="judulInginBergabung">Ingin bergabung menjadi Agen Perubahan?</h1>
      <p className="descInginBergabung">Bergabunglah menjadi partner kami dalam membantu<br></br>mengadakan event volunteer!</p>
      <button className="tombolBergabung">
      Bergabung
    </button>
    </div>
  )
}

function WrapSiapMenjadi(){
  return(
    <div className="wrapSiapMenjadi">
      <h1 className="judulSiapMenjadi">Siap menjadi bagian dari Perubahan ? </h1>
      <p className="descSiapMenjadi">Bergabunglah dengan ribuan relawan lainnya dan mulai berkontribusi untuk masyarakat dan lingkungan.</p>
      <button className="tombolBergabung">
      Bergabung
    </button>
    </div>
  )
}

function FullPage({ isLoggedIn }){

  return(
    <div className="page"> 
    <BungkusGambar></BungkusGambar>
    <WrapItem1></WrapItem1>
    <WrapItem2></WrapItem2>
    <WrapGambar4></WrapGambar4>
    <ApaKataRelawan> </ApaKataRelawan>
    <Karosel></Karosel>
    <WrapCaraIkut></WrapCaraIkut>
    {isLoggedIn ? <WrapSiapMenjadi /> : <WrapInginBergabung />}
    </div>
  )
}


export default FullPage;

