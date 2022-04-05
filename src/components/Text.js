import React from 'react'
import PropTypes from 'prop-types';
import { Text as TextRN } from 'react-native';
import { t } from 'react-native-tailwindcss';


const fontSize = {
  '12': t.textSm,
  '13': t.textBase,
  '14': t.textLg,
  '16': t.textXl,
  '18': t.text2xl,
}
const colors = {
  '001': t.textG001, 
  '002': t.textG002, 
  'white': t.textWhite, 
}

const Text = ({
  label,
  style,
  size,
  color,
  bold,
}) => {
  return (
    <TextRN
      style={[
        fontSize[size],
        colors[color],
        bold && t.fontBold,
        ...style,
      ]}
    >
      {label}
    </TextRN>
  )
}

Text.defaultProps = {
  size: t.textLg,
  style: [],
  color: '001',
}

export default Text;