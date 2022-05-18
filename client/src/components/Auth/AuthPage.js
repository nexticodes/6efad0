import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AuthForm, Banner, ContentSwitch } from './';

const useStyles = makeStyles(() => ({
  introContent: {
    display: 'flex',
    width: '60%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));

const AuthPage = ({ user, login, register }) => {
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container>
      <Banner />
      <Box className={classes.introContent}>
        {login && (
          <>
            <ContentSwitch goTo="register" />
            <AuthForm mode="login" action={login} />
          </>
        )}
        {register && (
          <>
            <ContentSwitch goTo="login" />
            <AuthForm mode="register" action={register} />
          </>
        )}
      </Box>
    </Grid>
  );
};

export default AuthPage;
