import React from 'react';
import Header from '../common/Header';
import image from "../assets/img/header.jpg";


function Home() {

   
    return (
        
        <Header
            title= "Welcome to my world"
            subtitle= "Explore the Rapixar-Verse"
            buttonText= "EXPLORE"
            link= "/service"
            showButton= {true}
            image= {image} 
        />
    )
    
}

export default Home;