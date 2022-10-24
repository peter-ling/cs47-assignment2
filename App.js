import AppLoading from 'expo-app-loading';
import { StyleSheet,Image, Text, SafeAreaView, View, StatusBar, Button } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import NavBar from './app/components/NavBar';
import Middle from './app/components/Middle'
import Footer from './app/components/Footer'
// import NavBar from './app/components/NavBar.js'
export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  const onPressTopLeft = () => {
    console.log("Pressed Top Left")

  }

  const onPressTopRight = () => {
    console.log("Pressed Top Right")
  }
  /* insert your code here */
  

  return (
    <>
    <SafeAreaView style={styles.container}>
      <NavBar></NavBar>
      <Middle></Middle>
      <Footer></Footer>
      
      
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  
});
