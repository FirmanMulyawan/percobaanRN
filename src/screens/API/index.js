import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

const Index = () => {
  const [subjects, setSubject] = useState([]);
  const [language, setstateId] = useState(15);
  React.useEffect(() => {
    fetch('http://cms.islamicmindplus.com/api/subjects')
      .then((response) => response.json())
      .then((res) => {
        setSubject(res.result);
      });
  }, []);

  const renderItem = ({item}) => {
    const id = item.title.findIndex((e) => e.id === language);
    return (
      <TouchableOpacity style={styles.item}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Image
            source={{
              uri: `https://cms.islamicmindplus.com/${item.img_filename}`,
            }}
            style={styles.foto}
          />
          <View>
            <Text style={styles.title}>{item.img_filename}</Text>
            <Text style={styles.title}>{item.title[id].nama}</Text>
            <Text style={styles.title}>{item.title[id].pivot.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Cihuyy</Text>
      <FlatList
        data={subjects}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  foto: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
  },
});
export default Index;
