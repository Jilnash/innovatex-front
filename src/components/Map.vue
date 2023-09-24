<template>
  <GoogleMap api-key="AIzaSyBC7W-H8jvF7FCFbrEHG-grbUjRKFOcbxk" style="width: 500px; height: 800px; margin: 0 auto" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { Loader } from "@googlemaps/js-api-loader"


export default defineComponent({
  components: { GoogleMap, Marker },
  data() {
    return {

    }
  },
  setup() {
    const center = { lat: 51.090731, lng: 71.394978 };
    return { center };
  },
  created() {
    // let directionsService = new google.maps.DirectionsService() ;
    // let directionsRenderer = new google.maps.DirectionsRenderer();
    // directionsRenderer.setMap(GoogleMap);
    // let request = {
    //   origin: new google.maps.LatLng(51.101727, 71.406640),
    //   destination: new google.maps.LatLng(51.101727, 71.406640),
    //   travelMode: 'DRIVING'
    // };
    // directionsService.route(request, function(result, status) {
    //   if (status == 'OK') {
    //     directionsRenderer.setDirections(result);
    //   }
    // });
  }
});
</script>