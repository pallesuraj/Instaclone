import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import colors from '../../themes/colors';

interface IButton {
    text ?:string;
    onPress ?: () => void;
}

const Button = ({text = '' , onPress = ()  => {}}: IButton) => {
  return (
    <Pressable 
    onPress={onPress}
    style = {styles.container}
    >
      <Text style = {styles.text}>{text}</Text>
    </Pressable>
  );
}; 

const styles = StyleSheet.create({
     container :{
        borderWidth:1,
        borderColor:colors.black,
        borderRadius:5,

        padding:5,

        alignItems:'center',
        flex:1,

        margin : 5,
     },
     text :{
        color:colors.black,
        fontWeight: '600',
     },
})

export default Button