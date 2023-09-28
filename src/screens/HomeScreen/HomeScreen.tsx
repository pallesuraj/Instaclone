
import { FlatList } from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assests/data/posts.json';
import { useRef,useState } from 'react';
import {ViewabilityConfig,ViewToken,View} from 'react-native';

const HomeScreen = () => {
 const [activePostId, setActivePostId] = useState<null | string>(null);
  

    const viewabilityConfig: ViewabilityConfig = {
        itemVisiblePercentThreshold: 51,
      };
    
      const onViewableItemsChanged = useRef(
        ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
          if (viewableItems.length > 0) {
            setActivePostId(viewableItems[0].item.id);
          }
        },
      );
   
      return(
        <View>
     <FlatList
     data={posts}
     renderItem={({item}) =>( 
     <FeedPost   isVisible = {item.id===activePostId }  post= {item} />
     )}
     showsVerticalScrollIndicator = {false}
     viewabilityConfig={viewabilityConfig}
     onViewableItemsChanged={onViewableItemsChanged.current}
     /> 
    </View>
    );
};
 
export  default HomeScreen;