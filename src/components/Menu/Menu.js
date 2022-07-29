import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { t } from 'react-native-tailwindcss';
import {Picker} from '@react-native-picker/picker';


const Menu = () => {
  const [open, setOpen] = React.useState();
  const [selectedLanguage, setSelectedLanguage] = React.useState();

  return (
    <Picker
      mode='dropdown'
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
      }>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  )
}

export default Menu