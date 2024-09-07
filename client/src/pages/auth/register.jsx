import CommonForm from '@/components/common/forms';
import { registerFormControls } from '@/config';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialstate = {
  userName: '',
  email: '',
  phno: ''
};

export default function AuthRegister() {
  const [formData, setFormData] = useState(initialstate);

  function onSubmit() {
    // Handle form submission logic here
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Create New Account
          </h1>
          <p className="mt-2">
            Already have an account?
            <Link
              className="font-medium text-primary hover:underline ml-2"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
        <CommonForm
          formcontrols={registerFormControls}
          buttonText="Sign Up"
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
