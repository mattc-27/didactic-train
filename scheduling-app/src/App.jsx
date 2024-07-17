import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import './app.css';
import "react-datepicker/dist/react-datepicker.css";

export default function App() {

    const Calendar = () => {
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(null);
        const onChange = (dates) => {
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
        };

        return (
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            style={{height: '800px',   border: '1px solid green',}}
          />
        );
      };
      
    return (


            <div className='schedule-container'>
           {/*      <h1>Calendar</h1>  */}
                <Calendar />
            </div>
        
    );
}