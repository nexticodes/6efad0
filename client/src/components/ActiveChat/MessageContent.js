import React from 'react';
import { Box, ImageList, ImageListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  image: {
    maxWidth: '100%',
  },
  imageOne: {
    borderRadius: '10px 10px 0 0px',
  },
  imagePlus: {
    marginLeft: 5,
    borderRadius: '10px 10px 0px 10px',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
    marginBottom: 5,
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  }
}));

const MessageContent = ({ text, attachments }) => {
  const classes = useStyles();
  if (attachments && attachments.length > 0) {
    if (attachments.length === 1) {
      return (
        <Box className={classes.bubble}>
          <img
            className={`${classes.image} ${text !== '' ? classes.imageOne : classes.imagePlus}`}
            src={`${attachments[0]}`}
            alt={'user upload'}
          />
          {text !== '' && (
            <Typography className={classes.text}>{text}</Typography>
          )}
        </Box>
      );
    }
    return (
      <>
        {text !== '' && (
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        )}
        <Box className={classes.container}>
          {attachments.map(image => (
            <Box key={image} className={`${classes.image} ${classes.imagePlus}`}>
              <img
                className={`${classes.image} ${classes.imagePlus}`}
                src={`${image}`}
                alt={'user upload'}
              />
            </Box>
          ))}
        </Box>
      </>
    );
  }

  return (
    <Box className={classes.bubble}>
      <Typography className={classes.text}>{text}</Typography>
    </Box>
  );
};

export default MessageContent;
