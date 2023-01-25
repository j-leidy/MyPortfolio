
import React from 'react';
import './App.css';
import ParticlesComponent from './Components/Particles/Particles';
import MainPage from './Pages/MainPage';
function App() {
  const [lightordark, setLightOrDark] = React.useState(false)
  return (
    <div className='remove_scroll'>
      <></>
      <ParticlesComponent active={lightordark} />
      <MainPage setLightOrDark={setLightOrDark} />
    </div>

  );

};

export default App;
