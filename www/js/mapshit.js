        
               
               
               let start = {
                center: [80, 36],
                zoom: -5,
                pitch: 0,
                bearing: 0
                };
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             mapboxgl.accessToken = 'pk.eyJ1IjoieW91c2VmeGsiLCJhIjoiY2w0azFxYWJvMGNiaDNqbzlidmgyb2x0bCJ9.4BxmHksXSyKr-1ar7UJZ9Q';
             const map = new mapboxgl.Map({
             container: 'map', // container ID
             style: 'mapbox://styles/mapbox/streets-v12', // style URL
             antialias: true,
             ...start
             });


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

             



             
        