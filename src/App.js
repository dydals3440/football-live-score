import './App.css';
import { Navbar } from './components/Navbar';
import { data } from './lib/dummy-data';
import { Table } from './components/Table';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fixture } from './components/Fixture';
import { useEffect, useState } from 'react';
import { fetchFixtures } from './lib/fetch-data';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Footer } from './components/Footer';

function App() {
  const [fixtures, setFixtures] = useState([data]); // 초기 상태로 빈 배열([])을 사용합니다.
  // const fetchData = async () => {
  //   const result = await fetchFixtures();
  //   setFixtures(result);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log(fixtures.length); // response 속성이 아니라 fixtures 배열의 길이를 출력합니다.
  const refresh = () => window.location.reload(true);
  return (
    <div className='w-full md:w-[700px] lg:w-[800px] m-auto'>
      <Navbar />
      <button
        onClick={refresh}
        className='btn btn-sm fixed bottom-3 right-2 z-40'
      >
        refresh
      </button>
      {!fixtures.length > 0 ? (
        <div className='h-screen bg-white w-full text-center p-10'>
          <Box>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Table data={data} />}></Route>
            <Route
              path='/fixture/:matchID'
              element={<Fixture data={data} />}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
