
import React from 'react';
import './App.css';
import ParticlesComponent from './Components/Particles/Particles';
import MainPage from './Pages/MainPage';
import { Helmet } from 'react-helmet';
function App() {
  const [lightordark, setLightOrDark] = React.useState(false)
  return (
    <div className='remove_scroll'>
      <ParticlesComponent active={lightordark} />
      <MainPage setLightOrDark={setLightOrDark} />
      <Helmet>
        <title>John Leidy II Portfolio Website</title>
        <meta name='description' content='This website is a portfolio website created by John Leidy. It is built using React.js' />
      </Helmet>
    </div>

  );

};

export default App;
