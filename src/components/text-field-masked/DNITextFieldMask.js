import React from 'react'
import MaskedInput from 'react-text-mask';
import { PropTypes } from 'prop-types';

export default function DNITextFieldMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      placeholderChar={' '}
      ref={inputRef}
      mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]}
      showMask
    />
  );
}

DNITextFieldMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};