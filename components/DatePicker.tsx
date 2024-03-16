// DateOfBirthPicker.tsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDOB } from "../redux/actions";

interface DatePickerProps {
  onError: (error: string | null) => void;
}

const validateDate = (year: string, month: string, day: string): boolean => {
  // Implement your date validation logic here
  // For simplicity, we assume a valid date if all fields are non-empty
  return year !== "" && month !== "" && day !== "";
};

const DatePicker: React.FC<DatePickerProps> = ({onError}) => {
  const dispatch = useDispatch();
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 100 }, (_, i) => (2024 - i).toString()); // Adjust the range of years as needed

  useEffect(() => {
    const handleDOBChange = () => {
      const isValidDate = validateDate(year, month, day);
      const errorMessage = isValidDate ? null : "Please add Date Of Birth";
      // setError(errorMessage);

      if (isValidDate) {
        const dob = `${year}-${month}-${day}`;
        dispatch(setDOB(dob));
      }

      // Pass the error message to the parent component
      onError(errorMessage);
    };

    handleDOBChange();
  }, [day, month, year, dispatch, onError]);

  

  return (
    <div className="flex">
      {/* Day */}
      <select
        className="mr-2 p-2 border border-gray-300 rounded"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      >
        <option value="" disabled>
          Day
        </option>
        {days.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      {/* Month */}
      <select
        className="mr-2 p-2 border border-gray-300 rounded"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      >
        <option value="" disabled>
          Month
        </option>
        {months.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      {/* Year */}
      <select
        className="p-2 border border-gray-300 rounded"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="" disabled>
          Year
        </option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      {/* Error message */}
      {/* {error && <p className="text-red-500 text-xs italic">{error}</p> } */}
    </div>
  );
};

export default DatePicker;
