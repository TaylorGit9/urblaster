import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native';
//import Coverflow from 'react-coverflow';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';



export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }
  
  static navigationOptions = {
    header: null,
  };

 

  myPlaylistHeight=0;
  myPlaylistTouchCount=1;

  _onPressMyPlaylist(){
    //alert('Display MyPlaylist '+1);

    if (this.myPlaylistTouchCount==1){
      this.myPlaylistHeight=100;
      this.myPlaylistTouchCount=0;
      //alert(0);
    }else {
      this.myPlaylistHeight=200;
      this.myPlaylistTouchCount=1;
      //alert(1);
    }
    return this.myPlaylistHeight;
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.TopBarStyle}>
          <Text style={styles.TopBarText}>
            {/*"\n"*/}
            Pseudo

          </Text>

        </View>
        
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          
          
          
          <View style={[styles.rubrique,styles.rubriqueProfil, {height:100}]}>

            {/*} 
            <Text style={[styles.textRubrique, {position:'absolute', right:10,}]}>
              Pseudo
            </Text>
            */}

            <Image
              style={styles.profilePic}
              source={require('../assets/images/profilePic1.jpg')}
              //source={require('../assets/images/icon.png')}
            />

            <View style={[styles.instruments,{position:'absolute', right:10,}]}>
              <Text>
                Plays on : {' '}{' '}
              </Text>
              <Image
                style={styles.instrumentsLogo}
                source={require('../assets/images/instruments/piano.png')}
              />
              <Text>{' '}{' '}{' '}{' '}</Text>
              <Image
                style={styles.instrumentsLogo}
                source={require('../assets/images/instruments/electricGuitar.png')}
              />
              <Text>{' '}{' '}</Text>
            </View>

            <View style={styles.settings}>
              <Text>
                Edit {' '}
              </Text>
              <Image
                  style={styles.settingsLogo}
                  source={require('../assets/images/settingsBlack.png')}
                />
            </View>
            

          </View>
          
          <TouchableOpacity
            onPress={()=> this.setState({pressStatus: !this.state.pressStatus})}
          >
            <View style={[styles.rubrique,this.state.pressStatus && styles.rubriqueAlt]}>
              <Text style={styles.textRubrique}>
                Div 2
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressMyPlaylist}>
            <View style={[styles.rubrique, {height:this._onPressMyPlaylist()}]}>
              <Text style={styles.textRubrique}>
                Ma playlist
              </Text>
              {/*}
              <Coverflow width="960" height="500"
                displayQuantityOfSide={2}
                navigation={false}
                enableScroll={true}
                clickable={true}
                active={0}
              >
                <div
                  onClick={() => fn()}
                  onKeyDown={() => fn()}
                  role="menuitem"
                  tabIndex="0"
                >
                  <img
                    src='image/path'
                    alt='title or description'
                    style={{
                      display: 'block',
                      width: '100%',
                    }}
                  />
                </div>
                <img src='image/path' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
                <img src='image/path' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
              </Coverflow>
              */}
            </View>
          </TouchableOpacity>
          
        </ScrollView>
        

        {/*}
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>

      */}

      
      
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
    alignItems: 'center',
  },
  rubriqueAlt:{
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    height:200,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  rubrique2a:{
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    height:200,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  rubrique2b:{
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    height:100,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  textRubrique:{
    textAlign:'center',
  },
  /*rubriqueProfile:{
    height:260,
  },*/
  TopBarStyle: {
    height:65,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  TopBarText: {
    lineHeight: 24,
    fontSize: 19,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
    bottom:-20,
  },
  profilePic:{
    position:'absolute',
    width:90,
    height:90,
    top:10,
    left:10,
  },
  instruments:{
    borderWidth:0,
    borderRadius:3,
    flexDirection:'row',
  },
  instrumentsLogo:{
    position:'relative',
    width:30,
    height:30,
    //top:10,
    //left:10,
    borderWidth:0,
  },
  settings:{
    flexDirection:'row',
    borderWidth:0,
    borderRadius:3,
    position:'absolute',
    bottom:5,
    right:5,
  },
  settingsLogo:{
    position:'relative',
    width:12,
    height:12,
    borderWidth:0,
    top:2,
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
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
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
