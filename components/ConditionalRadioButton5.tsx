import React, { useEffect, useState } from "react";
import { Radio, Input, RadioGroup } from "@nextui-org/react";
import InputComp from "./InputComp";
import DatePicker from "./DatePicker";
import { useDispatch } from "react-redux";
import { setExpiryDate } from "../redux/actions";

interface condtion5 {
  onFieldsChange?: any;
}
const ConditionalRadioButton5: React.FC<condtion5> = ({ onFieldsChange }) => {

  const dispatch = useDispatch();
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 100 }, (_, i) => (2022 - i).toString()); // Adjust the range of years as needed

  useEffect(() => {
    const handleDOBChange = () => {
      const dob = `${year}-${month}-${day}`;
      dispatch(setExpiryDate(dob));
    };

    handleDOBChange();
  }, [day, month, year, dispatch]);


  const [radioValue, setRadioValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [crn, setCRN] = useState("");

  const handleRadioChange = (value: any) => {
    setRadioValue(value);
    // Reset the input values when radio selection changes
    setCRN("");
  };

  useEffect(() => {
    onFieldsChange({
      crn,
    });
  }, [crn]);

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div>
        <RadioGroup
          value={radioValue}
          onChange={(e) => handleRadioChange(e.target.value)}
          label="Do you have pensioner concession card?"
          orientation="horizontal"
          color="warning"
        >
          <Radio value="yes">Yes</Radio>
          <Radio value="no">NO</Radio>
        </RadioGroup>
      </div>

      {radioValue === "yes" && (
        <div className="flex flex-col gap-y-4">
          <h1 className="text-lg font-semibold">Pensioner Concession Card</h1>
          <InputComp
            text="CRN #"
            onChange={(e: any) => setCRN(e.target.value)}
          />
          <div className="flex flex-col gap-y-4 text-[#006FEE] ">
            <h1 className="font-semibold">Expiry Date</h1>
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
            </div>
          </div>
        </div>
      )}

      {radioValue === "no" && <div></div>}
    </div>
  );
};
export default ConditionalRadioButton5;
