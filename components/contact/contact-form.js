import classes from './contact-form.module.css';
import { useState, useEffect } from 'react';
import Notification_18 from '../../components/ui/notification';

//把資料從form抓出來
const sendContactData = async (contactDetail) => {
  //把資料送到contact.js驗證
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetail),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
};

const ContactForm_18 = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const [requestStatus, setRequestStatus] = useState('');
  const [requestError, setRequestError] = useState('');

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  //'pending', 'success', 'error'
  const sendMessageHandler = async (event) => {
    event.preventDefault();
    console.log('in');

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredName('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      title: 'Sending message ...',
      status: 'pending',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      title: 'Success',
      status: 'success',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      title: 'Error!',
      status: 'error',
      message: requestError,
    };
  }

  // fetch('/api/contact', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: enteredEmail,
  //     name: enteredName,
  //     message: enteredMessage,
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // setRequestStatus('Success');

  console.log('enteredEmail', enteredEmail);
  console.log('enteredName', enteredName);
  console.log('enteredMessage', enteredMessage);
  return (
    <section className={classes.contact}>
      <h1>How can I help U?</h1>
      <form action='' className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.control}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              onChange={(event) => setEnteredEmail(event.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              onChange={(event) => setEnteredName(event.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='message'>Your Message</label>
            <textarea
              id='message'
              rows='5'
              onChange={(event) => setEnteredMessage(event.target.value)}
              required
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
      {notification && (
        <Notification_18
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm_18;
