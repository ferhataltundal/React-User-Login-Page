import { object, string } from 'yup';
let formValidation = object({
    email: string().email('Please enter a valid email address.').required('Please enter your e-mail address.'),
    password: string().required('Please enter your password.'),
});
export default formValidation;