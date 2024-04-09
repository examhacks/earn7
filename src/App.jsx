import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"

  const fetchInfo = () => {
    return axios.get(url).then(res => setData(res.data))
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  return (
    <>
      <h2>Using Axios librrary fetch to API</h2>
      <center>
        {data.map((dataObj, index) => (
          <div>
            <p>{dataObj.name}</p>
            <p>{dataObj.id}</p>
          </div>
        ))}
      </center>
    </>
  )
}

export default App
