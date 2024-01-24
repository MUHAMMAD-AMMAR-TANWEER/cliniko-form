"use client"

import React from 'react'
import {Input} from "@nextui-org/react";

interface label {
  text?: string
  className?: string
  onChange?: any
  type?: string
  value?: any
  required?: string
}

const InputComp: React.FC<label> = ({text, className, onChange, type }) => {
    const variants = [ "faded"];
  return (
    <div className="w-2/3 lg-mob:w-full flex flex-col ">
      {variants.map((variant:any) => (
        <div key={variant}  className={`${className} flex flex-col w-full flex-wrap md:flex-nowrap mb-1 md:mb-0 `}>
          <h1 className='text-md mb-1 font-semibold text-[#006FEE]'>{text}</h1>
          <Input isRequired type={`${type}`} label={text} className='' variant={variant} onChange={onChange} />
        </div>
      ))}  
    </div>  
  )
}

export default InputComp