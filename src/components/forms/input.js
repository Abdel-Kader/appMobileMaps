import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const InputField = (props) => {
  const [secureInput, setSecureInput] = useState(props.inputType === 'text' || props.inputType === 'email' ? false : true);
  const {
    labelText,
    labelTextSize,
    labelColor,
    textColor,
    borderColor,
    inputType,
    customStyle,
    onChangeText,
    autoFocus,
    autoCapitalize,
    multiline,
    numberOfLines,
    iconText,
    value
  } = props;

  function toggleShowPassword() {
    setSecureInput(!secureInput)
    // this.setState({secureInput: !secureInput});
  }
  const fontSize = labelTextSize || 14;
  const color = labelColor || '#fff';
  const inputColor = textColor || '#fff';
  const border = borderColor || 'transparent';
  const keyboardType = inputType === 'phone-pad' ? 'phone-pad' : 'default';
  return (
    <View style={[customStyle, styles.wrapper]}>
      <Text style={[{fontSize}, {color}, styles.label]}>{labelText}</Text>
      {inputType == 'password' ? (
        <TouchableOpacity
          style={styles.showButton}
          onPress={toggleShowPassword}>
          <Text style={styles.showButtontext}>
            {secureInput ? (
              <Icon name="eye-slash" size={20} />
            ) : (
              <Icon name="eye" size={20} />
            )}
          </Text>
        </TouchableOpacity>
      ) : null}
      <TextInput
        autoCorrect={false}
        style={[{color: inputColor, borderColor: border}, styles.inputField]}
        secureTextEntry={secureInput}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize}
        value={value}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      <View style={styles.checkmarkWrapper}>
        <Icon name={iconText} size={25} color={'#ff5e3a'} />
      </View>
    </View>
  );
};

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  iconText: PropTypes.string,
  labelTextSize: PropTypes.number,
  labelColor: PropTypes.string,
  value: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  onChangeText: PropTypes.func,
  autoFocus: PropTypes.bool,
  autoCapitalize: PropTypes.bool,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  label: {
    fontWeight: '700',
    marginBottom: 15,
  },
  inputField: {
    borderWidth: 1.5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    backgroundColor: '#FFFFFF35',

  },
  showButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  showButtontext: {
    color: 'red',
    fontWeight: '700',
  },
  checkmarkWrapper: {
    position: 'absolute',
    left: 5,
    bottom: 10,
  },
});
