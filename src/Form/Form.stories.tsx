import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from './Form';
import TextInput from './TextInput';
import Checkbox from './Checkbox/Checkbox';

export default {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: { action: 'submitted' },
    onCancel: { action: 'cancelled' },
    onSuccess: { action: 'success' },
    onFailure: { action: 'failure' },
    isLoading: {
      control: 'boolean',
      description: 'Controls the loading state of the form buttons',
    },
    isDestructive: {
      control: 'boolean',
      description: 'Applies warning styling to the submit button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the submit button',
    },
  },
} as ComponentMeta<typeof Form>;

// Template for a login form with controlled values
const FormTemplate: ComponentStory<typeof Form> = (args) => {
  const [formValues, setFormValues] = useState({
    username: args.formValues?.username || '',
    password: args.formValues?.password || '',
    rememberMe: args.formValues?.rememberMe || false,
  });

  const handleChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value
    });
  };

  return (
    <Form
      {...args}
      formValues={formValues}
      onSubmit={(values) => {
        args.onSubmit?.(values);
        return new Promise((resolve) => setTimeout(resolve, 1000));
      }}
    >
      <TextInput
        id="username"
        labelText="Username"
        value={formValues.username}
        onChange={(e) => handleChange('username', e.target.value)}
        helperText="Enter your username"
      />
      <TextInput
        id="password"
        labelText="Password"
        type="password"
        value={formValues.password}
        onChange={(e) => handleChange('password', e.target.value)}
        helperText="Enter your password"
      />
      <Checkbox
        id="rememberMe"
        labelText="Remember me"
        checked={formValues.rememberMe}
        onChange={(e) => handleChange('rememberMe', e.target.checked)}
      />
    </Form>
  );
};

// Basic login form with submit button only
export const Default = FormTemplate.bind({});
Default.args = {
  id: 'login-form',
  submitLabel: 'Log In',
  formValues: {
    username: '',
    password: '',
    rememberMe: false,
  },
};

// Login form with cancel button
export const WithCancelButton = FormTemplate.bind({});
WithCancelButton.args = {
  ...Default.args,
  id: 'login-form-with-cancel',
  cancelLabel: 'Cancel',
};

// Login form with prefilled username
export const PrefilledUsername = FormTemplate.bind({});
PrefilledUsername.args = {
  ...Default.args,
  id: 'prefilled-login-form',
  formValues: {
    username: 'user@example.com',
    password: '',
    rememberMe: false,
  },
};

// Login form showing error state
export const WithError = FormTemplate.bind({});
WithError.args = {
  ...Default.args,
  id: 'login-form-with-error',
  submissionError: 'Invalid username or password. Please try again.',
};

// Login form showing success state
export const WithSuccess = FormTemplate.bind({});
WithSuccess.args = {
  ...Default.args,
  id: 'login-form-with-success',
  successMessage: 'Login successful!',
};

// Forgot password form (destructive action example)
export const ForgotPassword = FormTemplate.bind({});
ForgotPassword.args = {
  ...Default.args,
  id: 'forgot-password-form',
  submitLabel: 'Reset Password',
  isDestructive: true,
  formValues: {
    username: '',
    password: '',
    rememberMe: false,
  },
};

// Disabled login form
export const DisabledForm = FormTemplate.bind({});
DisabledForm.args = {
  ...Default.args,
  id: 'disabled-login-form',
  disabled: true,
};

// Loading state
export const LoadingState = FormTemplate.bind({});
LoadingState.args = {
  ...Default.args,
  id: 'loading-login-form',
  isLoading: true,
};