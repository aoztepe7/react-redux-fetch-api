import reactLogo from './assets/react.svg'
import { incremented, amountAdded } from './features/counter/counter-slice';
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useFetchBreedsQuery, CatResponse } from './features/cats/cat-api-slice';
import { useState } from 'react';

function App() {

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [numCats, setNumCats] = useState(10);

  const { data, isFetching } = useFetchBreedsQuery(numCats);


  const handleClick = () => {
    dispatch(incremented());
  }

  const handleIncrementClick = () => {
    dispatch(amountAdded(2));
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <button onClick={handleIncrementClick}>
          count is {count}
        </button>

        <div>
          <p> Cats to Fetch </p>
          <select value={numCats} onChange={(e) => setNumCats(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div>
          <p>Number of dogs fetched : {data?.data.length}  </p>
          <table className='table'>
            <thead>
              <tr>
                <th> Breed </th>
                <th> Country</th>
                <th> Origin</th>
                <th> Coat</th>
                <th> Pattern</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((d) => (
                <tr key={d.breed}>
                  <td>
                    {d.breed}
                  </td>
                  <td>
                    {d.country}
                  </td>
                  <td>
                    {d.origin}
                  </td>
                  <td>
                    {d.coat}
                  </td>
                  <td>
                    {d.pattern}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
