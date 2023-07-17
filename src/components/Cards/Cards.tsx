import React, { useState, useEffect } from 'react';

import CardItem from "../CardItem/CardItem";

import './Cards.css';

interface ICard {
    id: number;
    src: string;
    text: string;
    label: string;
    path: string;
}

const Cards = () => {
    const [data, setData] = useState<ICard[]>([]);
    const [data1, setData1] = useState([]);

    useEffect(() => {
        const fetchDataWith2Images = async () => {
            try {
                const result = await fetch('http://localhost:3001/cardsWith2Images');
                const response = await result.json();
                setData(response);
            } catch (error) {
                console.log(error);
            }
        }
        const fetchDataWith3Images = async () => {
            try {
                const result = await fetch('http://localhost:3001/cardsWith3Images');
                const response = await result.json();
                setData1(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDataWith2Images();
        fetchDataWith3Images();
    }, []);
    
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {data.map((item: ICard) => (
                            <CardItem
                                src={item.src}
                                text={item.text}
                                label={item.label}
                                path={item.path}
                                key={item.id} />
                        ))}
                    </ul>
                    <ul className='cards__items'>
                        {data1.map((item: ICard) => (
                            <CardItem
                                src={item.src}
                                text={item.text}
                                label={item.label}
                                path={item.path}
                                key={item.id} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;