import React from 'react';
import { Box, Typography } from '@material-ui/core';
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
    height: '100%',
  },
  imageOneSender: {
    borderRadius: '10px 10px 0px 10px',
  },
  imageOneOther: {
    borderRadius: '0 10px 10px 10px',
  },
  imagePlusSender: {
    marginLeft: 5,
    borderRadius: '10px 10px 0px 10px',
  },
  imagePlusOther: {
    marginRight: 5,
    borderRadius: '0 10px 10px 10px',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
    marginBottom: 20,
  },
  otherBubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: '0 10px 10px 10px',
    marginBottom: 20,
    width: 'inherit',
  },
  otherText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: 8,
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
}));

const MessageContent = ({ text, attachments, other }) => {
  const classes = useStyles();
  const noText = text === '';

  const bubbleClass = () => (!other ? classes.bubble : classes.otherBubble);
  const imagePlusClass = () =>
    !other ? classes.imagePlusSender : classes.imagePlusOther;
  const imageOneClass = () =>
    !other ? classes.imageOneSender : classes.imageOneOther;
  const messageText = () => (
    <Typography className={!other ? classes.text : classes.otherText}>
      {text}
    </Typography>
  );
  const renderTextBubble = withBubble =>
    withBubble ? (
      <Box className={bubbleClass()}>{messageText()}</Box>
    ) : (
      messageText()
    );

  const oneImage = () => (
    <img className={`${imageOneClass()}`} src={`${attachments[0]}`} alt={''} />
  );

  if (attachments && attachments.length > 0) {
    if (attachments.length === 1) {
      if (noText) return oneImage();
      return (
        <Box className={bubbleClass()}>
          {oneImage()}
          {!noText && renderTextBubble(false)}
        </Box>
      );
    }
    return (
      <>
        {!noText && renderTextBubble(true)}
        <Box className={classes.container}>
          {attachments.map(image => (
            <Box key={image} className={`${classes.image} ${imagePlusClass()}`}>
              <img
                className={`${classes.image} ${imagePlusClass()}`}
                src={`${image}`}
                alt={''}
              />
            </Box>
          ))}
        </Box>
      </>
    );
  }

  return renderTextBubble(true);
};

export default MessageContent;
