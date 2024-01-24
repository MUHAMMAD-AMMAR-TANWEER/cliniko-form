import React, { useState, useEffect } from "react";
import { Radio, RadioGroup } from "@nextui-org/react";
import InputComp from "./InputComp";

interface condtion1 {
  onFieldsChange?: any
}

const ConditionalRadioButton: React.FC<condtion1> = ({ onFieldsChange }) => {
  const [radioValue, setRadioValue] = useState("");
  const [insuranceFundName, setInsuranceFundName] = useState("");
  const [membershipNumber, setMembershipNumber] = useState("");
  const [irnNumber, setIrnNumber] = useState("");

  const handleRadioChange = (value:any) => {
    setRadioValue(value);
    // Reset the input values when radio selection changes
    setInsuranceFundName("");
    setMembershipNumber("");
    setIrnNumber("");
  };

  // Call the callback function with the updated fields whenever they change
  useEffect(() => {
    onFieldsChange({
      insuranceFundName,
      membershipNumber,
      irnNumber,
    });
  }, [insuranceFundName, membershipNumber, irnNumber, onFieldsChange]);

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div>
        <RadioGroup
          value={radioValue}
          onChange={(e) => handleRadioChange(e.target.value)}
          label="Do you have private health insurance?"
          orientation="horizontal"
          color="warning"
        >
          <Radio value="yes">Yes</Radio>
          <Radio value="no">NO</Radio>
        </RadioGroup>
      </div>

      {radioValue === "yes" && (
        <div className="flex flex-col gap-y-4">
          <h1 className="text-lg font-semibold">Private Health Insurance</h1>
          <InputComp
            text="Private Health Insurance Fund Name"
            onChange={(e:any) => setInsuranceFundName(e.target.value)}
          />
          <InputComp
          type="number"
            text="Private Health Insurance Membership Number"
            onChange={(e:any) => setMembershipNumber(e.target.value)}
          />
          <InputComp
          type="number"
            text="IRN #"
            onChange={(e:any) => setIrnNumber(e.target.value)}
          />
        </div>
      )}

      {/* Additional logic for 'no' case if needed */}
    </div>
  );
};

export default ConditionalRadioButton;
