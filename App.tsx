import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Nunito_400Regular, Nunito_800ExtraBold, Nunito_600SemiBold_Italic } from '@expo-google-fonts/nunito';
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
import SearchResults from './screens/SearchResults';
import TrendingNews from './screens/TrendingNews';
import CustomToast from './components/CustomToast';
import MenuBar from './components/MenuBar';
import Favourites from './screens/Favourites';


export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_400Regular, Newsreader_400Regular, Newsreader_700Bold, Nunito_800ExtraBold, Nunito_600SemiBold_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <>
    <NavigationContainer>
      <StatusBar style="auto" />
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
        <Stack.Screen name={routes.TrendingNews} component={TrendingNews} options={{
          headerShown: false
        }} />
         <Stack.Screen name={routes.Favourites} component={Favourites} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
      <MenuBar/>
    </NavigationContainer>
    <CustomToast/>
    
    </>
  );
}

const styles = StyleSheet.create({

});
