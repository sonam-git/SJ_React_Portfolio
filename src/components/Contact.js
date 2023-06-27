import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, FormGroup, TextField, Button} from '@material-ui/core';
import Alert from '@mui/material/Alert';

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
  formGroup: {
    marginBottom: theme.spacing(2),
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMsgChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    let validForm = true;

    if (name.length <= 0) {
      setNameError(true);
      validForm = false;
    } else {
      setNameError(false);
    }

    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmailError(true);
      validForm = false;
    } else {
      setEmailError(false);
    }

    if (message.length < 50) {
      setMessageError(true);
      validForm = false;
    } else {
      setMessageError(false);
    }

    if (validForm) {
      // Submit the form data
      // ...
      // Set the messageSent state to true upon successful submission
      setMessageSent(true);
    }
  };

  return (
      <Container id="contact" className={classes.section} style={{marginTop: 40, marginBottom: 150}}>
        <Typography variant="h2" style={{ textAlign: "center", fontWeight: 400, marginBottom: 25 }}>Contact Me</Typography>
        {messageSent && (
          <Alert variant="filled" severity="success" >
         Your message has been sent successfully!
        </Alert>
        )}
        <form onSubmit={handleSubmit} noValidate style={{marginTop: 80}}>
          <FormGroup className={classes.formGroup} style={{marginTop: 20}}>
            <TextField
              type="text"
              label="Name"
              variant="outlined"
              error={nameError}
              helperText={nameError && 'Name must be more than 5 characters'}
              value={name}
              onChange={handleNameChange}
              required
            />
          </FormGroup>
          <FormGroup className={classes.formGroup}>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              error={emailError}
              helperText={emailError && 'A valid email is required'}
              value={email}
              onChange={handleEmailChange}
              required
            />
          </FormGroup>
          <FormGroup className={classes.formGroup}>
            <TextField
              multiline
              minRows={10}
              as="textarea"
              label="Message"
              variant="outlined"
              error={messageError}
              helperText={messageError && 'Message must be at least 150 characters'}
              value={message}
              onChange={handleMsgChange}
            />
          </FormGroup>
          <Button type="submit" variant="contained" color="primary">
            Send Message
          </Button>
        </form>
      </Container>
  );
};

export default Contact;
