import React from 'react';

const Listbox = props => {

    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
        props.setModalShow(true);
    }    

    console.log(props.items[0]);
    return (
        
            <div>
                {
                    props.items.map((item, idx) => 
                    <span key={idx}
                        onClick={clicked}
                        className="trackInfo gradient list-group-item list-group-item-action list-group-item-light"
                        id={item.track.id}>
                            {item.track.artists[0].name}: {item.track.name}
                    </span>)
                }
            </div>
            
        

    );
}

export default Listbox;