import React from 'react';
import { useFormik } from 'formik';
import validations from './forgetValidation';
import { useNavigate } from 'react-router-dom';
import 'boxicons';

function Forget() {
    const navigate = useNavigate();
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: () => {
            navigate("/");
        },
        validationSchema: validations,
    });
    return (
        <div className='password-container'>
            <div className='title'><h2>I Forget Password</h2></div>
            <form onSubmit={handleSubmit} method='post'>
                <div className='textbox-container'>
                    <div className='box-icon'><box-icon name='envelope' color='#7f7b7b' ></box-icon></div>
                    <input
                        type='text'
                        placeholder='Email'
                        name="email"
                        id='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className='input'
                    />
                </div>
                <div className='message-box'>
                    {errors.email && touched.email && (<div style={{ color: 'red', fontWeight: '500', fontSize: '12px', textAlign: 'center' }}>{errors.email}</div>)}
                </div>
                <div className='textbox-container'>
                    <button type='submit'>REFRESH PASSWORD</button>
                </div>
            </form>
        </div>
    )
}
export default Forget;