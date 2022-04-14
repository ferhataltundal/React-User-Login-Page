import { object, string, number, ref } from 'yup';
let formValidation = object({
    nameSurname: string().required('Please enter your first and last name.'),
    phone: number().required('Please enter your phone number.'),
    email: string().email('Please enter a valid email address.').required('Please enter your e-mail address.'),
    password: string().min(8, 'Your password must be a minimum of 8 characters.').max(16, 'Your password must be a maximum of 16 characters.').required('Please enter your password.'),
    passwordControl: string().oneOf([ref('password')], 'Passwords do not match!').required('Please confirm your password.'),
    checkbox: string().required('Accept the contract.')
});
export default formValidation;