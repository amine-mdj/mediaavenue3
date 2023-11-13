import React from 'react'
import './home.css'
import video1 from "../img/1215.mp4";
import Homesection1 from "../components/homesection1";
import Homesection2 from "../components/homesection2";
import Homesection3 from "../components/homesection3";

const Home = ({ isActive }) =>{


   return (
      <div className='homeContainer' >
   
      <video className='video' autoPlay loop muted >
         <source src={video1} type='video/mp4'/>
      </video>
      <div className='hero-text'>
      {/* <h1 className='yours'>VOTRE AGENCE DIGITALE </h1>
      <h1 className='yours'>EN ALGERIE</h1>
      <hr></hr>
      <p>Ce n'est pas un site web ordinaire, ni une équipe ordinaire, ni des produits ordinaires.</p> */}
      </div>
      <Homesection1 />
      <Homesection2 />
      <Homesection3 />

      
      </div>)
}

export default Home