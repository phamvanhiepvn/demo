/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef, useState} from 'react';
import Spinner from 'components/common/Spinner';
import ShowError from 'components/form/ShowError';
import useLogin from 'state/auth/hooks/useRegister';

const emailRule = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const RegisterForm = (props) => {
    const refPassword = useRef(null);
    const refEmail = useRef(null);
    const refConfirmPassword = useRef(null);
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    const [setRegister, isLoading, errorCode] = useLogin();
    const {intl, history} = props;

    const onInputChange = (e) => {

    }
    const handleRegister = () => {
        setErrorEmail('')
        setErrorPassword('')
        let countError = 0
        if (refEmail && refEmail.current) {
            const {current: {value: email}} = refEmail
            const {current: {value: password}} = refPassword;
            const {current: {value: confirmPassword}} = refConfirmPassword
            if (!emailRule.test(email)) {
                setErrorEmail('auth_require_email')
                countError++
            }
            if (!password) {
                setErrorPassword('auth_require_pw')
                countError++
            }
            if (!confirmPassword) {
                setErrorConfirmPassword('valid_confirm_password')
                countError++
            }
            if (password && confirmPassword && password !== confirmPassword) {
                setErrorConfirmPassword('user_5004')
                countError++
            }
            if (countError > 0)
                return;

            const values = {
                email,
                password,
            }
            setRegister({values: values, history: history})
        }
    }
    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleRegister()
        }
    }
    return (
        <div className="vertical-layout page-header-light vertical-menu-collapsible vertical-dark-menu 1-column login-bg  blank-page blank-page">
            <div className="row">
                <div className="col s12">
                    <div className="container">
                        <div id="login-page" className="row">
                            <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                                <form className="login-form">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <h5 className="ml-4">{intl.formatMessage({ id: 'auth_signup' })}</h5>
                                        </div>
                                    </div>
                                    <div className="row margin">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix pt-2">person_outline</i>
                                            <input type="email"
                                                   className="form-control"
                                                   name="email"
                                                   id="inputEmail"
                                                   placeholder="Email"
                                                   onChange={onInputChange}
                                                   onKeyDown={onKeyDown}
                                                   ref={refEmail}
                                                   required/>
                                            {errorEmail && <div className="wrapper-error">
                                                <ShowError intl={intl} className={"pl-8"} id={errorEmail}/>
                                            </div>}
                                            <label htmlFor="email" className="center-align">Email</label>
                                        </div>
                                    </div>
                                    <div className="row margin">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix pt-2">lock_outline</i>
                                            <input type="password"
                                                   className="form-control"
                                                   name="password"
                                                   id="inputPass"
                                                   placeholder="Password"
                                                   required
                                                   onChange={onInputChange}
                                                   onKeyDown={onKeyDown}
                                                   ref={refPassword}/>
                                            {errorPassword && <div className="wrapper-error">
                                                <ShowError intl={intl} className={"pl-8"} id={errorPassword}/>
                                            </div>}
                                            <label htmlFor="password">{intl.formatMessage({ id: 'password' })}</label>
                                        </div>
                                    </div>
                                    <div className="row margin">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix pt-2">lock_outline</i>
                                            <input type="password"
                                                   className="form-control"
                                                   name="confirmPassword"
                                                   id="inputPass"
                                                   placeholder="Confirm Password"
                                                   required
                                                   onChange={onInputChange}
                                                   onKeyDown={onKeyDown}
                                                   ref={refConfirmPassword}/>
                                            {errorConfirmPassword && <div className="wrapper-error">
                                                <ShowError intl={intl} className={"pl-8"} id={errorConfirmPassword}/>
                                            </div>}
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            {isLoading &&
                                            <Spinner size={50}/>
                                            }
                                            {errorCode && <ShowError intl={intl} className={"mb-3"} id={errorCode}/>}

                                            {!isLoading &&
                                            <button type="submit" color="danger"
                                               className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
                                               onClick={handleRegister}>
                                                {intl.formatMessage({ id: 'register_button' })}
                                            </button>
                                            }

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6 m6 l6">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default RegisterForm;
