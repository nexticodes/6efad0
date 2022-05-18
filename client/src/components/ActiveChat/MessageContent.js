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
    maxHeight: '100%',
  },
  imageOne: {
    borderRadius: '10px 10px 0 0px',
  },
  imagePlus: {
    borderRadius: '10px 10px 0px 10px',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
    marginBottom: '10px',
  },
}));

const MessageContent = ({ text, attachments }) => {
  const classes = useStyles();
  if (attachments && attachments.length > 0) {
    if (attachments.length === 1) {
      return (
        <Box className={classes.bubble}>
          <img
            className={`${classes.image} ${classes.imageOne}`}
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
        <ImageList>
          {attachments.map(image => (
            <ImageListItem key={image}>
              <img
                className={`${classes.image} ${classes.imagePlus}`}
                src={`${image}`}
                alt={'user upload'}
              />
            </ImageListItem>
          ))}
        </ImageList>
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
