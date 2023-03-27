import Menu from "../components/Menu";

function MealPlanner() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const mealsOfDay = ["Breafast", "Lunch", "Snack", "Dinner"];

  const renderDay = (day) => {
    return (
      <div className="day">
        <h3>{day}</h3>
        {mealsOfDay.map((hour) => (
          <div className="hour">
            <span className="time">{hour}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Menu />
      <div className="planner">
        <h2>Meal Planner</h2>
        <div className="week">{daysOfWeek.map((day) => renderDay(day))}</div>
      </div>
    </>
  );
}

export default MealPlanner;
