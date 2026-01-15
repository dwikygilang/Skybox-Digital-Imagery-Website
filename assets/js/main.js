const mediaQuery = window.matchMedia("(min-width: 1025px)");

if (mediaQuery.matches) {
  $("#mobileMaps").remove();
  $("#mobile-video").remove();
} else {
  $("#desktopMaps").remove();
  $("#desktop-video").remove();
}

(function () {
  var setting = {
    height: 380,
    width: 1920,
    zoom: 4,
    queryString:
      "Roleplay Studio, Cluster Animation & Film Factory, Pasrepan, Purwoasri, Singhasari, East Java, Indonesia",
    place_id: "ChIJyRXvmFEp1i0RVuGAvXkF47E",
    satellite: false,
    centerCoord: [],
    cid: "0xb1e30579bd80e156",
    lang: "en",
    id: "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
    embed_id: "939561",
  };
  var d = document;
  var s = d.createElement("script");
  s.src = "https://1map.com/js/script-for-user.js?embed_id=939561";
  s.async = true;
  s.onload = function (e) {
    window.OneMap.initMap(setting);
  };
  var to = d.getElementsByTagName("script")[0];
  to.parentNode.insertBefore(s, to);
})();

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
