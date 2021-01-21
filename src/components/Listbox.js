import React from 'react';

const Listbox = props => {

    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
        props.setModalShow(true);
    }    

    console.log(props.items[0]);
    return (
        <div className="col-sm-6 px-0">
            <div className="list-group">
                {
                    props.items.map((item, idx) => 
                    <div key={idx}
                        onClick={clicked}
                        className="trackInfo gradient list-group-item list-group-item-action list-group-item-light"
                        id={item.track.id}>
                            {item.track.name}
                    </div>)
                }
            </div>
        </div>
        

    );
}

export default Listbox;