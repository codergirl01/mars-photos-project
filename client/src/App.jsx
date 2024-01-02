import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Images from './components/Images'



function App() {
  const [images, setImages] = useState([])

  const fetchImages = (sol, camera) => {
   
  
    fetch(`https://mars-server-s7ya.onrender.com/api/photos?sol=${sol}&camera=${camera}`)
    .then((data) => data.json())
    .then((data) => setImages(data))
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div id="main-container">
      <h1>Mars Photo API</h1>
      <h2>Curiosity</h2>
      <Form fetchImages={fetchImages} />
      <Images images={images} />
    </div>
  )
}

export default App
