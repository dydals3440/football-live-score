// import { useEffect } from 'react';
// import { fetchFixtures } from './lib/fetch-data';
import './App.css';
import { Navbar } from './components/Navbar';
import { data } from './lib/dummy-data';
import { Table } from './components/Table';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fixture } from './components/Fixture';
function App() {
  // const fetchData = async () => {
  //   const fixtures = await fetchFixtures();
  //   console.log(fixtures);
  // };
  // useEffect(() => {
  //   fetchData();
  // });
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Table data={data} />}></Route>
          <Route
            path='/fixture/:matchID'
            element={<Fixture data={data} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
