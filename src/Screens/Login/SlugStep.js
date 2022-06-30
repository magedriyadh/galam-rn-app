import React from 'react'
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss'
import validate from '../../apis/validate';
import { Text, Button, Space } from '../../components';
import SlugInput from './SlugInput';


const SlugStep = ({
  onSubmit,
  fetching,
}) => {
  const [slug, setSlug] = React.useState();

  return (
    <View style={[t.hFull, t.justifyCenter, t.itemsCenter, t.bgPrimary]}>
      <View style={[t.wFull, t.pX12]}>
        <Text size={18} color="white" label="Login" />
        <SlugInput onChagne={t => setSlug(t)} autoCapitalize="none" />
        <Space height={30} />
        <Button
          variant="outlined"
          label="Submit"
          onClick={() => onSubmit(slug)}
          disabled={fetching}
        />
      </View>
    </View>
  )
}

export default React.memo(SlugStep)