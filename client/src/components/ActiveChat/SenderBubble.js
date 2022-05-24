import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import MessageContent from './MessageContent';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <MessageContent text={text} attachments={attachments} />
    </Box>
  );
};

export default SenderBubble;
