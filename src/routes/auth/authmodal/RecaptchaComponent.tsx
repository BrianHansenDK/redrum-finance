import React from 'react'
import ReactDOM from 'react-dom';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

const RecaptchaComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = React.useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('yourAction');
    console.log(token);
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  React.useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
  <GoogleReCaptchaProvider reCaptchaKey="6LdzboklAAAAABSIbMmh5sxIK-43VvMZ-aQsCbEd">
    <button onClick={handleReCaptchaVerify}>Verify recaptcha</button>
  </GoogleReCaptchaProvider>);
};

export default RecaptchaComponent;
