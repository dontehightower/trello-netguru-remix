import React from 'react';
import StyledCalendar from '../styles/Calendar';
import Button from './Button';
import { H2, Copy } from '../styles/Typography';

const Calendar = () => (
  <StyledCalendar>
    <div className="text">
      <img
        src="/static/calendar.svg"
        alt="Calendar Icon"
        style={{ width: '5rem', height: '5rem', marginBottom: '2.4rem' }}
      />
      <H2>Calendar</H2>
      <Copy>
        You can easily check your tasks throughout all the different boards you are a member of!
        Switch between the monthly and weekly views to see what tasks are waiting for you. You can
        also filter tasks by boards and members.
      </Copy>
      <Button>Find Out More</Button>
    </div>
  </StyledCalendar>
);

export default Calendar;
