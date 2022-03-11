import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Nunito_400Regular, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { Newsreader_400Regular, Newsreader_700Bold } from '@expo-google-fonts/newsreader';
import { useFonts } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import { RootStackParamList } from './navigation/navigationType';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import Home from './screens/Home';
import Article from './screens/Article';
import { routes } from './navigation/routes';
import Test from './screens/Home/SearchBarAndBell';
import SearchResults from './screens/SearchResults';

//<Icon type="ionicon" name="arrow-forward-outline"/>
export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_400Regular, Newsreader_400Regular, Newsreader_700Bold, Nunito_800ExtraBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name={routes.Home} component={Home} options={{
          headerShown: false
        }} />
        <Stack.Screen name={routes.Article} component={Article} options={{
          headerShown: false
        }} />
        <Stack.Screen name={routes.SearchResults} component={SearchResults} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
