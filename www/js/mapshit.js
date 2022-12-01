        
               
               
               let start = {
                center: [80, 36],
                zoom: 1,
                pitch: 0,
                bearing: 0
                };
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             mapboxgl.accessToken = 'pk.eyJ1IjoieW91c2VmeGsiLCJhIjoiY2w0azFxYWJvMGNiaDNqbzlidmgyb2x0bCJ9.4BxmHksXSyKr-1ar7UJZ9Q';

             const geojson = {
                'type': 'FeatureCollection',
                'features': [
                {
                'type': 'Feature',
                'properties': {
                'message': 'Foo',
                'iconSize': [40, 40]
                },
                'geometry': {
                'type': 'Point',
                'coordinates': [12.1, 55.614516]
                }
                },
                {
                'type': 'Feature',
                'properties': {
                'message': 'Bar',
                'iconSize': [40, 40]
                },
                'geometry': {
                'type': 'Point',
                'coordinates': [12.0803558, 55.62516]
                }
                },
                {
                'type': 'Feature',
                'properties': {
                'message': 'Baz',
                'iconSize': [40, 40]
                },
                'geometry': {
                'type': 'Point',
                'coordinates': [12.08999, 55.62516]
                }
                }
                ]
                };
            














             const map = new mapboxgl.Map({
             container: 'map', // container ID
             style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
             antialias: true,
             ...start
             });
             x = 0
             // Add markers to the map.
            for (const marker of geojson.features) {
                // Create a DOM element for each marker.
                
                const el = document.createElement('div');
                const width = marker.properties.iconSize[0];
                const height = marker.properties.iconSize[1];
                el.className = 'marker'+x;
                
                el.style.backgroundSize = '100%';
                x++ 
                 
                el.addEventListener('click', () => {
                window.alert(marker.properties.message);
                });
                 
                // Add markers to the map.
                new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
            }
            
                         // Add the control to the map.
                         const geocoder = new MapboxGeocoder({
             accessToken: mapboxgl.accessToken,
             mapboxgl: mapboxgl
             });




             // Initialize the geolocate control.
            const geolocate = new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            });
            // Add the control to the map.
            map.addControl(geolocate);
            map.on('load', () => {
                geolocate.trigger();
            });

             document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

             



             
        