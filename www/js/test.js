var zoom = 10;

  function setCenter() {
    Mapbox.setCenter({
      'lat': 50.2222,
      'lng': 5.2344,
      'animated': true // default false
    });
  }

  function getCenter() {
    Mapbox.getCenter(function (c) {
      alert(JSON.stringify(c))
    });
  }

  function setBounds() {
    Mapbox.setBounds({
      'sw_lat': 50.2222,
      'sw_lng': 5.2344,
      'ne_lat': 30.2222,
      'ne_lng': 2.2344,
      'animated': true // default false
    });
  }

  function getBounds() {
    Mapbox.getCenter(function (c) {
      alert(JSON.stringify(c))
    });
  }

  function setTilt() {
    Mapbox.setTilt({
      pitch: 45,
      duration: 4500
    });
  }

  function getTilt() {
    Mapbox.getTilt(function (t) {
      alert(t)
    });
  }

  function getZoomLevel() {
    Mapbox.getZoomLevel(function (zl) {
      alert(zl)
    });
  }

  function zoomIn() {
    Mapbox.setZoomLevel({
      'level': ++zoom,
      'animated': true // default false
    });
  }

  function zoomOut() {
    Mapbox.setZoomLevel({
      'level': --zoom,
      'animated': true // default false
    });
  }

  function showMap() {
    Mapbox.show({
              style: 'emerald',
              margins: {
                'left': 0,
                'right': 0,
                'top': 0,
                'bottom': 160
              },
              center: {
                lat: 52.3702160,
                lng: 4.8951680
              },
              zoomLevel: zoom, // 0 (the entire world) to 20, default 10
              showUserLocation: true, // default false
              hideAttribution: true, // default false
              hideLogo: true, // default false
              hideCompass: false, // default false
              disableRotation: false, // default false
              disableScroll: false, // default false
              disableTilt: false, // default false
              disableZoom: false, // default false
              disablePitch: false, // default false
              markers: [
                {
                  'lat': 52.3732160,
                  'lng': 4.8941680,
                  'title': 'Nice location',
                  'subtitle': 'Really really nice location',
                  'image': 'www/img/markers/hi.jpg' // TODO support this on a rainy day
                }
              ]
            },
            function (result) {
              console.log(JSON.stringify(result));
              // let's add a callback for these markers - invoked when the callout is tapped (Android) or the (i) icon in the marker callout (iOS)
              Mapbox.addMarkerCallback(function (selectedMarker) {
                alert("Marker selected: " + JSON.stringify(selectedMarker));
              });
              // let's add callbacks for region changing
              //
              // - invoked when the map is about to moved (animated or not).
              Mapbox.onRegionWillChange(function(centerCoordinates) {
                console.log("Map will move from: ", centerCoordinates);
              });
              // - invoked at each tick (so 60 per second) when the map moves. So don't do any heavy computing here.
              Mapbox.onRegionIsChanging(function(centerCoordinates){
                console.log("New map center is: ", centerCoordinates);
              });
              // - invoked after the map has moved (animated or not).
              Mapbox.onRegionDidChange(function(centerCoordinates) {
                console.log("Map as finished to move to : ", centerCoordinates);
              });
            },
            function (error) {
              alert(error);
            }
    )
  }

  function hideMap() {
    Mapbox.hide({},
            function (result) {
              console.log(JSON.stringify(result));
            },
            function (error) {
              alert(error);
            }
    )
  }

  function addGeoJSON() {
    Mapbox.addGeoJSON({
      'url': 'https://gist.githubusercontent.com/tmcw/10307131/raw/21c0a20312a2833afeee3b46028c3ed0e9756d4c/map.geojson'
    });
  }

  function addPolygon() {
    Mapbox.addPolygon({
      points: [
        {
          'lat': 52.3832160,
          'lng': 4.8991680
        },
        {
          'lat': 52.3632160,
          'lng': 4.9011680
        },
        {
          'lat': 52.3932160,
          'lng': 4.8911680
        }
      ]
    });
  }

  function animateCamera() {
    Mapbox.animateCamera({
      // Sets the center of the map to Maracan??
      target: {
        lat: 52.3632160,
        lng: 4.9011680
      },
      zoom: 17, // Android, zoomLevel
      altitude: 1000, // iOS, meters from the ground
      bearing: 270, // Sets the orientation of the camera to look west
      tilt: 40, // // Sets the tilt of the camera to 30 degrees
      duration: 10 // in seconds
    });
  }

  function addMarkers() {
    Mapbox.addMarkers([
              {
                'lat': 52.3602160,
                'lng': 4.8891680,
                'title': 'One-line title here', // no popup unless set
                'subtitle': 'This text can span multiple lines on Android only. On iOS it\'s one line max.',
                'image': 'www/img/markers/hi.jpg' // TODO support this on a rainy day
              },
              {
                'lat': 52.3702160,
                'lng': 4.8911680,
                'title': 'Nu subtitle for this one' // iOS: no popup unless set, Android: an empty popup -- so please add something
              }
            ],
            function (result) {
              console.log(JSON.stringify(result));
            },
            function (error) {
              alert(error)
            }
    )
  }

  function removeAllMarkers() {
    Mapbox.removeAllMarkers(
      function (result) {
        console.log(JSON.stringify(result));
      },
      function (error) {
        alert(error)
      }
    )
  }

  function coords2Screen(coords) {
    Mapbox.convertCoordinate(coords,
            function (point) {
              alert("x:"+point.x+" - y:"+point.y);
            },
            function (error) {
              alert(error)
            })
  }

  function screen2Coords(point){
    Mapbox.convertPoint({
              'x':point.x,
              'y':point.y
            },
            function (latlng) {
              alert("lat:"+latlng.lat+" - lng:"+latlng.lng);
            },
            function (error) {
              alert(error)
            })
  }
