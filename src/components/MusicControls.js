import React from 'react'
import Listbox from './Listbox'
import DetailModal from './DetailModal'
import '../sass/MusicControls.scss';

function MusicControls(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div id="musicControls" className="musicControls">
        <h1>Tracks</h1>
        <Listbox items={props.tracks.listOfTracksFromAPI} setModalShow={setModalShow} clicked={props.clicked} />
            {/*props.trackDetail && <Detail {...props.trackDetail} /> */}
        <DetailModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          trackDetail={props.trackDetail}
        />
    </div>
  );
}

export default MusicControls;
