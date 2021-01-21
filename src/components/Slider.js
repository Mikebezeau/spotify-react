import React from 'react'
import Card from 'react-bootstrap/Card';
import { Slider } from '../utility/SliderBase';

const GenreSlider = props => {
    return (
        <div className="parent">
         <Slider id="genreSlider">
            {
                props.genres.listOfGenresFromAPI.map((item,index) => 
                    {
                        return (
                            <Card key={index} className="genreCard gradient" onClick={() => props.click(item.id) } >
                                <Card.Img variant="top" src={item.icons[0].url} />
                                <Card.Body>
                                    <Card.Text>{item.name}</Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    }
                )
            }
         </Slider>
        </div>
  );
}

export { GenreSlider };

const PlaylistSlider = props => {
    console.log('PlaylistSlider');
    if(document.getElementById('playlistSlider')){
        console.log('scrollLeft');
        document.getElementById('playlistSlider').scrollLeft = 0;
    }
    return (
        <div className="parent">
         <Slider id="playlistSlider">
            {
                props.playlists.listOfPlaylistsFromAPI.map((item,index) => 
                    {
                        return (
                            <Card key={index} className="playlistCard gradient" onClick={() => props.click(item.id) } >
                                <Card.Img variant="top" src={item.images[0].url} />
                            </Card>
                        );
                    }
                )
            }
         </Slider>
        </div>
  );
}

export { PlaylistSlider };

/*
        
    //return (
        <div className="parent">
         <Slider>
            {
                props.genres.listOfGenresFromAPI.map((item,index) => 
                    {
                        return (
                            <Card key={index} className="gradient" onClick={() => props.click(item.id) } >
                                <Card.Img variant="top" src={item.icons[0].url} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text></Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    }
                )
            }
         </Slider>
        </div>
        */

    /*
    //return (
    <div className="genreSlider">
        {
            props.genres.listOfGenresFromAPI.map(
                (item,index) => 
                <Card className="gradient" onClick={() => props.click(item.id) } >
                    <Card.Img variant="top" src={item.icons[0].url} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
            )
        }
    </div>
    */

    
    /*
    let data = [
        "Apple",
        "Ball",
        "Cat",
        "Dog",
        "Elephant",
        "Fruits",
        "Gorilla",
        "Horse",
        "Ink",
        "Jug",
        "Kite",
        "Lemon",
        "Orange",
        "Paddy",
        "Queen",
        "Rose",
        "Street",
        "Tuesday",
        "Umbrella",
        "Vanilla",
        "Wax",
        "Xerox",
        "Yarn",
        "Zebra"
       ];
    //return (
      <div className="parent">
       <Slider>
        {data.map(value => {
         return (
          <div key={value} className="child">
           {value}
          </div>
         );
        })}
       </Slider>
      </div>
      */
