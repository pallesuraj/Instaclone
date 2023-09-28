import {View,Text,FlatList} from 'react-native';
import comments from '../../assests/data/comments.json';
import Comment from '../../components/comment';
import Input from './input';

const CommentsScreen = () => {
    return (
        <View style = {{flex:1}}>
            <FlatList
                data ={comments}
                renderItem ={({item}) => <Comment comment ={item} includeDetails/>}
                style ={{padding:10}}
            />
            <Input/>
        </View>
    );
};
export default CommentsScreen;