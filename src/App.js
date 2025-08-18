import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/Home";
import EventPage from "./pages/Events";
import PageDetailEvent from './pages/detailEvent';
import RewardsPage from "./pages/Reward";
import Footer from "./components/footer";
import events from './data/events.json';

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />        {/* Home Page */}
        <Route path="/home" element={<HomePage isLoggedIn={isLoggedIn} />} />    {/* Bisa juga /home */}
        <Route path="/event" element={<EventPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/detailEvent/:id" element={<PageDetailEvent events={events} />} />


        <Route path="*" element={<HomePage isLoggedIn={isLoggedIn} />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
