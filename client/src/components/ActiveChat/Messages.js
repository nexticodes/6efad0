import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

const Messages = (props) => {
  const { messages, otherUser, user } = props;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === user.id ? (
          <SenderBubble key={message.id} text={message.text} attachments={message.attachments} time={time} userAvatar={user.photoUrl} username={user.username} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            attachments={message.attachments}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
