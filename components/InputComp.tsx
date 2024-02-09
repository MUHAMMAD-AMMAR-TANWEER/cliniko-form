// InputComp.tsx

import React from "react";
import { Input } from "@nextui-org/react";

interface InputProps {
  text?: string;
  text2?: string;
  className?: string;
  onChange?: any;
  type?: string;
  value?: any;
  required?: any;
  label?: string;
  error?: string | undefined; // Add error prop here
}

const InputComp: React.FC<InputProps> = ({
  text,
  text2,
  className,
  onChange,
  type,
  label,
  value,
  error,
  required,
}) => {
  const variants = ["faded"];

  return (
    <div className="w-2/3 lg-mob:w-full flex flex-col ">
      {variants.map((variant: any) => (
        <div
          key={variant}
          className={`${className} flex flex-col w-full flex-wrap md:flex-nowrap mb-1 md:mb-0 `}
        >
          <h1 className="text-md mb-1 font-semibold text-[#006FEE]">
            {text}{" "}
            <span className="text-md mb-1 font-bold text-red-600">{text2}</span>
          </h1>
          {error ? (
            <div className="border border-red-500 rounded-xl">
              <Input
                isRequired
                type={type}
                value={value}
                label={label}
                className=""
                variant={variant}
                onChange={onChange}
              />
            </div>
          ) : (
            <Input
              isRequired
              type={`${type}`}
              value={value}
              label={label}
              className=""
              variant={variant}
              onChange={onChange}
            />
          )}
          {error ? (
            <p className="text-red-500 text-xs mt-1">{error}</p>
          ) : (
            <p></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default InputComp;
