import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import bgImg from '../../assets/bg-img.png';
import bubble from '../../assets/bubble.svg';

const useStyles = makeStyles(() => ({
  introBanner: {
    width: '40%',
    background: ` url(${bgImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
  },
  introOverlay: {
    background: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
    opacity: 0.85,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    fontFamily: 'Open Sans',
    fontWeight: 300,
    fontSize: '24px',
  },
  introText: {
    marginTop: '50px',
  },
  bubble: {
    marginTop: '50%',
  }
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.introBanner}>
      <Grid className={classes.introOverlay}>
        <img className={classes.bubble} src={bubble} alt="People smiling" />
        <Typography variant="h4" className={classes.introText}>
          Converse with anyone <br /> with any language
        </Typography>
      </Grid>
    </Box>
  );
};

export default Banner;
