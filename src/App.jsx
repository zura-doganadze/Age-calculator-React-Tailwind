// import { useState } from "react";
import { useState} from "react";

import "./App.css";

function App() {
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const [ageYears, setAgeYears] = useState("--");
  const [ageMonths, setAgeMonths] = useState("--");
  const [ageDays, setAgeDays] = useState("--");

  const [error, setError] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    const yearsDiff = currentYear - birthYear;
    const monthsDiff = currentMonth - birthMonth;
    const daysDiff = currentDay - birthDay;

    // Display error when entering invalid age

    if (!birthDay || !birthMonth || !birthYear) {
      setError("All fields are required.");
      return;
    }
    if (birthYear > currentYear) {
      setError("Date cannot be in the future.");
      return;
    } else if (birthDay > 31) {
      setError("The largest number of the month is 31");
      return;
    } else if (birthMonth > 12) {
      setError("There are 12 months in a year");
      return;
    }
    setError(null);

    // calculate
    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      setAgeYears(yearsDiff - 1);
    } else {
      setAgeYears(yearsDiff);
    }
    setAgeMonths((12 + monthsDiff) % 12);
    setAgeDays((daysDiff + 30) % 30);
  };
  return (
    <>
      <div className="calculator">
        <div className="flex items-center justify-center flex-col m-8 ">
          <div className="w-full flex justify-around">
            <div className="flex flex-col w-maxWidth gap-y-1 text-xl font-bold font-poppinss uppercase">
              <label htmlFor="day">day</label>
              <input
                className="h-11 w-21 border-solid rounded-md border-2	text-2xl"
                type="number"
                placeholder="DD"
                id="day"
                name="day"
                min="1"
                max="31"
                value={birthDay}
                onChange={(e) => setBirthDay(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-maxWidth gap-y-1 text-xl font-bold font-poppinss uppercase">
              <label htmlFor="month">month</label>
              <input
                className="h-11 w-21 border-solid rounded-md border-2	text-2xl"
                type="number"
                placeholder="MM"
                id="month"
                name="month"
                min="1"
                max="12"
                value={birthMonth}
                onChange={(e) => setBirthMonth(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-maxWidth gap-y-1 text-xl font-bold font-poppinss uppercase">
              <label htmlFor="year">year</label>
              <input
                className="h-11 w-21 border-solid rounded-md border-2	text-2xl"
                type="number"
                placeholder="YYYY"
                id="year"
                name="year"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
              />
            </div>
          </div>
          {error && <div className="text-red-500 text-xl mt-5">{error}</div>}
          <div className="mt-16 w-10/12 relative">
            <div className=" border-b border-slate-400"></div>
            <button onClick={calculateAge}>
              <img
                className="absolute right-0 -top-6 w-14 h-14 rounded-full bg-purple-600 hover:bg-slate-950 cursor-pointer	"
                src="public\assets\images\icon-arrow.svg"
                alt="scrole icon"
              />
            </button>
          </div>
          <div className="text-5xl font-bold italic flex flex-col justify-start w-10/12 mt-8">
            <div className="result-container flex gap-x-2">
              <span className="text-purple-600">{ageYears}</span>
              <span>years</span>
            </div>
            <div className="result-container flex gap-x-2">
              <span className="text-purple-600">{ageMonths}</span>
              <span>months</span>
            </div>
            <div className="result-container flex gap-x-2">
              <span className="text-purple-600">{ageDays}</span>
              <span>days</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
