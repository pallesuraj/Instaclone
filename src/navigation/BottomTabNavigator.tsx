import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import PostUploadScreen from '../screens/PostUploadScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import colors from '../themes/colors';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator.tsx';
import {BottomTabNavigatorParamList } from '../types/navigation';
import SearchTabNavigator from './SearchTabNavigator';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator =()=>{
    return(
    <Tab.Navigator 
    screenOptions={{
        tabBarShowLabel:true , 
        tabBarActiveTintColor:colors.primary, 

        }}>

     <Tab.Screen
      name='HomeStack' 
      component={HomeStackNavigator} 
      options={{
        headerShown:false,
        tabBarIcon: ({color, size}) =>( <MaterialIcons name="home-filled" size={size} color={color} />
        ),   
      }}
         />

     <Tab.Screen name='Search'  
     component={SearchTabNavigator} 
      options={{
        tabBarIcon: ({color, size}) => (<MaterialIcons name="search" size={size} color={color} />),
        headerShown : false,
      }}
      />

     <Tab.Screen name='Upload'  component={PostUploadScreen}
      options={{ 
        headerShown:false ,
        tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="plus-circle-outline" size={size} color={color}/>)
      }}
      />
      
     <Tab.Screen name='Notifications'  component={PostUploadScreen}
      options={{
        tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="heart-outline" size={size} color={color}/>)
      }}
      />

     <Tab.Screen name='Myprofile'  component={ProfileStackNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (<FontAwesome name="user-circle-o" size={size} color={color} />)
      }}
      />

    </Tab.Navigator>

    )
}
export default BottomTabNavigator;