import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { article } from "../types/article";

export type RootStackParamList = {
    Home: undefined;
    Article: { article: article },
    Test: undefined,
    SearchResults: { keyword: string }
};

export type HomeScreenNavigation = StackNavigationProp<RootStackParamList, 'Home'>
export type ArticleScreenNavigation = StackNavigationProp<RootStackParamList, 'Article'>
export type SearchResultsScreenNavigation = StackNavigationProp<RootStackParamList, 'SearchResults'>
export type HomeScreenRoute = RouteProp<RootStackParamList, 'Home'>
export type ArticleScreenRoute = RouteProp<RootStackParamList, 'Article'>
export type SearchResultsScreenRoute = RouteProp<RootStackParamList, 'SearchResults'>


export type HomeScreenProps = {
    navigation: HomeScreenNavigation,
    route: HomeScreenRoute
}

export type ArticleScreenProps = {
    navigation: ArticleScreenNavigation,
    route: ArticleScreenRoute
}

export type SearchResultsScreenProps = {
    navigation: SearchResultsScreenNavigation,
    route: SearchResultsScreenRoute
}