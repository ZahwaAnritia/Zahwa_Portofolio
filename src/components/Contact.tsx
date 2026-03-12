import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<any>();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      emailjs.send(
        'service_phixdjp', 
        'template_4vylspf', 
        templateParams, 
        'VSo0XSq42P0Iij5NT'
      ).then((response) => {
        // POP-UP BERHASIL
        Swal.fire({
          title: 'Success!',
          text: 'Pesan kamu sudah Zahwa terima. Terima kasih!',
          icon: 'success',
          confirmButtonColor: '#5000ca',
          timer: 3000
        });

        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        // POP-UP GAGAL
        Swal.fire({
          title: 'Oops...',
          text: 'Gagal mengirim pesan, silakan coba lagi nanti.',
          icon: 'error',
          confirmButtonColor: '#5000ca'
        });
        console.log('FAILED...', error);
      });
    }
  };

  const inputStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    '& .MuiInputBase-input': {
      color: 'black !important',
      WebkitTextFillColor: 'black !important',
    },
    '& .MuiInputLabel-root': {
      color: '#666',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#5000ca',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#e2e8f0',
      },
      '&:hover fieldset': {
        borderColor: '#5000ca',
      },
    },
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                sx={inputStyle}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                sx={inputStyle}
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              sx={{...inputStyle, marginTop: '20px'}}
            />
            <Button 
              variant="contained" 
              type="submit" 
              endIcon={<SendIcon />} 
              style={{marginTop: '20px', backgroundColor: '#5000ca'}}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;