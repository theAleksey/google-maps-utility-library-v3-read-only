(function(){var j=window,k=document,l=Math;function n(a,b){return a.width=b}function o(a,b){return a.position=b}function p(a,b){return a.height=b}function q(a,b){return a.zIndex=b}var r="appendChild",s="createElement",t="getCoordinates",u="getView",w="pushLatLngAlt",x="setTimeout",y="style",z="addListener",A="getFeatures",B="InfoWindow",C="maps",D="getPosition",E="setStyleSelector",F="earth",H="prototype",I="setGeometry",J="substring",K="parentNode",L="event";
function M(a){if(!google||!google[F])throw"google.earth not loaded";if(!google[F].isSupported())throw"Google Earth API is not supported on this system";if(!google[F].isInstalled())throw"Google Earth API is not installed on this system";this.l="http://maps.google.com/mapfiles/kml/paddle/red-circle.png";this.b=a;this.k=a.getDiv();this.d=!1;this.f="Earth";this.i=[];this.e={};this.j=null;this.g=0;aa(this);ba(this)}j.GoogleEarth=M;M.MAP_TYPE_ID="GoogleEarthAPI";M[H].o=function(){return this.a};
M[H].getInstance=M[H].o;
function aa(a){var b=a.b,c={tileSize:new google[C].Size(256,256),maxZoom:19,name:a.f,alt:a.f,getTile:function(a,b,c){return c[s]("DIV")}};b.mapTypes.set("GoogleEarthAPI",c);b.setOptions({mapTypeControlOptions:{mapTypeIds:[google[C].MapTypeId.ROADMAP,google[C].MapTypeId.SATELLITE,"GoogleEarthAPI"]}});google[C][L][z](b,"maptypeid_changed",function(){if(a.b.getMapTypeId()=="GoogleEarthAPI"){var b;a:{b=RegExp("title=['\"]?"+a.f+"[\"']?");for(var c=a.c[K].childNodes,e=0,g;g=c[e];e++)if(b.test(g.innerHTML)){b=g;
break a}b=void 0}c=b;e=c[y].zIndex;g=a.c[K].childNodes;for(var h=0,i;i=g[h];h++)i.__gme_ozi=i[y].zIndex,q(i[y],0);c.__gme_ozi=e;q(a.c[y],q(c[y],2E3));c=a.h=k[s]("IFRAME");c.src="javascript:false;";c.scrolling="no";c.frameBorder="0";e=c[y];q(e,-1E5);n(e,p(e,"100%"));o(e,"absolute");e.left=e.top=0;b[r](c);a.c[y].display="";a.d=!0;a.a?N(a):ca(a)}else da(a)})}
function N(a){a.e={};O(a,!0);for(var b=a.a[A]();b.getFirstChild();)b.removeChild(b.getFirstChild());a.g++;for(var b=0,c;c=a.i[b];b++)google[C][L].removeListener(c);b={};c=P;for(var d=0,f;f=c[d];d++)b[f]=Q(a,f);for(c=0;d=b.Marker[c];c++)ea(a,d);for(c=0;d=b.Polygon[c];c++){var e=a,g=d,d=e.a;f=S(e,g);var h=d.createPolygon("");f[I](h);e=T(e,g);f[E](e);e=d.createLinearRing("");h.setOuterBoundary(e);for(var h=e[t](),g=g.getPath().getArray(),e=0,i=void 0;i=g[e];e++)h[w](i.lat(),i.lng(),0);d[A]()[r](f)}for(c=
0;d=b.Polyline[c];c++){h=a;g=d;d=h.a;f=S(h,g);e=d.createLineString("");e.setTessellate(!0);f[I](e);h=T(h,g);f[E](h);h=e[t]();g=g.getPath().getArray();e=0;for(i=void 0;i=g[e];e++)h[w](i.lat(),i.lng(),0);d[A]()[r](f)}for(c=0;d=b.Rectangle[c];c++){var g=a,m=d,d=g.a,h=m.getBounds();f=h.getNorthEast();h=h.getSouthWest();e=S(g,m);e[I](d.createPolygon(""));i=d.createLinearRing("");g=T(g,m);e[E](g);g=i[t]();g[w](f.lat(),f.lng(),0);g[w](f.lat(),h.lng(),0);g[w](h.lat(),h.lng(),0);g[w](h.lat(),f.lng(),0);g[w](f.lat(),
f.lng(),0);e.getGeometry().setOuterBoundary(i);e.setName("placemark");d[A]()[r](e)}for(c=0;d=b.Circle[c];c++){i=a;m=d;d=i.a;f=m.getCenter();g=m.getRadius();h=S(i,m);h[I](d.createPolygon(""));e=d.createLinearRing("");i=T(i,m);h[E](i);for(i=0;i<25;i++){var R=f,v=g,m=14.4*i;v/=6378137;m*=l.PI/180;var G=R.lat()*(l.PI/180),R=R.lng()*(l.PI/180),X=l.cos(v),v=l.sin(v),Y=l.sin(G),G=l.cos(G),Z=X*Y+v*G*l.cos(m),m=new google[C].LatLng(l.asin(Z)/(l.PI/180),(R+l.atan2(v*G*l.sin(m),X-Y*Z))/(l.PI/180));e[t]()[w](m.lat(),
m.lng(),0)}h.getGeometry().setOuterBoundary(e);h.setName("placemark");d[A]()[r](h)}for(c=0;d=b.KmlLayer[c];c++)fa(a,d.getUrl());for(c=0;d=b.GroundOverlay[c];c++)g=d.getBounds(),f=g.getNorthEast(),g=g.getSouthWest(),h=a.a,e=h.createGroundOverlay(""),e.setLatLonBox(h.createLatLonBox("")),e.getLatLonBox().setBox(f.lat(),g.lat(),f.lng(),g.lng(),0),e.setIcon(h.createIcon("")),e.getIcon().setHref(d.getUrl()),h[A]()[r](e)}
function O(a,b){var c=a.b.getCenter(),d=a.a.createLookAt("");d.setRange(l.pow(2,27-a.b.getZoom()));d.setLatitude(c.lat());d.setLongitude(c.lng());d.setHeading(0);d.setAltitude(0);var f=a.a;b?(f.getOptions().setFlyToSpeed(5),f[u]().setAbstractView(d),d.setTilt(15),f.getOptions().setFlyToSpeed(0.75),j[x](function(){f[u]().setAbstractView(d)},200),j[x](function(){f.getOptions().setFlyToSpeed(1)},250)):f[u]().setAbstractView(d)}
function U(a,b){a[0]=="#"&&(a=a[J](1,9));typeof b=="undefined"?b="FF":(b=parseInt(parseFloat(b)*255,10).toString(16),b.length==1&&(b="0"+b));return[b,a[J](4,6),a[J](2,4),a[J](0,2)].join("")}function S(a,b){var c=a.g+"GEV3_"+b.__gme_id;a.e[c]=b;return a.a.createPlacemark(c)}function fa(a,b){var c=a.a;google[F].fetchKml(c,b,function(a){a?c[A]()[r](a):j[x](function(){alert("Bad or null KML.")},0)})}
function ea(a,b){if(b[D]()){var c=a.a,d=S(a,b);b.getTitle()&&d.setName(b.getTitle());var f=c.createIcon("");b.getIcon()?f.setHref(b.getIcon()):f.setHref(a.l);var e=c.createStyle("");e.getIconStyle().setIcon(f);d[E](e);f=c.createPoint("");f.setLatitude(b[D]().lat());f.setLongitude(b[D]().lng());d[I](f);c[A]()[r](d);a.i.push(google[C][L][z](b,"position_changed",function(){var c=a.g+"GEV3_"+b.__gme_id,d=a.e[c],c=a.a.getElementById(c).getGeometry(),d=d[D]();c.setLatitude(d.lat());c.setLongitude(d.lng())}))}}
function T(a,b){var c=a.a.createStyle(""),d=c.getPolyStyle(),f=c.getLineStyle();f.setWidth(V(b,"strokeWeight",3));var e=V(b,"strokeOpacity",1),g=V(b,"fillOpacity",0.3),h=V(b,"strokeColor","#000000"),i=V(b,"fillColor","#000000");f.getColor().set(U(h,e));d.getColor().set(U(i,g));return c}function V(a,b,c){a=a.get(b);return typeof a=="undefined"?c:a}
function ca(a){google[F].createInstance(a.m,function(b){a.a=b;ga(a);N(a)},function(b){ha(a);a.b.setMapTypeId(google[C].MapTypeId.ROADMAP);throw"Google Earth API failed to initialize: "+b;})}
function ga(a){var b=a.a;b.getWindow().setVisibility(!0);var c=b.getNavigationControl();c.setVisibility(b.VISIBILITY_AUTO);c=c.getScreenXY();c.setYUnits(b.UNITS_INSET_PIXELS);c.setXUnits(b.UNITS_PIXELS);c=b.getLayerRoot();c.enableLayerById(b.LAYER_BORDERS,!0);c.enableLayerById(b.LAYER_ROADS,!0);google[C][L][z](a.b,"GEInfoWindowOpened",function(b){if(a.d){var c=a.a.createHtmlStringBalloon("");c.setFeature(a.j);c.setContentString(b.getContent());a.a.setBalloon(c)}});google[F].addEventListener(b.getGlobe(),
"click",function(b){var c=b.getTarget(),e=a.e[c.getId()];if(e){b.preventDefault();for(var b=Q(a,"InfoWindow"),g=0,h;h=b[g];g++)h.close();a.j=c;google[C][L].trigger(e,"click")}})}function ia(a){var b=a.a[u]().copyAsLookAt(a.a.ALTITUDE_RELATIVE_TO_GROUND),c=b.getRange(),c=l.round(27-l.log(c)/l.log(2));!a.b.getZoom()==c?a.b.setZoom(c-1):a.b.setZoom(c);a.b.panTo(new google[C].LatLng(b.getLatitude(),b.getLongitude()))}function da(a){a.d&&(ia(a),j[x](function(){O(a)},50),j[x](function(){ha(a)},2200))}
function ha(a){for(var b=a.c[K].childNodes,c=0,d;d=b[c];c++)d.__gme_ozi&&q(d[y],d.__gme_ozi);a.h[K].removeChild(a.h);a.h=null;a.c[y].display="none";a.d=!1}
function ba(a){var b=a.k,c=a.c=k[s]("DIV");o(c[y],"absolute");n(c[y],0);p(c[y],0);c.index=0;c[y].display="none";var d=a.n=k[s]("DIV");n(d[y],b.clientWidth+"px");p(d[y],b.clientHeight+"px");o(d[y],"absolute");c[r](d);b=a.m=k[s]("DIV");o(b[y],"absolute");n(b[y],"100%");p(b[y],"100%");d[r](b);a.b.controls[google[C].ControlPosition.TOP_LEFT].push(c);google[C][L][z](a.b,"resize",function(){var b=a.n[y],c=a.k;n(b,c.clientWidth+"px");p(b,c.clientHeight+"px")})}
function Q(a,b){var c=[],d=W[b],f;for(f in d)if(d.hasOwnProperty(f)){var e=d[f];e.get("map")==a.b&&c.push(e)}return c}var W={};function ja(a){var b=google[C][a][H];b.__gme_setMapOriginal=b.setMap;W[a]={};google[C][a][H].setMap=function(b){if(b){if(!this.__gme_id)this.__gme_id=ka++,W[a][this.__gme_id]=this}else delete W[a][this.__gme_id],this.__gme_id=void 0;this.__gme_setMapOriginal(b)}}
for(var P=["Marker","Polyline","Polygon","Rectangle","Circle","KmlLayer","GroundOverlay","InfoWindow"],ka=0,la=P,ma=0,$;$=la[ma];ma++)if(ja($),$=="InfoWindow")google[C][B][H].p=google[C][B][H].open,W.InfoWindow={},google[C][B][H].open=function(a,b){if(a){if(!this.__gme_id)this.__gme_id=ka++,W[B][this.__gme_id]=this}else delete W[B][this.__gme_id],this.__gme_id=void 0;google[C][L].trigger(a,"GEInfoWindowOpened",this);this.p(a,b)};})();
