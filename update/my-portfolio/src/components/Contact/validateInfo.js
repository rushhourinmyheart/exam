export default function validateInfo(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = '*required field';
    } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
      errors.name = 'invalid name';
    }
  
    if (!values.email) {
      errors.email = '*required field';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'invalid email address';
    }

    if (!values.company) {
      errors.company = '*required field';
    } else if (values.company.length < 6) {
      errors.company = 'enter 6 characters or more';
    }

    if (!values.phone) {
      errors.phone = '*required field';
    } else if (!/^[0-9]+$/.test(values.phone)) {
      errors.phone = 'enter numeric characters only';
    }

    if (!values.subject) {
      errors.subject = '*required field';
    } else if (values.subject.length < 6) {
      errors.subject = 'enter 6 characters or more';
    }

    if (!values.message) {
      errors.message = '*required field';
    } else if (values.message.length < 6) {
      errors.message = 'enter 6 characters or more';
    }

    return errors;
  }