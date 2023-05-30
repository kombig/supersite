import React from 'react';

import YandexMap from './yandex-map';

const YandexMapContainer = () => {

    const initialState = {
        center: [55.742068, 37.973395],
        zoom: 10,
    }

    const points = [{
        coordinates: [55.673296, 37.480067],
        options: {iconColor: "brown"},
        properties: {
            hintContent: "проспект Вернадского, 78",
            balloonContent: "проспект Вернадского, 78",
        }
    }]

    return <YandexMap initialState={initialState} points={points}/>
}

export default YandexMapContainer
