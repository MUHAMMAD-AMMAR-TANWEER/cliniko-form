import React, { useEffect, useState } from "react";
import { Radio, Input, RadioGroup } from "@nextui-org/react";
import InputComp from "./InputComp";

interface condtion3 {
  onFieldsChange?: any;
}

const ConditionalRadioButton3: React.FC<condtion3> = ({ onFieldsChange }) => {
  const [radioValue, setRadioValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [providerName, setProviderName] = useState("")
  const [caseManagerName, setCaseManagerName] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [caseManagerEmail, setCaseManagerEmail] = useState("")
  const [accountEmail, setAccountEmail] = useState("")

  const handleRadioChange = (value:any) => {
    setRadioValue(value);
    // Reset the input values when radio selection changes
    setProviderName("");
    setCaseManagerName("");
    setContactNumber("");
    setCaseManagerEmail("");
    setAccountEmail("");
  };

  useEffect(() => {
    onFieldsChange({
      providerName,
      caseManagerName,
      contactNumber,
      caseManagerEmail,
      accountEmail,
      
    });
  }, [
    providerName,
    caseManagerName,
    contactNumber,
    caseManagerEmail,
    accountEmail,
  ]);

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div>
        <RadioGroup
          value={radioValue}
          onChange={(e) => handleRadioChange(e.target.value)}
          label="Are you claiming through My Aged Care?"
          orientation="horizontal"
          color="warning"
        >
          <Radio value="yes">Yes</Radio>
          <Radio value="no">NO</Radio>
        </RadioGroup>
      </div>

      {radioValue === "yes" && (
        <div className="flex flex-col gap-y-4">
          <h1 className="text-lg font-semibold">Aged Care</h1>
          <InputComp text="Provider Name" onChange={(e: any) => setProviderName(e.target.value)}/>
          <InputComp text="Case Manager Name" onChange={(e: any) => setCaseManagerName(e.target.value)}/>
          <InputComp text="Contact Number" onChange={(e: any) => setContactNumber(e.target.value)}/>
          <InputComp text="Case Manager Email Address" onChange={(e: any) => setCaseManagerEmail(e.target.value)}/>
          <InputComp text="Account Email Address" onChange={(e: any) => setAccountEmail(e.target.value)}/>
        </div>
      )}

      {radioValue === "no" && (
        <div>
          
        </div>
      )}
    </div>
  );
}
export default ConditionalRadioButton3