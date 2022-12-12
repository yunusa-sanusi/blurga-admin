import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../Input';
import Button from '../../Button';
import { signInAuthUserWithEmailAndPassword } from '../../../utils/firebase/auth';

import blurgaLogo from '../../../assets/blurga-logo.svg';

const formFields = { email: '', password: '' };

const LoginForm = () => {
  const [inputFields, setInputFields] = useState(formFields);
  const navigate = useNavigate();

  const { email, password } = inputFields;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const signInUser = async () => {
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      navigate('/');
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter your email or password');
    }

    signInUser();
    setInputFields(formFields);
  };

  return (
    <form className="w-96 h-auto p-6 bg-grey font-dmSans">
      <div className="w-full">
        <img src={blurgaLogo} alt="logo" className="w-12 h-auto mx-auto" />
        <h3 className="text-center mt-2 text-2xl font-bold">Log in</h3>
      </div>

      <div className="mt-8">
        <div className="w-full mb-4">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input
            type="email"
            inputId="email"
            placeholder="example@gmail.com"
            value={email}
            handleOnChange={onChangeHandler}
          />
        </div>

        <div className="w-full mb-4">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input
            type="password"
            inputId="password"
            placeholder="password"
            value={password}
            handleOnChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="pt-4">
        <Button
          styleType="primary"
          type="submit"
          value="Log in"
          handleClick={handleLogin}
        />
      </div>
    </form>
  );
};
export default LoginForm;
