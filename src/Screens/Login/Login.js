import React from 'react'
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { t } from 'react-native-tailwindcss'
import { getSlug, setSlug } from '../../hooks/useStorage';
import { schoolValidate } from '../../redux/schoolValidate/action';
import LoginForm from './LoginForm';
import SlugStep from './SlugStep';


const Login = () => {
  const [step, setStep] = React.useState(1);
  const dispatch = useDispatch();

  const handleSubmit = (value) => {
    if (step === 0) {
      dispatch(schoolValidate())
        .then(() => {
          setStep(1)
        })
    }
  }
    
  // getSlug().then(val => {
  //   console.log(val, 'val')
  // });
  
  React.useEffect(() => {
    dispatch(schoolValidate('maged'))
  }, []);

  return (
    <View style={[t.hFull, t.wFull]}>
      {step === 0 && <SlugStep onSubmit={handleSubmit} fetching={false} />}
      {step === 1 && <LoginForm />}
    </View>
  )
}

export default Login;