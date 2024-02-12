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
    <div className="flex gap-x-2 border border-gray-200 py-3 px-4 bg-gray-100 w-[50%] rounded-lg">
      {/* Phone Type Selection */}
      <select value={phoneType} onChange={handleTypeChange} className="bg-transparent outline-none">
        <option value="mobile" className="bg-transparent p-2">Mobile</option>
        <option value="home" className="bg-transparent">Home</option>
        <option value="work" className="bg-transparent">Work</option>
        <option value="fax" className="bg-transparent">Fax</option>
        <option value="other" className="bg-transparent">Other</option>
      </select>

      {/* Phone Number Input */}
      <input
      className="bg-transparent border-none outline-none"
        type="tel"
        placeholder={`Phone (${phoneType})`}
        value={PhoneNumber}
        onChange={(e) => setPhoneNumberLocal(e.target.value.replace(/[^0-9]/g,'').slice(0,10))}
      />
    </div>
  );
};

export default PhoneNumberInput;
