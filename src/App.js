
import React from 'react';
import './App.css';
import ParticlesComponent from './Components/Particles/Particles';
import MainPage from './Pages/MainPage';
import { Helmet } from 'react-helmet';
import WelcomeScreen from './Components/WelcomeScreen';
function App() {
  const [lightordark, setLightOrDark] = React.useState(false);
  const [enteredWelcome, setEnteredWelcome] = React.useState(false);
  const [homeEnter, setHomeEnter] = React.useState(false);
  return (

    <div className='remove_scroll'>
      <WelcomeScreen particlesStateSetter={setEnteredWelcome} homeStateSetter={setHomeEnter} />
      <ParticlesComponent active={lightordark} entered={enteredWelcome} />
      <MainPage setLightOrDark={setLightOrDark} enter={homeEnter} />
      <Helmet>
        <title>John Leidy II Portfolio Website</title>
        <meta name='description' content='This website is a portfolio website created by John Leidy. It is built using React.js' />
      </Helmet>
    </div>

  );

};

export default App;
