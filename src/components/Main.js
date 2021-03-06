import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { GenreSlider, PlaylistSlider } from './Slider';

import '../sass/AppMain.scss';
import '../sass/Slider.scss';
import '../sass/Card.scss';

const Main = props => {

    const genreCardClicked = val => {
        //console.log(val);
        props.genreChanged(val);
    }

    const playlistCardClicked = val => {
        //console.log(val);
        props.playlistChanged(val);
    }

    //render genre slider once data fetched
    //still calling at start while props.genres.listOfGenresFromAPI.length == 0
    useEffect(() => {
        console.log('make slider')
        //if(props.genres.listOfGenresFromAPI.length){
            //prev and next buttons always enabled now so that wont matter if refreshed, will still be able to scroll
            ReactDOM.render(<GenreSlider genres={props.genres} click={genreCardClicked} />, document.getElementById("genreSliderContainer"));
        //}
      }, [props.genres.listOfGenresFromAPI]);
  
      useEffect(() => {
        ReactDOM.render(<PlaylistSlider playlists={props.playlists} click={playlistCardClicked} />, document.getElementById("playlistSliderContainer"));
        if(props.playlists.listOfPlaylistsFromAPI.length){
            document.getElementById("playlistContainer").style.display = 'block';
        }
      }, [props.playlists.listOfPlaylistsFromAPI]);
  
    return (
    <div className="main">
        <div className="upper">
        </div>

        <div className="mainContent">
            <h1>Genres</h1>
            <div id="genreSliderContainer">
            </div>
            <div id="playlistContainer">
                <h1>Playlists</h1>
                <div id="playlistSliderContainer">
                </div>
            </div>
        </div>
    </div>
  );
}

export default Main;
