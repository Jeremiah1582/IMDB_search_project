import React from 'react'
//* Children Components */
// import Header from "./components/Movies";
import Movies from "./components/Movie"
// import Search from "./context/Search";
import MovieList from "./context/MovieList"

//* Navigaton Components */
import NavBar from "./Navigation/NavBar";
import MyProvider from './context/MovieContext';
// import MovieList from './components/MovieList';

function App() {
   

    return (
        <MyProvider>
        <div>
            <NavBar />
            <MovieList />
            <Movies />
        </div>
        </MyProvider>
    )
}

export default App
