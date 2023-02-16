import React from 'react';

import styles from './EventList.module.css';

interface EventListProps {
  events: EventItemProps[];
}

interface EventItemProps {
  chase: boolean;
  eventName?: string;
  raceDate: string;
  raceTime: string;
  trackName: string;
  trackConfigName?: string;
}

export default function EventList({ events }: EventListProps) {
  const listItems = events.filter((event) => !event.chase).map((event, index) =>
    <EventItem key={index}
               chase={event.chase}
               eventName={event.eventName}
               raceDate={event.raceDate}
               raceTime={event.raceTime}
               trackName={event.trackName}
               trackConfigName={event.trackConfigName} />
  );
  return (
    <ul className={styles.container}>
      {listItems}
    </ul>
  );
}

function EventItem({ 
  eventName,
  raceDate,
  raceTime,
  trackName,
  trackConfigName,
}: EventItemProps) {
  const date = new Date(`${raceDate} ${raceTime}`);
  const shortMonth = new Intl.DateTimeFormat("en-US", { month: "short" });
  return (
    <li className={styles.item}>
      <div className={styles.date}>
        <span className={styles.day}>
          {date.getDate()}
        </span> 
        <span className={styles.month}>
          {shortMonth.format(date).toUpperCase()}
        </span>
      </div>
      <div className={styles.details}>
        <h5>
          {trackName}
          {trackConfigName && ` (${trackConfigName})`}
        </h5>
        {eventName && <h6>{eventName}</h6>}
      </div>
    </li>
  )
}