import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarComp.css";
import { formatDate } from "@fullcalendar/core";
const CalendarComp = ({ date, setDate, setLoading }) => {
  const [showCal, setShowCal] = useState(false);
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }
  return (
    <div>
      <div
        className="date-comp"
        onClick={() => {
          setShowCal((prevState) => !prevState);
        }}
      >
        {`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
      </div>
      {showCal ? (
        <div
          className="calendar-comp"
          onMouseOut={() => setShowCal(false)}
          onMouseOver={() => setShowCal(true)}
        >
          <Calendar
            onChange={setDate}
            value={date}
            maxDate={new Date()}
            formatLongDate={(locale, date) => formatDate(date, "YYYY-MMM-dd")}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CalendarComp;
