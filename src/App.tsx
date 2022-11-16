import React, { useEffect, useState } from 'react';
import './App.css';
import BottomMenu from './components/BottomMenu';
import FrameApp from './components/FrameApp';
import MainPage from './components/MainPage';
import RightMain from './components/RightMain';
import Topmenu from './components/Topmenu';

function App() {

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    // const battery : any = document.querySelector('#battery');
    const batteryBar: any = document.querySelector('#battery .battery-bar');
    const batteryIndicator = document.querySelector('#battery .battery-indicator');
    let nav: any = navigator
    nav.getBattery().then((battery: any) => {
      const updateBattery = function () {
        // console.log(`${parseInt(battery.level * 100)}%`);
        if (batteryBar) {
          batteryBar.style.animationIterationCount = "initial";
        }
        let level: number = battery.level || 0

        if (batteryIndicator) {
          batteryIndicator.setAttribute('level', `${(level * 100).toString()}%`);
        }
        batteryBar.style.width = `${level * 100}%`;
      }

      updateBattery();

      battery.addEventListener("levelchange", function () {
        updateBattery();
      });
    });
  }

  const onFullScreen = () => {
    document.documentElement.requestFullscreen();
  }

  const [whatsapp , setiswhatsapp] = useState(false)

  return (
    <div className="">
      <Topmenu />
      <MainPage/>
      <RightMain/>
      {whatsapp && <FrameApp name="Skill folder" onClose={() => setiswhatsapp(false)} children={undefined} />}
      <BottomMenu />
    </div>
  );
}

export default App;
