import { View, Text ,Image,StyleSheet,Pressable} from 'react-native'
import React from 'react'
import {IUser} from '../../types/model';
import fonts from '../../themes/fonts';
import colors from '../../themes/colors';
import { useNavigation } from '@react-navigation/native';

interface IUserListItem {
   user:IUser;
}
const UserListItem = ({user}: IUserListItem) => {

    const navigation = useNavigation();
    const goToUserScreen =() => {
       navigation.navigate("UserProfile", {userId: user.id});
    };
  return (
    <Pressable onPress={goToUserScreen} style={styles.root}>
      <Image source ={{uri :user.image}} style={styles.image} />

      <View>
        <Text style ={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    root:{
     flexDirection:'row',
     alignItems:'center',
     padding:10,
    },
    name:{
    fontWeight:fonts.weight.bold,
    marginBottom:5,
    color:colors.black
    },
    username:{
     color:colors.grey,
    },
    image:{
        width:50,
        aspectRatio:1,
        borderRadius:25,
        marginRight:10,
    }
})

export default UserListItem;