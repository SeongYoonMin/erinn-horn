import { useState } from "react";

export const useInputText = (initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, handleChange, setValue };
};
