import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import { clearUser } from "../slices/auth";
// import axios from "axios";
// import { useEffect, useState } from "react";
import HomeNavBar from "../Components/home-navbar";
import HotelsAlbum from "../Components/hotelsalbum";
import Footer from "../Components/footer";


function HomePage() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  // const username = useSelector(state => state.auth.username)

  if (isAuthenticated === false) {
    console.log(isAuthenticated)
    return <Redirect to='/login' />;
  }


  return (
    <>
      <HomeNavBar/>
      <HotelsAlbum/>
      <Footer/>
    </>
  )
}



export default HomePage;