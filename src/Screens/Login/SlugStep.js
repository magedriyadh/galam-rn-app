import React from 'react'
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss'
import validate from '../../apis/validate';
import { Text, Button, Space } from '../../components';
import SlugInput from './SlugInput';


const SlugStep = ({
  onSubmit
}) => {
  const [slug, setSlug] = React.useState();
  const { result, post } = validate();

  return (
    <View style={[t.hFull, t.justifyCenter, t.itemsCenter, t.bgPrimary]}>
      <View style={[t.wFull, t.pX12]}>
        <Text size={18} color="white" label="Login" />
        <SlugInput onChagne={t => setSlug(t)} />
        <Space height={30} />
        <Button
          variant="outlined"
          label="Submit"
          onClick={() => onSubmit(slug)}
        />
      </View>
    </View>
  )
}

export default SlugStep