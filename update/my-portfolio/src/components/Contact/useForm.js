import { useState, useEffect } from 'react';
import emailjs from "emailjs-com";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    
    if(isSubmitting){
      emailjs.sendForm(
          "service_x9lart6",
          "my-portfolio",
          e.target,
          "user_CYabyFgzcNBO5FNBYZgZw"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (errors) => {
            console.log(errors.text);
          }
        );
      e.target.reset()};
    };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;