import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Platform,
  Text,
  StyleSheet,
  Alert,
  Image,
  TextInput,
  Modal,
  Animated,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {markers} from '../data/mapData';
import {getProjects} from '../services/project';

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export default function Maps() {
  const [mark, setMarks] = useState(markers);
  const [filtre, setFiltre] = useState(false);
  const [type, setType] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    const data = getProjects(); // ==============================>  API
    if (data != null) setMarks(data);
  }, []);

  const initialMapState = {
    mark,
    categories: [
      {name: 'Numéro du projet', type: 'num'},
      {name: 'Nom du projet', type: 'nom'},
      {name: 'Type de projet', type: 'type'},
    ],
    region: {
      latitude: 13.51366,
      longitude: 2.1098,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };
  const [state, setState] = useState(initialMapState);
  const [select, setSelect] = useState(null);
  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState(false);

  const onMarkerPress = mapEventData => {
    //alert(JSON.stringify(mapEventData));
    setSelect(mapEventData);
    setModalVisible(true);
  };
  const inputRef = React.useRef();
  function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue) return key;
    }
  }
  return (
    <View style={styles.container}>
      <MapView
        ref={_map}
        initialRegion={state.region}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.container}>
        {!filtre ? (
          state.mark.map((marker, index) => {
            return (
              <MapView.Marker
                coordinate={marker.coordinate}
                key={index}
                onPress={() => onMarkerPress(marker)}>
                <Animated.View style={[styles.markerWrap]}>
                  <Animated.Image
                    source={require('../assets/map_marker.png')}
                    style={[styles.marker]}
                    resizeMode="cover"
                  />
                </Animated.View>
              </MapView.Marker>
            );
          })
        ) : mark ? (
          <MapView.Marker
            coordinate={mark.coordinate}
            onPress={() => onMarkerPress(mark)}>
            <Animated.View style={[styles.markerWrap]}>
              <Animated.Image
                source={require('../assets/map_marker.png')}
                style={[styles.marker]}
                resizeMode="cover"
              />
            </Animated.View>
          </MapView.Marker>
        ) : (
          alert('Aucune donnée trouvée !')
        )}
      </MapView>

      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={70}
        style={styles.chipsScrollView}
        contentInset={{
          // iOS only
          top: 0,
          left: 0,
          bottom: 0,
          right: 20,
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0,
        }}>
        {state.categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.chipsItem}
            onPress={() => {
              setModal(!modal);
              setType(category.type);
              setInput(null);
            }}>
            {category.icon}
            <Text style={{color: '#fff'}}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {modal ? (
        <View
          style={{
            position: 'absolute',
            marginTop: 150,
            backgroundColor: '#fff',
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 5,
            shadowColor: '#ccc',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 10,
          }}>
          <View
            style={{
              borderColor: 'black',
              borderWidth: 1.5,
              width: '75%',
            }}>
            <TextInput
              placeholder={'Rechercher par ' + type}
              onChangeText={text => setInput(text)}
              value={input}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'royalblue',
              padding: 15,
              height: 50,
              borderRadius: 5,
            }}
            onPress={() => {
              if (type == 'num')
                setMarks(mark.find(element => element.numero == input));
              if (type == 'nom')
                setMarks(mark.find(element => element.nom == input));
              if (type == 'type')
                setMarks(mark.find(element => element.type == input));
              setFiltre(true);
              setModal(!modal);
            }}>
            <Text style={{color: '#000', fontSize: 17}}>Valider</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={styles.searchBox}>
        <TextInput
          autoCapitalize="none"
          placeholder="Recherche"
          placeholderTextColor="#000"
          styles={{flex: 1, padding: 0}}
        />
      </View>

      {modalVisible ? (
        <Animated.ScrollView
          ref={_scrollView}
          horizontal
          pagingEnabled
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + 20}
          snapToAlignment="center"
          style={styles.scrollView}
          contentInset={{
            top: 0,
            left: SPACING_FOR_CARD_INSET,
            bottom: 0,
            right: SPACING_FOR_CARD_INSET,
          }}
          contentContainerStyle={{
            paddingHorizontal:
              Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
          }}>
          <View style={styles.card}>
            <Image
              source={select.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>
                Numéro du projet : {select.numero}
              </Text>
              <Text numberOfLines={1} style={styles.cardtitle}>
                Nom du projet :{select.nom}
              </Text>
              <Text numberOfLines={1} style={styles.cardtitle}>
                Type de projet : {select.type}
              </Text>

              <Text numberOfLines={1} style={styles.cardDescription}>
                Date d'exécution : {select.dateExec}
              </Text>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                  }}
                  style={[
                    styles.signIn,
                    {
                      borderColor: '#FF6347',
                      borderWidth: 1,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: '#FF6347',
                      },
                    ]}>
                    Fermer
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Animated.ScrollView>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 5,
    paddingLeft: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 95,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: 'royalblue',
    borderRadius: 15,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    width: '100%',
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 1,
    justifyContent: 'flex-end',
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 2,
    padding: 20,
    marginBottom: 30,
    width: '100%',
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
