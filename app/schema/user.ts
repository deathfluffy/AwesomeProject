import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, 'Invalid email')
    .required('Email is required'),
  
  password: Yup.string()
    .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, 'Password must be 8+ chars, include uppercase, number, and special char')
    .required('Password is required'),
});

export default validationSchema;