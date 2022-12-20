import { useState } from 'react';
import { useFormValidator } from "./../FormValidator";

export const useModal = (state) => {
  const [visible, setVisible] = useState(false);

  const {
    onHandleChange,
    onHandleSubmit,
    onHandleBlur,
    setFields,
    fields
  } = useFormValidator(state);

  const toggle = (id, title) => {
    if(id) {
      setFields(
        {
          ...fields,
          title
        }
      );
    }
    setVisible(!visible);
};

  return {
    onHandleChange,
    onHandleSubmit,
    onHandleBlur,
    toggle, 
    visible,
    fields
  }
};