import { StyleSheet } from "react-native"
import colors from "../../themes/colors"
import fonts from "../../themes/fonts"

export  default StyleSheet.create({
    
    post:{},
    image:{
        width:'100%',
        aspectRatio:1,
    },
    header:{

    flexDirection:'row',
    alignItems:'center',
    padding:10,

    },
    userAvatar:{
        width:50,
        height:50,
        borderRadius:25,
        marginRight:10,
    },
    userName:{
        fontWeight:fonts.weight.bold,
        color:colors.black

    },
    threeDot:{
    marginLeft:'auto',
    color:colors.black
    },
    iconContainer:{

        flexDirection:'row',
        marginBottom:5
        
       
    },
    icon:{
        marginHorizontal : 5
    },
    footer:{
     padding:10,
    },
    text:{
     color:colors.black,
     lineHeight :18
    },
    bold:{
        fontWeight: fonts.weight.bold,
    },
   
 })
