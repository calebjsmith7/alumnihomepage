import './App.css';
import mapgeneric from './assets/photos/mapgeneric.png';
import React from 'react';
import { initializeApp } from 'firebase/app';

function App() {

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_9HwqRwxH6bfYNtOj1kMFtNDBfgc0rfk",
  authDomain: "alumni-maps-home.firebaseapp.com",
  projectId: "alumni-maps-home",
  storageBucket: "alumni-maps-home.appspot.com",
  messagingSenderId: "156353564242",
  appId: "1:156353564242:web:9ecfb0b10c58516136598b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

  return (
    <div id="app">
      <a href="https://bssm.alumnimaps.org/">
      <h5 style={{position: 'absolute', top: 20, right: 100,color: 'white', fontSize: 15}}>BSSM LOGIN</h5>
      </a>
      <div id='sectionOne'>
      
        <div id='mainLogos'>
          <img src={mapgeneric} style={{ width: 200, height: 'auto', maxWidth: '70vw' }} />
        </div>

        <div className='textSection' id='delayedTextSection'>
          <h4>Global Impact</h4>
          <h1>Alumni Maps is designed to connect a community with the whole world.</h1>
          <p style={{ fontSize: 18 }}>With this map, you can see where in the world Alumni are located and what churches and ministries they are connected with. You can find Alumni based on spiritual giftings such as prophetic, healing, or evangelism; or based on callings - such as business, education or the arts.</p>

        </div>


      </div>
      <div className='section' id='blueSection'>
        <div id='blueTextSection'>
          <h4>Features</h4>
          <h1>Providing multiple useful features for your community.</h1>
        </div>
        <div className='circles'>
          <div className='circle' id='circleOne'><h3 style={{ width: '80%' }}>FIND ALUMNI FROM YOUR GRADUATION YEAR</h3></div>
          <div className='circle' id='circleTwo'><h3 style={{ width: '80%' }}>STAY WITH AN ALUMNI</h3></div>
          <div className='circle' id='circleThree'><h3 style={{ width: '80%' }}>RECEIVE MINISTRY</h3></div>
        </div>

      </div>
      <div className='section' id='sectionTwo' >
        <div className='textSection' id='connectWithAChurch'>
          <h4>Connections</h4>
          <h1>Connect with a local ministry or church in your area.</h1>
          <p style={{ fontSize: 18 }}>After transitioning out of school of ministry, you can use Alumni Maps to connect you with local ministries and resources.</p>
        </div>
      </div>
      <div className='section' id='sectionThree'>
        <div className='textSection' id='signUpText'>
          <h4>Get Started</h4>
          <h1>Sign your organization up for access to Alumni Maps today.</h1>
          <p style={{ fontSize: 18 }}>Provide your community with access to long term sustainability and worldwide impact through Alumni Maps.</p>
          <a href="mailto:info@bssmalumni.de">
            <div title='EMAIL US' style={{ width: 100, fontSize: 17, backgroundColor: '#075767', color: 'white', borderRadius: 12, fontWeight: 800, paddingTop: 5, paddingBottom: 5, paddingLeft: 12, paddingRight: 12, textAlign: 'center' }}>EMAIL US</div>
          </a>
        </div>
      </div>
      <div className='footer'>
          <p>© 2022 by BSSM Alumni DE e.V.</p>
      </div>
    </div>
  );
}

export default App;
