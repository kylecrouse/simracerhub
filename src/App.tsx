import React from 'react';

import { useAppSelector, useAppDispatch } from './app/hooks';
import { Schedule } from './features/schedule/Schedule';
import { updateSchedule, selectSchedule } from './features/schedule/scheduleSlice';
import { useGetSeasonsBySeriesIdQuery } from './services/simracerhub';
import './App.css';

interface Season {
  seasonId: number;
  seasonName: string;
  seasonDesc?: string; 
}

function App() {
  const schedule = useAppSelector(selectSchedule);
  const dispatch = useAppDispatch();
  
  const { data, error, isLoading } = useGetSeasonsBySeriesIdQuery(6842);
  
  // Set the schedule to current season when series changes
  React.useEffect(
    () => { data && dispatch(updateSchedule(data.currentSeasonId)) },
    [data?.currentSeasonId]
  );
  
  return (
    <div className="App">
      {error ? (
        <>Error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <hgroup>
            <h2>{data.leagueName}</h2>
            <h3>{data.seriesName}</h3>
            <select onChange={
                      (event) => dispatch(updateSchedule(Number(event.target.value)))
                    }
                    value={schedule || data.currentSeasonId}>
              {data.seasons.map((season: Season) => (
                <option key={season.seasonId} value={season.seasonId}>
                  {season.seasonName}
                </option>
              ))}
            </select>
          </hgroup>
          <Schedule />
        </>
      ) : null}
    </div>
  );
}

export default App;
