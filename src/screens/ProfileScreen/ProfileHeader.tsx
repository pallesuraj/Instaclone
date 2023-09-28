import { View, Text,Image} from 'react-native'
import user from '../../assests/data/user.json';
import styles from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { ProfileNavigationProp } from '../../types/navigation';
import {Auth} from 'aws-amplify'

const ProfileHeader = () => {
  
const navigation =useNavigation<ProfileNavigationProp>();

    return (
      <View>
        <View style={styles.headerRow}>
          {/* Profile image */}
      <Image  source ={{uri : user.image}} style ={styles.avatar}/>
  
          {/*Posts ,followers , following number*/}
          <View style={styles.numberContainer}> 
        <Text style={styles.numberText}> 98</Text>
        <Text style={{color:'black'}}> Posts</Text>
          </View>
  
          <View style={styles.numberContainer}> 
        <Text  style={styles.numberText}> 100M</Text>
        <Text style={{color:'black'}} > Followers</Text>
          </View>
  
          <View style={styles.numberContainer}> 
        <Text style={styles.numberText}> 10</Text>
        <Text style={{color:'black'}} > Following</Text>
          </View>
          </View>
        <Text style ={styles.name}> {user.name}</Text>
        <Text style={{color:'black'}}> {user.bio}</Text>
  
        {/*Button */}
        <View style ={{flexDirection:'row'}}>
        <Button 
        text="Edit Profile"
        onPress={() => navigation.navigate('Edit Profile')}
        />  
  
         <Button 
        text="Sign out"
        onPress={() => Auth.signOut()}
        /> 
        </View>
  
        {/*GridView Posts*/}
       
      </View>
    );
  };

  export default ProfileHeader;