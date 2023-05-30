import React from 'react';

import {Placemark} from 'react-yandex-maps';

type propTypes = {
    geometry: Array<number>,
    properties: {
        hintContent: string,
        balloonContent: string
    },
    options?: {
        iconColor: string
    }
}

const PlaceMark: React.FC<propTypes> = ({geometry, properties, options}) => {
    return <Placemark geometry={geometry}
                      properties={properties}
                      options={{preset: "islands#dotIcon", ...options}}
                      modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
}

export default PlaceMark
