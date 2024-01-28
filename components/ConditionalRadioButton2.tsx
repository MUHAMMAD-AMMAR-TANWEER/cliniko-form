import React, { useEffect, useState } from "react";
import { Radio, Input, RadioGroup } from "@nextui-org/react";
import InputComp from "./InputComp";
import { useDispatch } from "react-redux";
import { setDateOfInjury } from "../redux/actions";

interface ConditionalRadioButton2Props {
  onFieldsChange?: any;
  setRadioValue: React.Dispatch<React.SetStateAction<string>>;

}

const ConditionalRadioButton2: React.FC<ConditionalRadioButton2Props> = ({
  onFieldsChange,
  setRadioValue, // Include setRadioValue in props

}) => {
  const [radioValue, setRadioValueLocal] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [Employer, setEmployer] = useState("");
  const [EmployerError, setEmployerError] = useState<string | null>(null);

  const [EmployerEmail, setEmployerEmail] = useState("");
  const [EmployerNumber, setEmployerNumber] = useState("");
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [insuranceEmail, setInsuranceEmail] = useState("");
  const [caseManager, setCaseManager] = useState("");
  const [caseManagerNumber, setCaseManagerNumber] = useState("");
  const [caseManagerEmail, setCaseManagerEmail] = useState("");
  const [dateOfInjury, setDateOfinjury] = useState("");

  const handleRadioChange = (value: any) => {
    setRadioValueLocal(value);
    setRadioValue(value);
    // Reset the input values when radio selection changes
    setEmployer("");
    setEmployerError("");
    setEmployerEmail("");
    setEmployerNumber("");
    setInsuranceCompany("");
    setInsuranceEmail("");
    setCaseManager("");
    setCaseManagerNumber("");
    setCaseManagerEmail("");
    setDateOfInjury("");
  };

  const dispatch = useDispatch();
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 100 }, (_, i) => (2022 - i).toString()); // Adjust the range of years as needed

  useEffect(() => {
    const handleDOBChange = () => {
      const dateOfInjury = `${year}-${month}-${day}`;
      dispatch(setDateOfInjury(dateOfInjury));
    };

    handleDOBChange();
  }, [day, month, year, dispatch]);

  useEffect(() => {
    onFieldsChange({
      Employer,
      EmployerEmail,
      caseManager,
      caseManagerNumber,
      caseManagerEmail,
      EmployerNumber,
      insuranceCompany,
      insuranceEmail,
      dateOfInjury,
    });
  }, [
    Employer,
    EmployerEmail,
    caseManager,
    caseManagerNumber,
    caseManagerEmail,
    dateOfInjury,
    EmployerNumber,
    insuranceCompany,
    insuranceEmail,
    onFieldsChange,
  ]);

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div>
        <RadioGroup
          value={radioValue}
          onChange={(e) => handleRadioChange(e.target.value)}
          label="Are you claiming through Workers Compensation?"
          orientation="horizontal"
          color="warning"
        >
          <Radio value="yes">Yes</Radio>
          <Radio value="no">NO</Radio>
        </RadioGroup>
      </div>

      {radioValue === "yes" && (
        <div className="flex flex-col gap-y-4">
          <h1 className="text-lg font-semibold">Workers Compensation</h1>
          <div>
            <InputComp
              text="Employer"
              onChange={(e: any) => setEmployer(e.target.value)}
            />
          </div>
          <InputComp
            type="email"
            text="Employer Email"
            onChange={(e: any) => setEmployerEmail(e.target.value)}
          />
          <InputComp
            type="number"
            text="Employer Number"
            onChange={(e: any) => setEmployerNumber(e.target.value)}
          />
          <InputComp
            text="Insurance Company"
            onChange={(e: any) => setInsuranceCompany(e.target.value)}
          />
          <InputComp
            type="email"
            text="Insurance Email"
            onChange={(e: any) => setInsuranceEmail(e.target.value)}
          />
          <InputComp
            text="Case Manager"
            onChange={(e: any) => setCaseManager(e.target.value)}
          />
          <InputComp
            type="email"
            text="Case Manager Email"
            onChange={(e: any) => setCaseManagerEmail(e.target.value)}
          />
          <InputComp
            type="number"
            text="Case Manager Number"
            onChange={(e: any) => setCaseManagerNumber(e.target.value)}
          />
          <div className="flex flex-col gap-y-4 text-[#006FEE] ">
            <h1 className="font-semibold">Date Of Injury</h1>
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
export default ConditionalRadioButton2;
