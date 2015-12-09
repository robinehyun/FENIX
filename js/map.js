
function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
  center: new google.maps.LatLng(33.8347, -118.3414),
  zoom: 12,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var labels = [];

  var labelIndex = 0;

  for (var i = 1; i < 101; i++) {
    labels.push(i.toString());
  };

  var markerInfo = [{
    title: 'Gracie Jiu Jitsu',
    lat: 33.873448,
    lng: -118.3340881,
    body: "3515 Artesia Blvd" + "<br />" + "Torrance, CA 90504" + "<br />" + "(310) 353-4100",
    link: 'www.gracieacademy.com',
  },
  {
    title: 'Carlson Gracie Jiu Jitsu',
    lat: 33.8483121,
    lng: -118.3627046,
    body: "20305 Anza Ave" + "<br />" + "Torrance, CA 90503" + "<br />" + "(909) 261-9534",
    link: 'www.carlsongraciesouthbay.com',
  },
  {
    title: 'Tsunami Brazilian Jiu Jitsu',
    lat: 33.8155215,
    lng: -118.3039246,
    body: "1513 W Sepulveda Blvd, Ste A" + "<br />" + "Torrance, CA 90501" + "<br />" + "(310) 429-8521",
    link: 'www.tsunamibjj.com',
  },
  {
    title: 'Caique Jiu Jitsu Martial Arts Academy',
    lat: 33.7987311,
    lng: -118.320168,
    body: "24831 Narbonne Avenue" + "<br />" + "Lomita, CA 90717" + "<br />" + "(424) 250-0111",
    link: 'www.cjjusa.com',
  },
  {
    title: 'Nino Schembri Brazilian Jiu Jitsu',
    lat: 33.8788918,
    lng: -118.3521827,
    body: "16714 Hawthorne Boulevard" + "<br />" + "Lawndale, CA 90260" + "<br />" + "(310) 371-0600",
    link: 'www.cjjusa.com',
  },
]

  markerInfo.forEach(function(val,i) {
      var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">'+ markerInfo[i].title +'</h1>'+
          '<div id="bodyContent">'+
          '<p>'+ markerInfo[i].body +'</p>'+
          '<p>'+ markerInfo[i].link +'</p>'
          '</div>'+
          '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var marker = new google.maps.Marker({
        position: {lat: markerInfo[i].lat, lng: markerInfo[i].lng},
        map: map,
        label: labels[labelIndex++ % labels.length],

      });

      marker.addListener('mouseover',function(){
          infowindow.open(map, marker);
      });
      marker.addListener('click', function(){
          infowindow.close(map, marker);
      });
  });
};

google.maps.event.addDomListener(window, 'load', initialize);
