
import React from 'react';
import './obrazy.css';
const Obrazy = () => {
    const images = [
        {
            nr: 1,
            image: 'galeria.png',
            name: ',,bracia todys na polanie"',
            description: 'piekny obraz ukazujacy braci todys',
            price: 999,
        },
        {
            nr: 2,
            image: 'galeria2.png',
            name: 'Obraz 2',
            description: 'Opis obrazu 2',
            price: 200,
        },
        {
            nr: 3,
            image: 'galeria3.png',
            name: 'Obraz 3',
            description: 'Opis obrazu 3',
            price: 300,
        },
        {
            nr: 4,
            image: 'galeria4.png',
            name: 'Obraz 4',
            description: 'Opis obrazu 4',
            price: 400,
        },
        {
            nr: 4,
            image: 'galeria5.png',
            name: 'Obraz 4',
            description: 'Opis obrazu 4',
            price: 400,
        },
        {
            nr: 4,
            image: 'galeria6.png',
            name: 'Obraz 4',
            description: 'Opis obrazu 4',
            price: 400,
        },
        {
            nr: 4,
            image: 'galeria7.png',
            name: 'Obraz 4',
            description: 'Opis obrazu 4',
            price: 400,
        },
        {
            nr: 4,
            image: 'galeria8.png',
            name: 'Obraz 4',
            description: 'Opis obrazu 4',
            price: 400,
        },
    ];

    return (
        <div className="gallery">
            {images.map(image => (
                <div key={image.nr} className="card">
                    <img src={image.image} alt={image.name} className="image" />
                    <h3>{image.name}</h3>
                    <p>{image.description}</p>
                    <p><strong>Cena: {image.price} PLN</strong></p>
                </div>
            ))}
        </div>
    );
};

export default Obrazy;