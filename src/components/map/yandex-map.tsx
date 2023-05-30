import React from 'react';
import {Clusterer, Map, YMaps, ZoomControl} from 'react-yandex-maps';

import yandexMapCss from "./yandex-mapCss.module.css"
import PlaceMark from './placemark/yandex-map-placemark';

type pointsType = {
    coordinates: Array<number>,
    options: { iconColor: string },
    properties: { hintContent: string, balloonContent: string },
}

type propTypes = {
    initialState: {
        center: Array<number>,
        zoom: number,
    },
    points: Array<pointsType>
}

const YandexMap: React.FC<propTypes> = ({initialState, points}) => {
    return <YMaps>
        <Map className={yandexMapCss.map} width={"100%"}
             defaultState={initialState}>
            <ZoomControl options={{float: 'right'}}/>
            <Clusterer
                options={{
                    preset: 'islands#invertedVioletClusterIcons',
                    groupByCoordinates: false,
                }}
            >
                {points.map((info, index) => (
                    <PlaceMark key={index} geometry={info.coordinates} options={info.options}
                               properties={info.properties}/>
                ))}
            </Clusterer>
        </Map>
    </YMaps>
}

export default YandexMap
