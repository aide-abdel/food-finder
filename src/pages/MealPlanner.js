import React, { useState } from "react";
import Menu from "../components/Menu";

function MealPlanner() {
  const [date, setDate] = useState(new Date());

  // Get an array of the days of the week
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get the first day of the month and the total number of days in the month
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const totalDaysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // Get an array of dates representing each day of the month
  const daysOfMonth = Array.from(
    { length: totalDaysInMonth },
    (_, i) => new Date(date.getFullYear(), date.getMonth(), i + 1)
  );

  // Get an array of arrays representing each week of the month
  const weeksOfMonth = daysOfMonth.reduce(
    (weeks, day) => {
      const lastWeek = weeks[weeks.length - 1];
      if (lastWeek.length < 7) {
        lastWeek.push(day);
      } else {
        weeks.push([day]);
      }
      return weeks;
    },
    [[firstDayOfMonth]]
  );

  return (
    <div>
      <Menu />
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeksOfMonth.map((week, i) => (
            <tr key={i}>
              {week.map((day) => (
                <td key={day.getDate()}>{day.getDate()}</td>
              ))}
              {week.length < 7 &&
                Array.from({ length: 7 - week.length }, (_, i) => (
                  <td key={`empty-${i}`} />
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MealPlanner;
