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

      lat: 47.9278265,
      lng: 106.9415559,
      name: "Мамба дацан",
      address1:"Улаанбаатар хот, СБД 1-р хороо, Авто замчдын гудамж 54"
      //postalCode: "3830-772 Gafanha da Nazaré" don't insert comma in the last item of each marker
   },
   {
      lat: 47.9390453,
      lng: 106.9349934,
      name: "Дамбадаржаалин Хийд",
      address1:"Улаанбаатар хот , БЗД 2-р хороо"// don't insert comma in the last item of each marker
  }, // don't insert comma in the last item
   {

      lat: 47.9198087,
      lng: 106.9582959,
      name: "Тарвалин хийд",
      address1:"Улаанбаатар хот, БЗД 15-р хороо"
      //postalCode: "3830-772 Gafanha da Nazaré" don't insert comma in the last item of each marker
  },
  {

     lat: 47.9275185,
     lng: 106.9208276,
     name: "Дашчойлин хийд",
     address1:"Улаанбаатар хот, БЗД 15-р хороо"
     //postalCode: "3830-772 Gafanha da Nazaré" don't insert comma in the last item of each marker
 },
 {

    lat: 47.9280572,
    lng: 106.895603,
    name: "Самъяа хийд",
    address1:"Улаанбаатар хот, БГД 9-р хороо"
    //postalCode: "3830-772 Gafanha da Nazaré" don't insert comma in the last item of each marker
},
{

   lat: 47.9246351,
   lng: 106.8964595,
   name: "Түвдэнпэлжээлин хийд",
   address1:"Улаанбаатар хот, ЧД, Их тойруу"
   //postalCode: "3830-772 Gafanha da Nazaré" don't insert comma in the last item of each marker
},
{

   lat: 47.9196579,
   lng: 106.9014176,
   name: "Бэтүб хийд",
   address1:"Улаанбаатар хот, ЧД, 5-х хороо"
   //postalCode: "3830-772 Gafanha da Nazaré" don't insert comma in the last item of each marker
},
{

   lat: 47.9196579,
   lng: 106.9014176,
   name: "Гандантэгчинлэн Хийд",
   //postalCode: "3830-772 Gafanha da Nazaré" don't insert comma in the last item of each marker
},
{

   lat: 47.9191093,
   lng: 106.8945418,
   name: "Их Хүрээ Хийд",
   //postalCode: "3830-772 Gafanha da Nazaré" don't insert comma in the last item of each marker
},
{

   lat: 47.9188606,
   lng: 106.8952932,
   name: "Ламрин Хийд",
   //postalCode: "3830-772 Gafanha da Nazaré" don't insert comma in the last item of each marker
},
{

   lat: 47.9177985,
   lng: 106.893587,
   name: "Их хүрээ мамба дацан /Зурхайн дацан/",
   //postalCode: "3830-772 Gafanha da Nazaré" don't insert comma in the last item of each marker
},
{

   lat: 47.9135164,
   lng: 106.884109,
   name: "Пунцоглин хийд",
   //postalCode: "3830-772 Gafanha da Nazaré" don't insert comma in the last item of each marker
},
{

   lat: 47.9351883,
   lng: 106.8795206,
   name: "Үржан хажодлин хийд",
   //postalCode: "3830-772 Gafanha da Nazaré" don't insert comma in the last item of each marker
}
];


function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(47.910643,106.929639),
    zoom: 13,
    mapTypeId: 'roadmap'
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
