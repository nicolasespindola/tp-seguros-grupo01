import React from 'react'
import MaskedInput from 'react-text-mask';
import { PropTypes } from 'prop-types';

export default function PhoneTextFieldMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

PhoneTextFieldMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};