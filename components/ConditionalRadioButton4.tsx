import React, { useEffect, useState } from "react";
import { Radio, Input, RadioGroup } from "@nextui-org/react";
import InputComp from "./InputComp";

interface condtion4 {
  onFieldsChange?: any;
}

const ConditionalRadioButton4: React.FC<condtion4> = ({ onFieldsChange }) => {
  const [radioValue, setRadioValue] = useState("");
  const [radioValue2, setRadioValue2] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [ndisNumber, setNDISNumber] = useState("");
  const [planManagerCompanyName, setPlanManagerCompanyName] = useState("");
  const [planManagerContactNumber, setPlanManagerContactNumber] = useState("");
  const [planManagerNumber, setPlanManagerNumber] = useState("");
  const [planEmail, setPlanEmail] = useState("");
  const [planManagerInvoiceEmail, setPlanManagerInvoiceEmail] = useState("");

  const handleRadioChange = (value:any) => {
    setRadioValue(value);
    // Reset the input values when radio selection changes
    setNDISNumber("");
  };

  const handleRadioChange2 = (value: any) => {
    setRadioValue2(value);
    // Reset the input value when radio selection changes
    setInputValue("");
  };

  useEffect(() => {
    onFieldsChange({
      ndisNumber,
      planManagerCompanyName,
      planManagerContactNumber,
      planManagerNumber,
      planManagerInvoiceEmail,
      planEmail,
    });
  }, [
    ndisNumber,
    planManagerCompanyName,
    planManagerContactNumber,
    planManagerNumber,
    planManagerInvoiceEmail,
    planEmail,
  ]);

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div>
        <RadioGroup
          value={radioValue}
          onChange={(e) => handleRadioChange(e.target.value)}
          label="Are you claiming through NDIS?"
          orientation="horizontal"
          color="warning"
        >
          <Radio value="yes">Yes</Radio>
          <Radio value="no">NO</Radio>
        </RadioGroup>
      </div>

      {radioValue === "yes" && (
        <div className="flex flex-col gap-y-4">
          <h1 className="text-lg font-semibold">NDIS</h1>
          <InputComp text="NDIS Number" onChange={(e: any) => setNDISNumber(e.target.value)}/>
          <RadioGroup
            label="Funding Management"
            orientation="horizontal"
            color="warning"
          >
            <Radio onChange={(e) => handleRadioChange2(e.target.value)} value="Agency-Managed">Agency Managed</Radio>
            <Radio onChange={(e) => handleRadioChange2(e.target.value)} value="Plan-Managed">Plan Managed</Radio>
            <Radio onChange={(e) => handleRadioChange2(e.target.value)} value="Self-Managed">Self Managed</Radio>
          </RadioGroup>
        </div>
      )}
    {radioValue2 === "Plan-Managed" && radioValue === "yes" && (
      <div className="flex flex-col gap-y-4">
          <InputComp text="Plan Manager Company Name" onChange={(e: any) => setPlanManagerCompanyName(e.target.value)}/>
          <InputComp text="Plan Manager Contact Number" onChange={(e: any) => setPlanManagerContactNumber(e.target.value)}/>
          <InputComp text="Plan Manager Number" onChange={(e: any) => setPlanManagerNumber(e.target.value)}/>
          <InputComp text="Plan Manager Email" onChange={(e: any) => setPlanEmail(e.target.value)}/>
          <InputComp text="Plan Manager Invoice Email" onChange={(e: any) => setPlanManagerInvoiceEmail(e.target.value)}/>
      </div>
    )}

      {radioValue === "no" && <div></div>}
    </div>
  );
}
export default ConditionalRadioButton4