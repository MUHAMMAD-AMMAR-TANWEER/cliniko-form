import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";

interface selectedValue {
  onChange?: any;
}

const App: React.FC<selectedValue> = ({ onChange }) => {

  const handleRadioButtonChange = (event: any) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };
  
  return (
    <RadioGroup
      label="Does the patient consent to your privacy policy?"
      color="warning"
      orientation="horizontal"
    >
      <Radio value="no-response" onChange={handleRadioButtonChange}>
        No Response
      </Radio>
      <Radio value="accepted" onChange={handleRadioButtonChange}>
        Accepted
      </Radio>
      <Radio value="rejected" onChange={handleRadioButtonChange}>
        Rejected
      </Radio>
    </RadioGroup>
  );
};

export default App;
