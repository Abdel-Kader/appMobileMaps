import React, {useEffect, useState} from 'react';
import {Appbar, Button} from 'react-native-paper';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import {InputField} from '../components/forms/input';
import ImagePicker from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-datepicker';

export default function Home(props) {
  const [media, setMedia] = useState(null);
  const [numero, setNumero] = useState(null);
  const [nom, setNom] = useState(null);
  const [type, setType] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [date, setDate] = useState(new Date());

  // useEffect(() => {}, []);
  function photo() {
    const options = {
      title: 'Ajouter une photo',
      takePhotoButtonTitle: 'Prendre une photo',
      chooseFromLibraryButtonTitle: 'Choisir depuis la galerie',
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
        path: 'App/Media',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        setMedia(source);
        // setData1(response.data);
        // setAvatar1Name(response.fileName);
        // this.setState({
        //     media_1: source,
        //     data1: response.data,
        //     avatar1Name: response.fileName
        // });
      }
    });
  }

  function submit() {
    if (numero && nom && type && date && lat && lng && media) {
      alert('Information enregistrées avec succès !');
      setDate(new Date());
      setNumero(null);
      setNom(null);
      setType(null);
      setLat(null);
      setLng(null);
      setMedia(null);
    } else alert('Veuillez remplir tous les champs');
  }
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#2271b1'}
        translucent={false}
      />
      <Appbar.Header style={{backgroundColor: 'royalblue'}}>
        <Appbar.Content title="Formulaire d'ajout" />
      </Appbar.Header>
      <ScrollView>
        <View
          style={{
            paddingTop: 25,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 50,
          }}>
          <InputField
            labelText="Numéro de projet *"
            inputType="phone-pad"
            labelTextSize={16}
            labelColor={'black'}
            textColor={'#000'}
            borderColor={'#ccc'}
            customStyle={{marginBottom: 30}}
            onChangeText={text => setNumero(text)}
            value={numero}
          />
          <InputField
            labelText="Nom du projet *"
            inputType="text"
            labelTextSize={16}
            labelColor={'black'}
            textColor={'#000'}
            borderColor={'#ccc'}
            customStyle={{marginBottom: 30}}
            onChangeText={text => setNom(text)}
            value={nom}
          />
          <InputField
            labelText="Type de projet *"
            inputType="text"
            labelTextSize={16}
            labelColor={'black'}
            textColor={'#000'}
            borderColor={'#ccc'}
            customStyle={{marginBottom: 30}}
            onChangeText={text => setType(text)}
            value={type}
          />

          <Text style={{fontWeight: 'bold', marginBottom: 15, fontSize: 16}}>
            Date d'exécution *
          </Text>
          <DatePicker
            style={{width: 370, marginBottom: 30}}
            date={date} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate={date}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
                width: 200,
              },
            }}
            onDateChange={date => {
              setDate(date);
            }}
          />

          <InputField
            labelText="Longitude *"
            inputType="text"
            labelTextSize={16}
            labelColor={'black'}
            textColor={'#000'}
            borderColor={'#ccc'}
            customStyle={{marginBottom: 30}}
            onChangeText={text => setLng(text)}
            value={lng}
          />
          <InputField
            labelText="Latitude *"
            inputType="text"
            labelTextSize={16}
            labelColor={'black'}
            textColor={'#000'}
            borderColor={'#ccc'}
            customStyle={{marginBottom: 30}}
            onChangeText={text => setLat(text)}
            value={lat}
          />
          <View
            style={{
              borderColor: 'royalblue',
              borderWidth: 1,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              marginTop: 20,
              marginBottom: 30,
              marginRight: 15,
              width: '100%',
              height: 100,
            }}>
            <TouchableHighlight
              style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={photo}>
              {media == null ? (
                <Text
                  style={{
                    color: 'royalblue',
                    textAlign: 'center',
                    fontSize: 20,
                  }}>
                  Ajouter une photo
                </Text>
              ) : (
                <Image style={{height: 150, width: '100%'}} source={media} />
              )}
            </TouchableHighlight>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end', marginBottom: 30}}>
            <TouchableHighlight
              onPress={submit}
              style={{
                backgroundColor: 'royalblue',
                flex: 1,
                borderRadius: 5,
                justifyContent: 'center',
                padding: 15,
              }}>
              <Text style={{fontSize: 20, color: '#fff'}}>Enregistrer</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
