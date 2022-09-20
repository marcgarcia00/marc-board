import React, { useState } from 'react';
import { Calendar } from 'react-calendar';

const BillCalendar = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());

  return(
    <div className="flex">
      <Calendar 
        className={"bg-white text-center rounded shadow-md p-2"}
        defaultValue={calendarDate}
        value={calendarDate}
        tileClassName={"p-3"}
      />
    </div>
  );
}
export default BillCalendar;