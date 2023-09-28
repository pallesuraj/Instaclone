import { useState } from 'react';
import { View,Text, Pressable,Image } from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Comment from '../comment/comment';
import DoublePressable from '../DoublePressable';

import styles from './styles'; 
import { IPost } from '../../types/model';
import Carousel from '../carousel';
import VideoPlayer from  '../VideoPlayer/VideoPlayer';
import {useNavigation} from '@react-navigation/native'
import { FeedNavigationProp } from '../../types/navigation';

interface IFeedPost {
  post :IPost;
  isVisible? : boolean;
  }

const FeedPost = (props : IFeedPost) => {
const  {post, isVisible = false} =props;
   
    const [isDescriptionExpanded,setIsDescriptionExpanded] = useState(false);
    const[isLiked,setIsLiked] =useState(true);

    const navigation = useNavigation<FeedNavigationProp>();

    const navigateToUser = ( ) => {
      navigation.navigate('UserProfile', {userId : post.user.id}) ;
    };


    const navigateToComments =() => {
        navigation.navigate('Comments', {postId : post.id});
    };

    const toggleDescriptionExpanded = () =>  {
    setIsDescriptionExpanded(existingValue => !existingValue);
    };

    const toggleLike = () => {
    setIsLiked(v => !v);
    };

    let content 
    if (post.image) {
      content = (
        <DoublePressable 
        onDoublePress={ toggleLike}>
        <Image
        source ={{
          uri :post.image,
        }}
           style={styles.image}
           />
        </DoublePressable>
      );
    }else if (post.images){
      content = <Carousel images ={post.images} onDoublePress = {toggleLike}/>;

    }else if (post.video){
      content =( 
        <DoublePressable onDoublePress={toggleLike}>
        <VideoPlayer uri ={post.video} paused = {!isVisible}/>
      </DoublePressable>
      );
    }

    return(
        <View style ={styles.post}>
            
            {/* header */}
            <View style={styles.header}>
            <Image 
            source={{
            uri : post.user.image,
            }}
            style={styles.userAvatar }
            />

            <Text  onPress={navigateToUser} style ={styles.userName}>{ post.user.username}</Text>

            <Entypo
             name='dots-three-horizontal' 
             size={16}
             style={styles.threeDot}
             />
            </View>

            {/* content */}
           {content}
            {/* footer */}
            <View style = {styles.footer}>
            <View style={styles.iconContainer}>
              <Pressable  onPress={toggleLike} >
  <AntDesign
    name={ isLiked? 'heart'  : 'hearto' }
    size={24}
    style={styles.icon}
    color={isLiked? colors.accent : colors.black}
  />
  </Pressable>
  <Ionicons
    name="chatbubble-outline"
    size={24}
    style={styles.icon}
    color={colors.black}
  />
  <Feather
    name="send"
    size={24}
    style={styles.icon}
    color={colors.black}
  />
  <Feather
    name="bookmark"
    size={24}
    style={{marginLeft: 'auto'}}
    color={colors.black}
  />
</View>


{/* likes */}

<Text style ={styles.text}>
    Liked by{' '}
    <Text style = {styles.bold}>RAKESH MASTER </Text> and {' '}
    <Text style = { styles.bold}> {post.nofLikes}others </Text>

    </Text >


    {/* POSTDESCRIPTION */}

    <Text style ={styles.text} numberOfLines={isDescriptionExpanded ? 0 :3}>
        <Text style = {styles.bold}> {post.user.username}</Text>{''}
{post.description}    </Text>
<Text  style={{color:'black'}} onPress={toggleDescriptionExpanded}>{isDescriptionExpanded?'less' :'more' }</Text>


{/* comments */}

    <Text   style={{color:'black'}}  onPress={navigateToComments} >View all {post.nofComments} comments</Text>
    {post.comments.map(comment => (

      <Comment 
      key={comment.id} 
      comment={comment} />
    ))}
    {/* posted date */}

    <Text style={{color:'black'}}> {post.createdAt}</Text>
   
            </View>
            </View>
       
    );
};  
 
export  default FeedPost;