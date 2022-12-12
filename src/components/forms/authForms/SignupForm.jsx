import { useState } from 'react';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from '../../../utils/firebase/auth';

import blurgaLogo from '../../../assets/blurga-logo.svg';

const formFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupForm = () => {
  const [inputFields, setInputFields] = useState(formFields);
  const { firstName, lastName, email, password, confirmPassword } = inputFields;

  const createUserDoc = async () => {
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );
      const userAuthData = { ...user, displayName: `${firstName} ${lastName}` };

      const userDocRef = await createUserDocument(userAuthData);

      setInputFields(formFields);
      return userDocRef;
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleSignUpButton = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords must be the same.');
    }

    createUserDoc();
  };

  return (
    <form className="w-96 h-auto p-6 bg-grey font-dmSans">
      <div className="w-full">
        <img src={blurgaLogo} alt="logo" className="w-12 h-auto mx-auto" />
        <h3 className="text-center mt-2 text-2xl font-bold">Sign Up</h3>
      </div>

      <div className="mt-8">
        <div className="w-full mb-4">
          <label htmlFor="firstName" className="text-sm font-medium">
            First Name
          </label>
          <Input
            type="text"
            inputId="firstName"
            placeholder="John"
            value={firstName}
            handleOnChange={onChangeHandler}
          />
        </div>

        <div className="w-full mb-4">
          <label htmlFor="lastName" className="text-sm font-medium">
            Last Name
          </label>
          <Input
            type="text"
            inputId="lastName"
            placeholder="Doe"
            value={lastName}
            handleOnChange={onChangeHandler}
          />
        </div>

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

        <div className="w-full mb-4">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Password
          </label>
          <Input
            type="password"
            inputId="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            handleOnChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="pt-4">
        <Button
          styleType="primary"
          type="submit"
          value="Log in"
          handleClick={handleSignUpButton}
        />
      </div>
    </form>
  );
};
export default SignupForm;
