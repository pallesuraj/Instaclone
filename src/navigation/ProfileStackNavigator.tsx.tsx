import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
    return(
        <Stack.Navigator>
            
            <Stack.Screen name='Profile' component={ProfileScreen} />

            <Stack.Screen   name='EditProfile' component={EditProfileScreen} options={{title:'Profile'}}/>

        </Stack.Navigator>
    )
}


export default ProfileStackNavigator;