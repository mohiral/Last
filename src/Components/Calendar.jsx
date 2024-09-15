// Components/CalendarPage.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }} className='bg-gradient-to-r from-indigo-600 to-purple-500'>
      <h2>Calendar</h2>
      <Calendar onChange={handleDateChange} value={date} />
      <div style={{ marginTop: '20px' }}>
        <h3>Selected Date: {date.toDateString()}</h3>
      </div>
      <h2>Calendar</h2>
      <Calendar onChange={handleDateChange} value={date} />
      <div style={{ marginTop: '20px' }}>
        <h3>Selected Date: {date.toDateString()}</h3>
      </div>
    </div>
  );
};

export default CalendarPage;
