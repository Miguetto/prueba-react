import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSeries } from '../store/slices';

export const Series = () => {

    const series = useSelector((state) => state.series.entries);
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleClosePopup = () => {
        setSelectedItem(null);
    };

    useEffect(() => {
        fetch('src/data/sample.json')
            .then((response) => response.json())
            .then((data) => { dispatch(setSeries(data)) })
            .catch((error) => {
                console.log('Error en la petición', error);
            });
    }, []);

    return (
        <article className="card-container">
            {series.map(serie => (
                <section key={serie.title} className="card-content" onClick={() => handleItemClick(serie)}>
                    <img src={serie.images['Poster Art'].url} alt={`${serie.title}`} />
                    <p className="card-title">{serie.title}</p>

                </section>
            ))}

            {selectedItem && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>{selectedItem.title}</h2>
                        <p>{selectedItem.description}</p>
                        <p>Release Year: {selectedItem.releaseYear}</p>
                        <img className="img-popup" src={selectedItem.images['Poster Art'].url} alt={selectedItem.title} />
                        <button className="btn-popup" onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </article>
    )
}