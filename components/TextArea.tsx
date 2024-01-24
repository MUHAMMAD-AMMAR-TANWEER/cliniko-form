import React from "react";
import {Textarea} from "@nextui-org/react";

interface label {
    text: string
    className?: string
    onChange?:any
  }

  const TextArea: React.FC<label> = ({text, className, onChange}) => {
  const variants = [ "faded"];

  return (
    <div className=" w-2/3  mt-4  gap-4">
      <h1 className='text-lg font-semibold text-[#006FEE]'>{text}</h1>
      
      <Textarea
      onChange={onChange}
      variant="bordered"
      placeholder={text}
      disableAnimation
      disableAutosize
      classNames={{
        base: "max-w-xs",
        input: "resize-y min-h-[120px]",
      }}
    />
     
    </div>
  );
}

export default TextArea