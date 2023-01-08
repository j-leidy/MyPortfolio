
import React from 'react';
import './App.css';
import ParticlesComponent from './Components/Particles/Particles';
import MainPage from './Pages/MainPage';
function App() {
  const [lightordark, setLightOrDark] = React.useState(false)
  return (
    <div className='remove_scroll'>
      <ParticlesComponent active={lightordark} />
      <MainPage setLightOrDark={setLightOrDark} />
    </div>

  );

};
/*creating commit for test commit after restore

    Showing Macey Macey Macey Macey Macey Macey Macey Mace how commiting works

*/
export default App;
