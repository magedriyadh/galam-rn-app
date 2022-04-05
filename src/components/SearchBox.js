import React from 'react';
import { TextInput, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Space from './Space';
import Text from './Text';
import SearchIcon from '../../assets/search.svg';

const SearchBox = ({
  contentStyle,
 ...props 
}) => {
  const [value, setValue] = React.useState('');

  return (
    <View style={contentStyle}>
      <SearchIcon style={[t.absolute, t.mT1, t.mX3]} />
      <TextInput
        {...props}
        style={[ t.border, t.wFull, t.h8, t.roundedLg, t.borderG003, t.pL10]}
        placeholder="Search .."
        onChangeText={value => setValue(value)}
        defaultValue={value}
        // secureTextEntry={password}
      />
    </View>
  )
}

export default SearchBox