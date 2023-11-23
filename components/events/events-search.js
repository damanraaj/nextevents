import Button from "../ui/button";
import classes from "./events-search.module.css";

const EventsSearch = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month">
            {monthNames.map((month) => (
              <option
                key={month}
                value={monthNames.findIndex((e) => e === month)}
              >
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button onClick={""}>Find events</Button>
    </form>
  );
};

export default EventsSearch;
