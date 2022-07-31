import React from 'react'
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss'
import { useSelector } from 'react-redux';
import { Text, Button, Space } from '../../components';
import SlugInput from './SlugInput';
import KeyboardArea from '../../components/KeyboardArea';
import i18n from '../../translation/i18n';


const SlugStep = ({
  onSubmit,
}) => {
  const [slug, setSlug] = React.useState();
  const { fetching } = useSelector(state => state.schools)

  return (
    <KeyboardArea>
      <View style={[t.hFull, t.justifyCenter, t.itemsCenter, t.bgPrimary]}>
        <View style={[t.wFull, t.pX12]}>
          <Text size={16} color="white" label={i18n.t('type_school_name')} />
          <Space height={20} />
          <SlugInput onChagne={t => setSlug(t)} autoCapitalize="none" />
          <Space height={30} />
          <Button
            variant="outlined"
            label={i18n.t('submit')}
            onClick={() => onSubmit(slug)}
            disabled={fetching}
          />
        </View>
      </View>
    </KeyboardArea>
  )
}

export default React.memo(SlugStep)