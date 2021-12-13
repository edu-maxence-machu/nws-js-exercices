

/*
Cet access token a été récupéré sur Github
*/
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNhbWljbyIsImEiOiJLUGZSN1RRIn0.KIM5o5IR4lBNgGCKDN6Umw';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/examples/cjgiiz9ck002j2ss5zur1vjji',
    center: [-87.661557, 41.893748],
    zoom: 10.7
});

map.on('click', (event) => {
    const features = map.queryRenderedFeatures(event.point, {
        layers: ['chicago-parks']
    });
    if (!features.length) {
        return;
    }
    const feature = features[0];

    /*
        [1-2]: Les données récupérées au clic
    */
    console.log(feature);

    /*
        [3]: La popup
    */
    /*const popup = new mapboxgl.????({ offset: [0, -15] })
    popup.set????(feature.geometry.coordinates)
    popup.set????(????)
    popup.addTo????(????);*/
});
