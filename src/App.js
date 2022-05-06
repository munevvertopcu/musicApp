import React, {useState} from 'react';
import { View, FlatList, Text, StyleSheet} from 'react-native';
import music_data from './music_data.json';
import MusicCard from './components/MusicCard';
import SearchBar from './components/SearchBar';

function App() {
  const [list, setList] = useState(music_data);
  const renderitem = ({item}) => <MusicCard music={item} />
  const renderSeperator = () => <View style={styles.seperator}/>

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1
    });
     setList(filteredList);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch}/>
      <FlatList
      keyExtractor={item => item.id}
      data={list}
      renderItem={renderitem}
      ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container:{
      flex:1
    },
    seperator:{
      borderWidth: 1,
      borderColor: '#e0e0e0'
    }
  }
)

export default App;