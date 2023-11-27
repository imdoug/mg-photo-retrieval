import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

import './App.css'
import Photo from './components/Photo'

function App() {
  const [photos, setPhotos] = useState(false);

  const fetchPhotos = async () => {
    const response = await fetch(
      `https://api2.eventfinity.co/api/v1/public/events/${
        import.meta.env.VITE_PUBLIC_EVENT_ID
      }/photostreams/${import.meta.env.VITE_PUBLIC_PHOTO_STREAM_ID}/photos`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_READ_ONLY_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return;
    }
    let data = await response.json();
    //console.log(await response.json())
    //setPhotos(await  response.json());
    setPhotos(data.data.slice(0, 4));
    // console.log(data.data.slice(0,4))
  };
  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <>
    <Routes>
      <Route path="/"  element={<Home data={photos}/>}></Route>
      <Route path="/photos/:id" element={<Photo data={photos}/>}></Route>
    </Routes>
    </>
  )
}

export default App
