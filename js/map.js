function initMap() {
  // Cree un nuevo objeto StyledMapType, pasandole una matriz de estilos,
  // y el nombre que se mostrara en el control de tipo de mapa.
  var styledMapType = new google.maps.StyledMapType(
  [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
],
  
  {name: 'Styled Map'});

  // Cree un objeto de mapa e incluya MapTypeId para agregar
  // al control de tipo de mapa.
  var myLatlng = new google.maps.LatLng(51.5165957,-0.1277179);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
  });

  // O agregue el marcador al mapa, llame a setMap();
  marker.setMap(map);

  //Asocie el mapa con estilo con MapTypeId y configurelo para mostrar.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}