import React from 'react';

function ArtistNameSelect(props) {

    const onArtistSelect = (e) => {
        let urlName = e.target.id;
        let url = `http://localhost:3000/${urlName}`
        props.getInitialData(url);
        props.setFormList('urlName', urlName, true)
    }

    return (
        <div id='artistName' className='artist_name input_group checkbox_cont'>
            <div className="form-radio-head">
                <label className="container_radio">Ozzy Ozborne
                    <input
                        type="radio"
                        value="Ozzy Ozborne"
                        id="ozzy_ozborne"
                        name="artist"
                        onChange={(e) => onArtistSelect(e)}
                        checked={props.itemState.indexOf('ozzy_ozborne') !== -1}
                    />
                    <span className="checkmark_radio"></span>
                </label>
            </div>
            <div className="form-radio-head">
                <label className="container_radio">Diamond Darrell
                    <input
                        type="radio"
                        value="Diamond Darrell"
                        id="diamond_darrell"
                        name="artist"
                        onChange={(e) => onArtistSelect(e)}
                        checked={props.itemState.indexOf('diamond_darrell') !== -1}
                    />
                    <span className="checkmark_radio"></span>
                </label>
            </div>
            <div className="form-radio-head">
                <label className="container_radio">Paul Bruce Dickinson
                    <input
                        type="radio"
                        value="Paul Bruce Dickinson"
                        id="bruce_dickinson"
                        name="artist"
                        onChange={(e) => onArtistSelect(e)}
                        checked={props.itemState.indexOf('bruce_dickinson') !== -1}
                    />
                    <span className="checkmark_radio"></span>
                </label>
            </div>
            <div className="form-radio-head">
                <label className="container_radio">Pavlo Zibrov
                    <input
                        type="radio"
                        value="Pavlo Zibrov"
                        id="pavlo_zibrov"
                        name="artist"
                        onChange={(e) => onArtistSelect(e)}
                        checked={props.itemState.indexOf('pavlo_zibrov') !== -1}
                    />
                    <span className="checkmark_radio"></span>
                </label>
            </div >
        </div >
    );
}

export default ArtistNameSelect;
