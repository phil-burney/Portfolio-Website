import React, { FC } from 'react';
import PortfolioHolder from "./Display/PortfolioHolder"
type Portfolio = {

}
let style = {
    fontFamily: 'Roboto, sans-serif',

}
// eslint-disable-next-line no-empty-pattern
const Title: FC<Portfolio> = ({ }) => {
    return (
        <div style = {style} className="d-flex flex-column align-items-center p-2">
            <h1>My Portfolio</h1>
            <div  className="d-flex flex-column">
            <PortfolioHolder title="Reelie" description='A iOS/Android application that I build to make sharing photos, video, and textual information with others' language= "Dart" frameworks='Flutter' link="" text="Coming soon!" imageSource="../../portfolio/reeli-4-1024.png"/>
                <PortfolioHolder title="Broncotechnologies.com" description='A website I built to promote my new iOS/Android application' language= "JavaScript" frameworks='React.js, Astro' link="https://www.broncotechnologies.com" text="To the Bronco Technologies Website!" imageSource="../../portfolio/bronco-technologies.png"/>
                <PortfolioHolder title="Autafi" description='Place where users find buyers and sellers for their cars and parts' language= "Node.js, JavaScript" frameworks='Vue.js, Express.js, MongoDB' link="https://github.com/phil-burney/Autafi" text="To GitHub!" imageSource="../../portfolio/autafi.com.png"/>
                <PortfolioHolder title="philburney.com" description='The website you are looking at!  I decided to create a website that would allow potential employers to view my skills in full-stack development.  To view the source code, look under "About The Website".' language= "TypeScript, Python" frameworks='React, Django' link="/" text="www.philburney.com" imageSource="../../portfolio/philburney.com.png"/>
                {/* <PortfolioHolder title="Pathfinding.java" description='As a part of a Video Game AI class, we were given an assignment that would allow an entitiy to travel 
                between two different points while avoiding obstacles along the way.  To complete this project, I had to implement an adjacency list graph data structure.  
                Additionally, I implemented A* and Dijkstras pathfinding algorithms so the entity could find the most efficent path while also avoiding obstacles.' 
                language= "Node.js, JavaScript" frameworks='Vue.js, Express.js, MongoDB' link="www.autafi.com" imageSource="../../images/oilpan.jpg"/> */}
                <PortfolioHolder title="Movement.java" description='As a part of a Video Game AI class, we were given an assignment that would allow an entitiy to travel 
                between two different points using both kinematics (where only the velocity of an object is considered) and dynamics (where both velocity and acceleration 
                are taken into account).  We also had to implment flocking behavior for game entities, which is also shown above.'
                language= "Java" frameworks='Processing' link="https://github.com/phil-burney/Movement" text="To Github!" imageSource="../../portfolio/movementjava.gif"/>
            </div>

        </div>
    );
};

export default Title;