// *
// * Add multiple markers
// * 2013 - en.marnoto.com
// *

// necessary variables
var map;
var infoWindow;
alert = function() {};

// markersData variable stores the information necessary to each marker
var markersData = [
  {
     lat: 48.041027,
     lng: 106.496952,
     name: "1. Дурсгалын цэцэрлэгт хүрээлэн",
     address1:"Сонгинохайрхан дүүрэг, 21-р хороо, Далд оршуулах"
  },
  {
     lat: 47.969179,
     lng: 106.763595,
     name: "2. Нарангийн энгэрийн оршуулгын газар",
     address1:"Сонгинохайрхан дүүрэг, 26-р хороо, Далд оршуулах"
  },
  {
     lat: 47.916940,
     lng: 106.624242,
     name: "3. Баруун буяны төв цогцолбор",
     address1:"Сонгино хйрхан дүүрэг, 32-р хороо, Чандарлан оршуулах" 
  },
  {
     lat: 47.799586,
     lng: 106.675463,
     name: "4. Өлзийт дахь Мааньтийн оршуулгын газар",
     address1:"Хан Уул дүүрэг, 14-р хороо, Далд оршуулах" 
  },
   {
      lat: 47.929303,
      lng: 106.971981,
      name: "5. Алтан Өлгийн оршуулгын газар",
      address1:"Баянзүрх дүүрэг, 22-р хороо, Далд оршуулах"
   },
   {
      lat: 47.918318,
      lng: 107.107501,
      name: "6. Зүүн буяны төв цогцолбор",
      address1:"Баянзүрх дүүрэг, 20-р хороо, Чандарлан оршуулах"
   },
   {
      lat: 47.710694,
      lng: 107.216096,
      name: "7. Диваажингийн цэцэрлэгт хүрээлэн",
      address1:"Төв аймгийн Сэргэлэн сум, Далд оршуулах"
   },
   {
      lat: 47.957299,
      lng: 106.764497,
      name: "8. Исламын шашинтны оршуулгын газар",
      address1:"Сонгино хйрхан дүүрэг, 26-р хороо, Далд оршуулах"
   }
];


function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(47.910643,106.929639),
      zoom: 20,
      mapTypeId: 'satellite',
   };

   map = new google.maps.Map(document.getElementById('map'), mapOptions);

   // a new Info Window is created
   infoWindow = new google.maps.InfoWindow();

   // Event that closes the Info Window with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers();
}

google.maps.event.addDomListener(window, 'load', function(){
  initialize();
});


// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(){

   // this variable sets the map bounds according to markers position
   var bounds = new google.maps.LatLngBounds();

   // for loop traverses markersData array calling createMarker function for each marker
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      createMarker(latlng, name, address1);

      // marker position is added to bounds variable
      bounds.extend(latlng);
   }

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
}

// This function creates each marker and it sets their Info Window content
function createMarker(latlng, name, address1){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name
   });

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
   google.maps.event.addListener(marker, 'click', function() {
      // Creating the content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + address1 + '<br />' +'</div></div>';

      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });
}
