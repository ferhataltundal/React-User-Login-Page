import { object, string } from 'yup';
let formValidation = object({
    email: string().email('Please enter a valid email address.').required('Please enter your e-mail address.'),
});
export default formValidation;