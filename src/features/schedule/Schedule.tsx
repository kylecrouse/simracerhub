import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectSchedule } from './scheduleSlice';
import { useGetScheduleByIdQuery } from '../../services/simracerhub';
import EventList from '../../components/EventList';
import styles from './Schedule.module.css';

export function Schedule() {
  const id = useAppSelector(selectSchedule);
  const { data, error, isLoading } = useGetScheduleByIdQuery(id);
  
  return (
    <div className={styles.container}>
      {error ? (
        <>Error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <EventList events={data.events} />
      ) : null}
    </div>
  );
}
