import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  contentSwitch: {
    display: 'flex',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '10vh auto 8vh auto',
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
  question: {
    color: '#B0B0B0',
  },
  link: {
    textDecoration: 'none',
  }
}))

// goTo is either 'register' or 'login'
const ContentSwitch = ({goTo}) => {
  const classes = useStyles();
  const buttonText = goTo.slice(0,1).toUpperCase()+goTo.slice(1);
  const question = goTo === 'login' ? 'Already have an account?' : 'Don\'t have an account?' 
  return (
    <Grid className={classes.contentSwitch}>
    <Typography  className={classes.question}>
      {question}
    </Typography>
    <Link className={classes.link} href={`/${goTo}`} to={`/${goTo}`}>
      <Button
        variant="outlined"
        align="center"
        className={classes.authButton}
      >
        {buttonText}
      </Button>
    </Link>
  </Grid>
  )
}

export default ContentSwitch;