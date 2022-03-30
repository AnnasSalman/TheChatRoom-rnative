import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Video from 'react-native-video';
import Animated, {FadeIn, FadeOut, Layout} from 'react-native-reanimated';

const Landing = props => {
  const [name, setName] = useState('');
  const onChangeName = text => {
    setName(text);
  };

  return (
    <Animated.View style={styles.container} layout={Layout.springify()}>
      <Video
        source={require('../../assets/videos/galaxy.mp4')} // Can be a URL or a local file.
        style={styles.backgroundVideo}
        repeat={true}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.logo}>C|R</Text>
        <Text style={styles.titleSmall}>Welcome to</Text>
        <Text style={styles.title}>The Chat Room</Text>
        <Text style={styles.inputMessage}>
          Please enter your name to get started
        </Text>
      </View>
      <TextInput
        selectionColor={'yellow'}
        style={styles.textInput}
        placeholder="Enter your name"
        onChangeText={onChangeName}
      />
      {name.length > 0 && (
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <Button
            color={'#712B75'}
            title="Let's go"
            style={styles.submitButton}
          />
        </Animated.View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  logo: {
    fontFamily: 'PaletteMosaic-Regular',
    color: '#712B75',
    fontSize: 40,
  },
  title: {
    color: '#EAEA7F',
    //fontWeight: 'bold',
    fontSize: 38,
    fontFamily: 'Righteous-Regular',
  },
  titleSmall: {
    color: '#EAEA7F',
    fontFamily: 'Righteous-Regular',
  },
  inputMessage: {
    color: 'white',
    fontFamily: 'Righteous-Regular',
    marginTop: 10,
  },
  textInput: {
    color: 'white',
    fontSize: 20,
    borderColor: 'white',
    borderRadius: 14,
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 15,
  },
});

export default Landing;
