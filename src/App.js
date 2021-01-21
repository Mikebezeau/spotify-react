import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Credentials } from './spotify/Credentials';
import Nav from './components/Nav';
import Main from './components/Main';
import MusicControls from './components/MusicControls';

import './sass/GradientTransform.scss';

function App() {
  
    const spotify = Credentials();
    const [token, setToken] = useState('');
    const [genres, setGenres] = useState({selectedGenre:'', listOfGenresFromAPI: []});
    const [playlists, setPlaylists] = useState({selectedPlaylist:'', listOfPlaylistsFromAPI: []});
    const [tracks, setTracks] = useState({selectedTrack:'', listOfTracksFromAPI: []});
    const [trackDetail, setTrackDetail] = useState(null);
    
    useEffect(() => {

      axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })
      .then(tokenResponse => {      
        setToken(tokenResponse.data.access_token);
  
        axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
        })
        .then (genreResponse => {  
          console.log('genreResponse');
          setGenres({
            selectedGenre: genres.selectedGenre,
            listOfGenresFromAPI: genreResponse.data.categories.items
          })
        });
        
      });
  
    //}, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);
    }, [spotify.ClientId, spotify.ClientSecret]);
  
    const genreChanged = val => {
      console.log('genreChanged');
      setGenres({
        selectedGenre: val,
        listOfGenresFromAPI: genres.listOfGenresFromAPI
      });
      
      axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
      })
      .then (playlistResponse => {  
        //console.log(playlistResponse.data.playlists.items);
        setPlaylists({
          selectedPlaylist: playlists.selectedPlaylist,
          listOfPlaylistsFromAPI: playlistResponse.data.playlists.items
        })

      });
    }

    const playlistChanged = val => {
      console.log('setPlaylists');
      setPlaylists({
        selectedPlaylists: val,
        listOfPlaylistsFromAPI: playlists.listOfPlaylistsFromAPI
      });
      axios(`https://api.spotify.com/v1/playlists/${val}/tracks?limit=10`, {
        method: 'GET',
        headers: {
          'Authorization' : 'Bearer ' + token
        }
      })
      .then(tracksResponse => {
        console.log('setTracks');
        setTracks({
          selectedTrack: tracks.selectedTrack,
          listOfTracksFromAPI: tracksResponse.data.items
        })
      });
    }

    const listboxClicked = val => {
      const currentTracks = [...tracks.listOfTracksFromAPI];
      const trackInfo = currentTracks.filter(t => t.track.id === val);
      setTrackDetail(trackInfo[0].track);
    }

  return (
    <div className="outerWrap">
      <div className="App">
        <Nav/>
        <Main genres={genres} playlists={playlists} genreChanged={genreChanged} playlistChanged={playlistChanged}/>
      </div>
      <MusicControls tracks={tracks} trackDetail={trackDetail} clicked={listboxClicked}/>
    </div>
  );
}

export default App;
