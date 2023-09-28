import { StyleSheet } from "react-native";
import fonts from "../../themes/fonts";
import colors from "../../themes/colors";

export default StyleSheet.create({
root :{
    padding : 10,
},
headerRow:{
  flexDirection: 'row',
  alignItems:'center',
  justifyContent:'space-between',
  marginVertical :10,
}, 
avatar:{
    width:100,
    aspectRatio:1,
    borderRadius:50,
},
numberContainer :{
    alignItems:'center',
    color:colors.black
},
numberText:{
  fontSize : fonts.size.md, 
  fontWeight: 'bold',
  color : colors.black
},
name:{
    fontWeight: '600',
    color : colors.black,
  }

});