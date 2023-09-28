import { Image,FlatList } from 'react-native'

import React from 'react'
import user from '../../assests/data/user.json';

import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import { useNavigation, useRoute } from '@react-navigation/native';
import { UserProfileNavigationProp,UserProfileRouteProp,MyProfileNavigationProp,MyProfileRouteProp} from '../../types/navigation';



const ProfileScreen  = () => {

    const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
    const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
    >();
     
    const userId = route.params?.userId;
    console.warn('userid: ', userId);
  

     return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader}/>;
};

export default ProfileScreen; 