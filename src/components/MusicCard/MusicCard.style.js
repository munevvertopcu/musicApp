import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    inner_container: {
        padding:10,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontWeight:'bold',
        fontSize: 25,
        color: 'black'
    },
    info_container: {
        flexDirection:'row',
        flex:1,
        alignItems: 'center'
    },
    artist:{
        color: 'black'
    },
    year: {
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 12
    },
    isSoldout:{
        borderWidth:1,
        borderColor:'red',
        padding: 4,
        borderRadius:5,
        
    },
    soldOutTitle:{
        fontSize: 11,
        color: 'red'
    },
    content_container:{
        flexDirection: 'row'
    }
});