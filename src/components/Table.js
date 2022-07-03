import React from 'react'
import { View } from 'react-native'
import { t } from 'react-native-tailwindcss'
import Text from './Text'

const Table = ({
  headers,
  body
}) => {
  return (
    <View style={[t.wFull]}>
      <View style={[t.flexRow, t.bgG004, t.pT3]}>
        {headers.map((head, i) => (
          <View key={i} style={[head.width ? { width: head.width } : t.flex1, t.pY2, t.pX3]}>
            <Text label={head.label} />
          </View>
        ))}
      </View>
      <View>
        {body.map((data, bi) => (
          <View key={bi} style={[t.flexRow, t.borderT, t.borderG003]}>
            {data.map((text, i) => (
              <View key={i} style={[headers[i].width ? { width: headers[i].width } : t.flex1, t.pY3, t.pX3]}>
                <Text size={12} label={text} />
              </View>
            ))}
          </View>
        ))}

      </View>
    </View>
  )
}

export default Table