import React from 'react';
import { useParams } from 'react-router-dom';
import BALLING from '../assets/images/1.avif';

export const Fixture = ({ data }) => {
  const params = useParams();
  const matchID = params.matchID;
  const results = data.response.filter((match) => {
    return match.fixture.id == matchID;
  });
  const fixture = results[0];
  return (
    <div>
      <div align='center'>
        <img src={fixture.league.logo} width={25} alt={fixture.league.name} />
        {fixture.league.name}
      </div>
      <div className='text-center'>{fixture.fixture.status.long}</div>
      <div className='w-full flex p-1'>
        <div className='w-[10%]' align='center'>
          <img
            src={fixture.teams.home.logo}
            alt={fixture.teams.home.name}
            width={30}
          />
        </div>
        <div className='w-[32%] text-right'>{fixture.teams.home.name}</div>
        <div className='w-[16%] text-center'>
          {fixture.goals.home} : {fixture.goals.away}
        </div>
        <div className='w-[32%] text-left'>{fixture.teams.away.name}</div>
        <div className='w-[10%]' align='center'>
          <img
            src={fixture.teams.away.logo}
            alt={fixture.teams.away.name}
            width={30}
          />
        </div>
      </div>
      <div className='text-center text-green-600'>
        {fixture.fixture.status.elapsed}
      </div>
      <div align='center' className='grid grid-cols-1 divide-y'>
        <h1 className='bg-gray-700 p-1 text-gray-300 text-xl'>Events</h1>
        {!fixture.events
          ? null
          : fixture.events.map((event) => (
              <div className='p-5' key={event.team.id}>
                {event.type === 'Goal' ? (
                  <div>
                    <img src={BALLING} alt='GOAL' />
                  </div>
                ) : (
                  <div className='badge badge-secondary'>{event.type}</div>
                )}
                {event.player.name} <small>{event.team.name}</small>
              </div>
            ))}
      </div>
    </div>
  );
};
