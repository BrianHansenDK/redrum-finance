import React from 'react'
import { Input } from 'rsuite';

interface IProps {
  type?: string,
  className: string,
  value: string;
  onChange: (newValue: string) => void;
  regexPattern: (string | RegExp)[];
  placeholder: string;
}

const CustomInput = (props: IProps) => {
  const {type='text', className, value, onChange, regexPattern, placeholder} = props;

  const handleInputChange = (inputValue: string) => {
    const filteredValue = inputValue.replace(regexPattern[0], '');
    onChange(filteredValue);
  };

  return (
    <>
      <Input type={type}
      className={className} value={value} onChange={handleInputChange} placeholder={placeholder} />
    </>
  )
}

export default CustomInput
