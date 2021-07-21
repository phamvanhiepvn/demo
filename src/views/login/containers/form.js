/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef, useState} from 'react';
import Spinner from 'components/common/Spinner';
import ShowError from 'components/form/ShowError';
import { NavLink } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Config } from 'config';
import useLogin from 'state/auth/hooks/useLogin';
const emailRule = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const LoginForm = (props) => {
  const { intl} = props;
  const refPassword = useRef(null);
  const refEmail = useRef(null);
  const [isChecked] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [setLogin, isLoading, errorCode] = useLogin();
  const onInputChange = (e) => {
  }
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }
  const handleChecked = () => {

  }
  const componentClicked = (data)=> {
    console.log(data)

  }
  const responseFacebook = (data)=> {
    const {setLogin} = props;
    const values = {...data, password: '123456', urlApi: 'loginWithSocial', provider: 1}
    setLogin({values: values})

  }
  const handleLogin = () => {
    setErrorEmail('')
    setErrorPassword('')

    let countError = 0
    const values = {
      email: refEmail.current.value,
      password: refPassword.current.value
    }
    const {email, password} = values;
    if (!emailRule.test(email)){
      setErrorEmail('auth_require_email')
      countError++
    }
    if (!password){
      setErrorPassword('auth_require_pw')
      countError++
    }
    if (countError > 0)
      return;
    setLogin({values: values})
  }
  const responseSuccessGoogle = (data) => {
    //console.log(data);
    const {accessToken, profileObj: {email}} = data
    const {setLogin} = props;
    const values = {email: email, password: '123456', urlApi: 'loginWithSocial', provider: 2, accessToken}
    setLogin({values: values})
  }
  const responseFailGoogle = (data) => {
    console.log(data);
  }
  return (
      <div className="vertical-layout page-header-light vertical-menu-collapsible vertical-dark-menu 1-column login-bg  blank-page blank-page">
        <div className="row">
          <div className="col s12">
            <div className="container">
              <div id="login-page" className="row">
                <div
                    className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                  <form className="login-form">
                    <div className="row">
                      <div className="input-field col s12">
                        <h5 className="ml-4">{intl.formatMessage({ id: 'auth_signin' })}</h5>
                      </div>
                    </div>
                    <div className="row margin">
                      <div className="input-field col s12">
                        <i className="material-icons prefix pt-2">person_outline</i>
                        <input type="email" className="form-control" name="email" id="inputEmail" placeholder="Email" onChange={onInputChange} onKeyDown={onKeyDown} ref={refEmail} required/>
                        {errorEmail && <div className="wrapper-error">
                          <ShowError intl={intl} className={"pl-8"} id={errorEmail}/>
                        </div>}
                        <label htmlFor="email" className="center-align">Email</label>
                      </div>
                    </div>
                    <div className="row margin">
                      <div className="input-field col s12">
                        <i className="material-icons prefix pt-2">lock_outline</i>
                        <input type="password" className="form-control" name="password" id="inputPass"  placeholder={intl.formatMessage({ id: 'password' })} required onChange={onInputChange} onKeyDown={onKeyDown} ref={refPassword}/>
                        {errorPassword && <div className="wrapper-error">
                           <ShowError intl={intl} className={"pl-8"} id={errorPassword}/>
                        </div>}
                        <label htmlFor="password">{intl.formatMessage({ id: 'password' })}</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 m12 l12 ml-2 mt-1">
                        <p>
                          <label>
                            <input type="checkbox" className="custom-control-input" checked={isChecked} onChange={handleChecked} id="rememberMe"/>
                            <span>{intl.formatMessage({ id: 'remember_me' })}</span>
                          </label>
                        </p>
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
                           onClick={handleLogin}>
                          {intl.formatMessage({ id: 'login_button' })}
                        </button>
                        }

                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m12 12">
                        <p className="mb-3 medium-small">
                          <NavLink to="/auth/register">{intl.formatMessage({ id: 'register' })}</NavLink>
                        </p>
                        <div className="wrapper-action-btn">
                          <div className="left wrapper-action-btn-social">
                            {Config.ENV === 'production' && <FacebookLogin
                                appId={Config.FACEBOOK_ID}
                                autoLoad={false}
                                fields="name,email,picture"
                                onClick={componentClicked}
                                buttonText={intl.formatMessage({ id: 'login_facebook'})}
                                callback={responseFacebook} />}
                          </div>
                          <div className="right wrapper-action-btn-social wrapper-action-btn-google">
                            <GoogleLogin
                                clientId={Config.GOOGLE_KEY}
                                buttonText={intl.formatMessage({ id: 'login_google'})}
                                autoLoad={false}
                                onSuccess={responseSuccessGoogle}
                                onFailure={responseFailGoogle}
                            />
                          </div>
                        </div>
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

export default LoginForm;
