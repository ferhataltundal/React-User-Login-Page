import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import validations from './signValidation';
import 'boxicons';

function Sign() {
    const navigate = useNavigate();
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            nameSurname: "",
            phone: "",
            email: "",
            password: "",
            passwordControl: "",
            checkbox: ""
        },
        onSubmit: () => {
            navigate("/");
        },
        validationSchema: validations,
    });

    return (
        <div className='sign-container'>
            <form onSubmit={handleSubmit} method='post'>
                <div className='textbox-container'>
                    <div className='box-icon'><box-icon name='user' color='#7f7b7b' ></box-icon></div>
                    <input
                        type='text'
                        placeholder='Name Surname'
                        name="nameSurname"
                        id='nameSurname'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='input'
                        value={values.nameSurname}
                    />
                </div>
                <div className='message-box'>
                    {errors.nameSurname && touched.nameSurname && (<div style={{ color: 'red', fontWeight: '500', fontSize: '12px', textAlign: 'center' }}>{errors.nameSurname}</div>)}
                </div>
                <div className='textbox-container'>
                    <div className='box-icon'><box-icon name='phone' color='#7f7b7b' ></box-icon></div>
                    <input
                        type='number'
                        placeholder='Phone'
                        name="phone"
                        id='phone'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='input'
                        value={values.phone}
                    />
                </div>
                <div className='message-box'>
                    {errors.phone && touched.phone && (<div style={{ color: 'red', fontWeight: '500', fontSize: '12px', textAlign: 'center' }}>{errors.phone}</div>)}
                </div>
                <div className='textbox-container'>
                    <div className='box-icon'><box-icon name='envelope' color='#7f7b7b' ></box-icon></div>
                    <input
                        type='text'
                        placeholder='Email'
                        name="email"
                        id='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='input'
                        value={values.email}
                    />
                </div>
                <div className='message-box'>
                    {errors.email && touched.email && (<div style={{ color: 'red', fontWeight: '500', fontSize: '12px', textAlign: 'center' }}>{errors.email}</div>)}
                </div>
                <div className='textbox-container'>
                    <div className='box-icon'><box-icon name='key' type='solid' color='#7f7b7b' ></box-icon></div>
                    <input
                        type='password'
                        placeholder='Password'
                        name="password"
                        id='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='input'
                        value={values.password}
                    />
                </div>
                <div className='message-box'>
                    {errors.password && touched.password && (<div style={{ color: 'red', fontWeight: '500', fontSize: '12px', textAlign: 'center' }}>{errors.password}</div>)}
                </div>

                <div className='textbox-container'>
                    <div className='box-icon'><box-icon name='key' type='solid' color='#7f7b7b' ></box-icon></div>
                    <input
                        type='password'
                        placeholder='Password Control'
                        name="passwordControl"
                        id='passwordControl'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='input'
                        value={values.passwordControl}
                    />
                </div>
                <div className='message-box'>
                    {errors.passwordControl && touched.passwordControl && (<div style={{ color: 'red', fontWeight: '500', fontSize: '12px', textAlign: 'center' }}>{errors.passwordControl}</div>)}
                </div>

                <div className='textbox-container'>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            id='checkbox'
                            name='checkbox'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='checkbox-input'
                            value={values.checkbox}
                        />
                        <label htmlFor='checkbox'><a href='#' rel="noreferrer" target='_blank'>I accept the contract.</a></label>
                    </div>
                </div>
                <div className='message-box'>
                    {errors.checkbox && touched.checkbox && (<div style={{ color: 'red', fontWeight: '500', fontSize: '12px', textAlign: 'center' }}>{errors.checkbox}</div>)}
                </div>

                <div className='textbox-container'>
                    <button type='submit'>SIGN IN</button>
                </div>
            </form>
        </div>
    )
}

export default Sign;