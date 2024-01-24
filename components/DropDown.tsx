import React, { useState } from "react";
import { Select, SelectItem, Input } from "@nextui-org/react";

interface options {
  Option: Array<string>;
  heading: string;
  onChange?: any
}

const App: React.FC<options> = ({ Option, heading, onChange }) => {
  const Options = Option;
  
  const validVariants = ["bodered"];
  const [selectedOption, setSelectedOption] = useState("none");
  console.log("Select", selectedOption);
  

  const handleDropdownChange = (event:any) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {validVariants.map((variant) => (
        <div
          key={variant}
          className="flex flex-col w-2/5 lg-mob:w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
        >
          <h1 className="text-md font-semibold text-[#006FEE]">{heading}</h1>

          <Select
            label={selectedOption}
            className="max-w-xs"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            {Options.map((option: string) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </Select>
        </div>
      ))}
    </div>
  );
};
export default App;
