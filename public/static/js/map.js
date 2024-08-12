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
      lat: 47.910643,
      lng: 106.929639,
      name: "Улаанбаатар буян төв байр",
      address1:"Улаанбаатар хот, СБД 1-р хороо, Авто замчдын гудамж 54"
      //postalCode: "3830-772 Gafanha da Nazaré" don't insert comma in the last item of each marker
   },
   {
      lat: 47.916940,
      lng: 106.624242,
      name: "Баруун буяны төв цогцолбор",
      address1:"Сонгино хйрхан дүүрэг, 32-р хороо, Баруун турууны ам" // don't insert comma in the last item of each marker
   },
   {
      lat: 47.918318,
      lng: 107.107501,
      name: "Зүүн буяны төв цогцолбор",
      address1:"Баянзүр дүүрэг, 20-р хороо"// don't insert comma in the last item of each marker
   },
   {
      lat: 48.041027,
      lng: 106.496952,
      name: "Дурсгалын цэцэрлэгт хүрээлэн",
      address1:"Сонгинохайрхан дүүрэг, 21-р хороо, Шүлэг уулын энгэрт"// don't insert comma in the last item of each marker
   },
   {
      lat: 47.710694,
      lng: 107.216096,
      name: "Диваажингийн цэцэрлэгт хүрээлэн",
      address1:"Төв аймгийн сэргэлэн сум, Баян уулын энгэрт"// don't insert comma in the last item of each marker
   } // don't insert comma in the last item
];


function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(47.910643,106.929639),
      zoom: 20,
      mapTypeId: 'roadmap',
   };

   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

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
