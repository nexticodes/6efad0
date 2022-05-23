import React, { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  FilledInput,
  InputAdornment,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import FilterNoneOutlinedIcon from '@material-ui/icons/FilterNoneOutlined';

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
  attachments: {
    transform: 'rotateX(180deg) scale(0.9)',
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);

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
      attachments: images,
    };
    await postMessage(reqBody);
    setText('');
    setImages([]);
  };

  const handleFileChoose = async event => {
    const files = event.target.files;
    if (files.length > 0) {
      const promises = [];
      for (let index = 0; index < files.length; index++) {
        const instance = axios.create();
        const data = new FormData();
        data.append('file', files[index]);
        data.append('upload_preset', 'hatchyless3');
        promises.push(
          instance.post(`https://api.cloudinary.com/v1_1/ebdev8/image/upload`, data)
        );
      }
      const dataArray = await Promise.all(promises);
      const imageUrls = dataArray.map((image) => image.data.url);
      setImages(imageUrls);
    }
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
        <FilterNoneOutlinedIcon
          className={`${classes.adornment} ${classes.attachments}`}
        />
      </label>
    </InputAdornment>
  );

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        {images.length > 0 && (
          <Typography>{images.length} Images Uploaded</Typography>
        )}
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
