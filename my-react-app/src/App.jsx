import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7293/Spotify')
      .then(response => response.json())
      .then(json => setData(json));
  },[]);
    
  return (
    <>
      <p>Listado de Spotify</p>
      <ul>
        {data.map( item => (
          <li key={item.idArtist}>{item.artist}</li>         
          )
        )
        }
      </ul>
    </>
  )
}

export default App
