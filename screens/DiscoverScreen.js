import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  //Searchbar,
} from 'react-native';

import MapView from 'react-native-maps';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _onPressEvents(){
    alert('Page évènements');
  }

  _onPressGenre(){
    alert('Page Genres');
  }

  _onPressMap(){
    alert('Agrandir la map');
  }

  _onPressAroundMe(){
    alert('Recherche bluetooth');
  }

  render() {
    return (
      <View style={styles.container}>

        {/*
        <Searchbar
          cancelLink="Cancel"
          placeholder="Search in items"
          clearButton={true}
        />
        */}

        <View style={styles.TopBarStyle}>
          <Text style={styles.TopBarText}>
            {/*"\n"*/}
            Discover

          </Text>

        </View>

        

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <TouchableOpacity onPress={this._onPressAroundMe}>
            <View style={styles.rubrique}>
              
              <Text style={styles.textRubrique}>
                Around me
              </Text>
            </View>
          </TouchableOpacity>

          {/* /// ///  MAP  /// /// */}
          <TouchableOpacity onPress={this._onPressMap}>
            <View style={styles.rubrique}>
            
              {/*}
              <Text style={styles.textRubrique}>
                The Map should appear below
              </Text>
              */}
              <MapView

                style={styles.map}

                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              />

              
              
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressGenre}>
            <View style={styles.rubrique}>
              <Text style={styles.textRubrique}>
                By genre
              </Text>
            </View>
          </TouchableOpacity>
            
          

          <TouchableOpacity onPress={this._onPressEvents}>
            <View style={styles.rubrique}>
              <Text style={styles.textRubrique}>
                Évènements
              </Text>
              
            </View>
          </TouchableOpacity>
          
          
        </ScrollView>
        

        
      
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rubrique:{
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    height:100,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textRubrique:{
    textAlign: 'center',
  },
  TopBarStyle: {
    /*flex:1,
    flexDirection:'column',*/
    height:65,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    //alignItems: 'flex-end',
    /*justifyContent: 'space-between', 
    flex:1,*/
  },
  TopBarText: {
    lineHeight: 24,
    fontSize: 19,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
    bottom:-20,
  },
  map:{
    ...StyleSheet.absoluteFillObject,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
