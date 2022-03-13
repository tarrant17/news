import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Article } from "../types/article";

export type RootStackParamList = {
    Home: undefined,
    Article: { article: Article },
    Test: undefined,
    SearchResults: { keyword: string },
    TrendingNews: undefined
};

export type HomeScreenNavigation = StackNavigationProp<RootStackParamList, 'Home'>
export type ArticleScreenNavigation = StackNavigationProp<RootStackParamList, 'Article'>
export type SearchResultsScreenNavigation = StackNavigationProp<RootStackParamList, 'SearchResults'>
export type TrendingNewsScreenNavigation = StackNavigationProp<RootStackParamList, 'TrendingNews'>

export type HomeScreenRoute = RouteProp<RootStackParamList, 'Home'>
export type ArticleScreenRoute = RouteProp<RootStackParamList, 'Article'>
export type SearchResultsScreenRoute = RouteProp<RootStackParamList, 'SearchResults'>
export type TrendingNewsScreenRoute = RouteProp<RootStackParamList, 'TrendingNews'>

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

export type TrendingNewsScreenProps = {
    navigation: TrendingNewsScreenNavigation,
    route: TrendingNewsScreenRoute
}