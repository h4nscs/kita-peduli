import React from "react";
import { Link, useNavigate } from "react-router-dom"; // jangan lupa import
import "./footer.css";
import Icon  from "../assets/icon footer.png";
import Ig  from "../assets/ig.png";
import Fb  from "../assets/fb.png";
import X  from "../assets/twitter.png";
import Loc  from "../assets/loc.png";
import Mail  from "../assets/mail.png";
import Telp  from "../assets/telp.png";


function WrapIcon(){
    return(
        <div className='wrapIcon'>
        <img src={Icon}/>
        <h1 className="merk">KitaPEDULI</h1>
        </div>
    )
}

function WrapKiri(){
    return(
        <div className="wrapKiri">
        <WrapIcon/>
        <p className="descKiri">Platform yang<br></br>menghubungkan relawan<br></br>dengan kegiatan volunteer<br></br>di seluruh Indonesia</p>
        <div className="sosmed">
        <img src={Ig}/>
        <img src={Fb}/>
        <img src={X}/>
        </div>
        </div>
    )
}

function Tautan() {
  return (
    <div className="tautan">
      <h2 className="judul-tautan">Tautan</h2>
      <nav className="tautan-menu">
        <Link to="/home" className="tautan-link">Home</Link>
        <Link to="/event" className="tautan-link">Event</Link>
        <Link to="/rewards" className="tautan-link">Redeem</Link>
      </nav>
    </div>
  );
}

function Kontak() {
  return (
    <div className="allKontak">
    <h2 className="judul-tautan">Kontak</h2>
      <div className="kontakItem">
        <img src={Loc} className="icon" />
        <p>Jl. Kudus No. 1, Jakarta<br />Indonesia</p>
      </div>
      <div className="kontakItem">
        <img src={Mail} className="icon" />
        <p>info@kitapeduli.id</p>
      </div>
      <div className="kontakItem">
        <img src={Telp} className="icon" />
        <p>0800-0000-0000</p>
      </div>
    </div>
    
  );
}


function WrapKanan(){
    return(
        <div className="wrapKanan">
        <Tautan/>
        <Kontak/>
        </div>
    )
}

function AllFooter(){
    return(
        <div className="allFooter">
            <div className='footerAtas'>
                <WrapKiri/>
            <WrapKanan/>
            </div>
            <footer>
      © {new Date().getFullYear()} VolunteerHub. Hak Cipta Dilindungi.
    </footer>
        </div>
    )
}

export default AllFooter;