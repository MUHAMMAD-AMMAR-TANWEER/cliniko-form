import React, { useEffect, useState } from "react";
import { Select, SelectItem, Input } from "@nextui-org/react";

interface options {
  Option: Array<string>;
  heading: string;
  onChange?: any;
  error?: string | undefined;
  className?: string;
}

const App: React.FC<options> = ({
  Option,
  heading,
  onChange,
  error,
  className,
}) => {
  const Options = Option;

  const validVariants = ["bodered"];
  const [selectedOption, setSelectedOption] = useState("none");
  // const [error, setError] = useState<string | null>(null);

  console.log("Select", selectedOption);

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    onChange(selectedValue, error);
    if (selectedValue === "none") {
      onChange(selectedValue, "Please select an option");
    } else {
      onChange(selectedValue, null);
    }
  };

  useEffect(() => {
    // Call the callback function with the initial values when the component mounts
    onChange && onChange(selectedOption);
  }, [selectedOption]);

  return (
    <div className="w-full flex flex-col gap-4">
      {validVariants.map((variant) => (
        <div
          key={variant}
          className="flex flex-col w-2/5 lg-mob:w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
        >
          <h1 className="text-md font-semibold text-[#006FEE]">{heading}</h1>

          <div className={`${className}`}>
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
        </div>
      ))}
    </div>
  );
};
export default App;
