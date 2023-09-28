import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import { Image } from 'react-native';
import Logo from '../assests/images/logo.png';
import { HomeStackNavigatorParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator>
            
            <Stack.Screen name='Feed' component={HomeScreen} options={{headerTitle:HeaderTitle , headerTitleAlign : 'center'}}/>

            <Stack.Screen  
           
           name='UserProfile'
           component={ProfileScreen}
           options={{title:'Profile'}}
           />

        </Stack.Navigator>
    )
}

const HeaderTitle =()=>{
    return(
       <Image source={Logo} resizeMode='contain' style={{width:150,height:40}}/>
    )
}

export default HomeStackNavigator;