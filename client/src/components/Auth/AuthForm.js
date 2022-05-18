import React from 'react';
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formContainer: {
    width: '70%',
    height: '50%',
  },
  formGrid: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  formLabel: {
    textAlign: 'left',
    fontWeight: 'bolder',
    fontSize: '1.8em'
  },
  authButton: {
    border: 'none',
    padding: '16px 50px 16px 50px',
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
    borderRadius: '5px',
    fontSize: '19px',
    textDecoration: 'none',
    color: '#3A8DFF',
    marginLeft: '30px',
  },
  inputGroup: {
    width: '100%',
    fontSize: '1.4em',
  },
  submitButton: {
    border: 'none',
    padding: '16px 50px 16px 50px',
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
    borderRadius: '5px',
    fontSize: '19px',
    textDecoration: 'none',
    background: '#3A8DFF',
    color: 'white',
    width: '160px',
    marginTop: 30,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  adorn: {
    color: '#3A8DFF',
    textDecoration: 'none',
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
}));

const FormInput = ({ label, name, type, inputProps }) => {
  const classes = useStyles();
  return (
    <Grid>
      <FormControl className={classes.inputGroup}>
        <TextField
          label={label}
          name={name}
          type={type}
          InputProps={inputProps}
        />
      </FormControl>
    </Grid>
  );
};

// mode is either 'register' or 'login';
const AuthForm = ({ mode, action }) => {
  const classes = useStyles();
  const isRegister = mode === 'register';

  const handleRegister = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;
    
    if (isRegister) {
      const email = formElements.email.value;
      await action({ username, email, password });
      return;
    }
    await action({ username, password });
  };

  const formLabel = isRegister ? 'Create an account.' : 'Welcome back!';

  const buttonText = isRegister ? 'Create' : 'Login';

  return (
    <form className={classes.formContainer} onSubmit={handleRegister}>
      <Typography className={classes.formLabel}>
        {formLabel}
      </Typography>
      <Grid className={classes.formGrid}>
        {!isRegister && (
          <FormInput label="Username" name="username" type="text" />
        )}
        <FormInput label="E-mail address" type="email" name="email" />
        <FormInput
          type="password"
          label="Password"
          inputProps={{
            minLength: 6,
            endAdornment: !isRegister && (
              <a className={classes.adorn} href="/" target="_blank">
                Forgot?
              </a>
            ),
          }}
          name="password"
        />
        <Button
          type="submit"
          variant="contained"
          className={classes.submitButton}
        >
          {buttonText}
        </Button>
      </Grid>
    </form>
  );
};

export default AuthForm;
