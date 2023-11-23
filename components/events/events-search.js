import Button from "../ui/button";
import classes from "./events-search.module.css";
import { useRouter } from "next/router";
import { useRef } from "react";
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
const EventsSearch = () => {
  const yearRef = useRef();
  const monthRef = useRef();
  const router = useRouter();
  const findEventHandler = (event) => {
    event.preventDefault();
    router.replace(
      `/events/${yearRef.current.value}/${monthRef.current.value}`
    );
  };
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
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
      <Button onClick={findEventHandler}>Find events</Button>
    </form>
  );
};

export default EventsSearch;
