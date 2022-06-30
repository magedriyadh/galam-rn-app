import React from 'react'
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss'
import LoginForm from './LoginForm';
import SlugStep from './SlugStep';
import validate from '../../apis/validate';
import { getSlug, setSlug } from '../../hooks/useStorage';


const Login = () => {
  const [step, setStep] = React.useState(1);
  const { result, post, error } = validate();

  const handleSubmit = (value) => {
    if (step === 0) {
      post(value)
        .then((data) => {
          setStep(1)
        })
    }
  }
    
  getSlug().then(val => {
    console.log(val, 'val')
  });
  
  return (
    <View style={[t.hFull, t.wFull]}>
      {step === 0 && <SlugStep onSubmit={handleSubmit} fetching={result?.fetching || false} />}
      {step === 1 && <LoginForm />}
    </View>
  )
}

export default Login;