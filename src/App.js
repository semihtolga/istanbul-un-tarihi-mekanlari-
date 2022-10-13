
import React from 'react'
import Card from './components/cards/Card';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import data from "./helper/data";

const App = () => {
  return (
    <div className='container'>
    <Navbar />
      <Header />
      <div className="main">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
export default App;