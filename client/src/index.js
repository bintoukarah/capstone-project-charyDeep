import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Form from "./components/Form";
// import Footer from "./components/Footer.js";
// import FormEvent from "./components/FormEvent.js";
// import FormVlntr from "./components/FormVlntr.js";
// import FormAsso from "./components/FormAsso.js";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OneTchat from "./pages/OneTchat";
import AllTchat from "./pages/OneTchat";
import HomePage from "./pages/HomePage";
import ForgetPswd from "./pages/ForgetPswd";
import Search from "./pages/Search";
import ProfilAsso from "./pages/ProfilAsso.js";
import ProfilVlntr from "./pages/ProfilVolunteer.js";
import Evenement from "./pages/Events";
import AddEvents from "./pages/AddEvents";
import BottomNavBar from "./pages/BottomNavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/Homepage" exact element={<HomePage />} />
      <Route path="/" exact element={<SignIn />} />
      <Route path="/BottomNavBar" exact element={<BottomNavBar/>} />
      <Route path="/signUp" exact element={<SignUp />} />
      <Route path="/forget" exact element={<ForgetPswd />} />
      <Route path="/search" exact element={<Search />} />
      <Route path="/tchat" exact element={<AllTchat />} />
      <Route path="/tchat/:_id" exact element={<OneTchat />} />
      <Route path="/profil_asso/" exact element={<ProfilAsso />} />
      <Route path="/profil_asso/:_id" exact element={<ProfilAsso />} />
      <Route path="/profil_asso/:_id/evenement" exact element={<Evenement />} />
      {/* <Route path="/profil_asso/:_id/addevents" element={<AddEvents />}/> */}
       <Route path="/addevents" element={<AddEvents />}
      />
      <Route path="/profil_volunteer/:_id" exact element={<ProfilVlntr />} />
    </Routes>
  </BrowserRouter>
);
