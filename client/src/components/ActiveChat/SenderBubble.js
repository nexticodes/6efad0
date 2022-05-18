import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
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
  avatar: {
    height: 20,
    width: 20,
    marginRight: 11,
    marginTop: 6,
    marginBottom: 11,
  },
}));

const SenderBubble = ({ time, text, attachments, username, userAvatar }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <MessageContent text={text} attachments={attachments} />
      <Avatar
        alt={username}
        src={userAvatar}
        className={classes.avatar}
      />
    </Box>
  );
};

export default SenderBubble;
