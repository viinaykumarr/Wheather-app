
import { useState } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState({});
  const [location, setLoaction] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d8e8f20d9c0b1dde7316dbb91cade4ce`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLoaction('')
    }
  }


  return (

    <div className="w-full h-screen before:content-['']  before:bg-[url('src/assets/sunset.jpg')] before:bg-center before:bg-cover before:absolute before:w-full before:h-screen before:top-0 before:left-0 before:z-[-1] ">

      <div className="flex justify-center">
        <input className="border-2 border-blue rounded-xl p-2 mt-5" type="text"
          value={location}
          onChange={event => setLoaction(event.target.value)}
          placeholder='Entre Loaction'
          onKeyUp={searchLocation}
        />
      </div>



      <div className="max-w-2xl h-[550px] m-auto p-6 relative top-10 flex-col justify-between">
        <div>
          <p>{data.name}</p>
        </div>
        <div>
          {data.main ? <h1 className="font-bold text-6xl text-white">{data.main.temp}*f</h1> : null}
        </div>
        <div className="mt-5">
          {data.wheather ? <p>{data.wheather[0].main}</p> : null}
        </div>
      </div>

      {data.name != undefined &&
        <div className="flex justify-evenly  w-1/2 m-auto p-4  h-24 rounded-[12px] bg-gray-500 opacity-60 relative bottom-25 ">
          <div>
            {data.main ? <p className='font-bold'>{data.main.feels_like}*F</p> : null}
            <p>FeelsLike</p>
          </div>
          <div >
            {data.main ? <p className='font-bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div>
            {data.main ? <p className='font-bold'>{data.wind.speed} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      }
    </div>
  )
}
export default App;

