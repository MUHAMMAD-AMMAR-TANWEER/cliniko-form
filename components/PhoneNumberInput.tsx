// PhoneNumberInput.tsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhoneNumber } from "../redux/actions";

interface PhoneNumberInputProps {
  onError: (error: string | null) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ onError }) => {
  const [phoneType, setPhoneType] = useState("mobile");
  const [PhoneNumber, setPhoneNumberLocal] = useState("");
  const dispatch = useDispatch();

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPhoneType(e.target.value);
  };

  useEffect(() => {
    if (PhoneNumber === "") {
      onError("Phone Number is required!");
    } else {
      onError("");
    }
    const phoneNumber = { phone_type: phoneType, number: PhoneNumber };
    // Dispatch the action when phone number changes
    dispatch(setPhoneNumber(phoneNumber));
  }, [dispatch, phoneType, PhoneNumber]);

  return (
    <div className="flex gap-x-2">
      {/* Phone Type Selection */}
      <select value={phoneType} onChange={handleTypeChange}>
        <option value="mobile">Mobile</option>
        <option value="home">Home</option>
        <option value="work">Work</option>
        <option value="fax">Fax</option>
        <option value="other">Other</option>
      </select>

      {/* Phone Number Input */}
      <input
        type="tel"
        placeholder={`Phone (${phoneType})`}
        value={PhoneNumber}
        onChange={(e) => setPhoneNumberLocal(e.target.value)}
      />
    </div>
  );
};

export default PhoneNumberInput;
