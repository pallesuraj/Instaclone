import { useState } from 'react';
import { View, Text,Image,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const input = () => {
  const [ newComment, setNewComment] = useState('');

  const onPost  = ()=> {
    console.warn('Posting the comment: ', newComment);
      setNewComment ('');
  };
  return (
    <View style={styles.root}>
    <Image
     source ={{
      uri : 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
     }}
     style = {styles.image}
     />
     <TextInput  
     value ={newComment}
     onChangeText={setNewComment}
     placeholder=" Write your comment...."  
     style = {styles.input}
     multiline
     />
     <Text  onPress = {onPost} style = {styles.button}>POST</Text>
    </View>
  )
};
const styles = StyleSheet.create({
  root :{
    flexDirection :'row',
    padding:5,
    borderTopWidth:1,
    borderColor: colors.grey,
    alignItems : 'flex-end',
  },
 image: {
   width: 40,
   aspectRatio:1,
   borderRadius:20,
 },
 input :{
   flex:1,

  borderColor: colors.grey,
  borderWidth:1,
  borderRadius: 25,

  paddingVertical:5,
  paddingRight:50, 
  paddingHorizontal:10,
  marginLeft:5,
 },
 button:{
  position : 'absolute',
  right :15,
  bottom : 15,
  fontSize: fonts.size.s,
  fontWeight: 'bold',
  color: colors.primary,
 },
})

export default input