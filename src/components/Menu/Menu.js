import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { t } from 'react-native-tailwindcss';


const Menu = () => {
  const [open, setOpen] = React.useState();

  return (
    <View style={[t.relative]}>
      <TouchableOpacity
        onPress={() => setOpen(true)}
      >
        <View>
          <Text>menu</Text>
        </View>
      </TouchableOpacity>
      {open && (
        <View style={[t.absolute, t.bottom0, t.bgWhite, t.border, t.borderGray400, { top: 10, zIndex: 999 }]}>
          <Text>menu22</Text>
        </View>
      )}
    </View>
  )
}

export default Menu