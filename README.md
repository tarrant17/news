# News Application
News is a cross platform application displaying news (obviously :))

## Functionalities
- Homepage screen :
Displays a list of trending news.
Displays a list of news filtered by category. You can choose the category and data will refresh.
- Article content screen :
Display the content of the article with some classic metadatas
- Search results screen :
A search bar is displayed on every screen. 
It allows you to search for any kind of news based on keywords and redirect you to a screen displaying results with an infinite scroll 
- Favourites search screen :
You can save your favourites searches (by clicking on the button on the right of the search bar)
The favourites search screen lists all your favourites search, you can click on any item and it will redirect you to the results.
You can delete a favourite.

## Stack
It's developped in React Native with Expo. I'm also using TypeScript.

## API
The data comes from an API (https://rapidapi.com/contextualwebsearch/api/web-search/). 

### How to connect with the api
By default all data in the app is hard coded. 
Steps to go on real data :
- Get an API_KEY from https://rapidapi.com/contextualwebsearch/api/web-search/
- Create a .env file at the root of the project
- Add a key value pair in the file like this : "API_KEY=**PASTE_YOUR_KEY_HERE**"
- Add a key value pair : MODE_REAL_DATA_FROM_API=true

# Disclaimer
It is still in development and it has only a purpose of training and adding stuff to my portfolio.
