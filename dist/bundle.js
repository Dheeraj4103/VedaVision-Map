(()=>{"use strict";const e=JSON.parse('{"r":[{"name":"Amruthaballi","location-grown":"North-eastern regions of India","coordinates":[26.2006,92.9376]},{"name":"Arali","location-grown":"Himalayas, Madhya Pradesh, Uttar Pradesh,Punjab","coordinates":[28.5983,83.931]}]}');window.initMap=function(){const n=new google.maps.Map(document.getElementById("map"),{zoom:4.8,center:{lat:22.449759,lng:80.108221}}),t=document.createElement("div"),o=function(e){const n=document.createElement("button");return n.id="controlbtn",n.textContent="Center Map",n.title="Click to recenter the map",n.type="button",n.addEventListener("click",(()=>{e.setCenter({lat:24.449759,lng:80.108221}),e.setZoom(4.5)})),n}(n);t.appendChild(o),n.controls[google.maps.ControlPosition.TOP_CENTER].push(t),function(n){const t=new google.maps.InfoWindow,o=function(e,n){n||(n=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");const t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null}("index");if(null!==o){const r=parseInt(o,10),a=e.r[r];if(a){document.getElementById("plant-name").innerHTML=a.name,document.getElementById("plant-location").innerHTML=a["location-grown"];const e=new google.maps.Circle({strokeColor:"#00FF00",strokeOpacity:.8,strokeWeight:2,fillColor:"#00FF00",fillOpacity:.35,map:n,center:{lat:a.coordinates[0],lng:a.coordinates[1]},radius:15e4});console.log(e),e.addListener("mouseover",(()=>{const o=card(a);t.setContent(o),t.setPosition(e.getCenter()),t.open(n)})),e.addListener("mouseout",(()=>{t.close(n)})),e.addListener("click",(()=>{n.setZoom(15),n.setCenter(e.getCenter());const o=card(a);t.setContent(o),t.setPosition(e.getCenter()),t.open(n)}))}else console.error("Invalid index or place not found.")}else console.error("Index not provided in the URL.")}(n)}})();