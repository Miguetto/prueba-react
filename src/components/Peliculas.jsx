import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPeliculas } from '../store/slices';

export const Peliculas = () => {

    const dispatch = useDispatch();
    const peliculas = useSelector((state) => state.peliculas.entries);
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(loading)

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleClosePopup = () => {
        setSelectedItem(null);
    };

    useEffect(() => {
        fetch('src/data/sample.json')
            .then((response) => response.json())
            .then((data) => { dispatch(setPeliculas(data)) })
            .catch((error) => {
                console.log('Error en la ptción', error);
            });
    }, []);


    return (
        <article className="card-container">
            {peliculas.map(pelicula => (
                <section key={pelicula.title} className="card-content" onClick={() => handleItemClick(pelicula)}>
                    <img src={pelicula.images['Poster Art'].url} alt={`${pelicula.title}`} />
                    <p className="card-title">{pelicula.title}</p>

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