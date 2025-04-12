import React from 'react'
import WriteInField, {WriteInFieldProps } from './atoms/WriteInField'

const TextArea: React.FC<WriteInFieldProps> = (props) => {
  return(
    <WriteInField {...props} type="textarea" />
  )
}

export default TextArea;