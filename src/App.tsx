import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CustomHeader, HappyClient, SectionAbout, SectionContact, SectionHome, SectionPricing } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div style={{ minHeight: `100vh`, }}>
      <CustomHeader />
      <div style={{}}>
        <SectionHome />
        {/* <HappyClient /> */}
        <SectionAbout />
        <SectionPricing />
        <SectionContact />
      </div>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
    </div>
  );
}

export default App;
