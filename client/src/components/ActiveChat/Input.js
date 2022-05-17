import React, { useState } from 'react';
import { FormControl, FilledInput, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
  adornment: {
    color: 'gray',
    marginRight: '10px',
    cursor: 'pointer',
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [images, setImages] = useState('');

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
    };
    await postMessage(reqBody);
    setText('');
  };

  const handleFileChoose = event => {
    setImages(event.target.files);
  };

  const inputAdornment = (
    <InputAdornment position="end">
      <SentimentSatisfiedAltIcon className={classes.adornment} />
      <input
        style={{ display: 'none' }}
        id="image-upload"
        type="file"
        onChange={handleFileChoose}
        accept="image/*"
        multiple
      />
      <label htmlFor="image-upload">
        <InsertPhotoIcon className={classes.adornment} />
      </label>
    </InputAdornment>
  );

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={inputAdornment}
        />
      </FormControl>
    </form>
  );
};

export default Input;
