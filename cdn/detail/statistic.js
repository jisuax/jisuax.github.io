
var _optj = _optj || [];
(function() {
  var op = document.createElement("script");
  op.src = "https://collect.opposhop.cn/static/optj-1.1.0.min.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(op, s);
})();

$(function(){
  $("body").on("click",".oppo-tj",function(){
    if (typeof $(this).data('tj') != 'undefined' && typeof _optj != 'undefined') {
      var tj = $(this).data('tj');
      var tjs = tj.split("|");
      _optj.push(['_trackEvent', tjs[0], tjs[1], tjs[2], tjs[3]]);
    };
  });
});

(function(para) {
  var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
  if(typeof(w['sensorsDataAnalytic201505']) !== 'undefined') {
      return false;
  }
  w['sensorsDataAnalytic201505'] = n;
  w[n] = w[n] || function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
  var ifs = ['track','quick','register','registerPage','registerOnce','trackSignup', 'trackAbtest', 'setProfile','setOnceProfile','appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify','login','logout','trackLink','clearAllRegister','getAppStatus'];
  for (var i = 0; i < ifs.length; i++) {
    w[n][ifs[i]] = w[n].call(null, ifs[i]);
  }
  if (!w[n]._t) {
    x = d.createElement(s), y = d.getElementsByTagName(s)[0];
    x.async = 1;
    x.src = p;
    x.setAttribute('charset','UTF-8');
    y.parentNode.insertBefore(x, y);
    w[n].para = para;
  }
})({
  sdk_url: 'https://static.sensorsdata.cn/sdk/1.12.7/sensorsdata.min.js',
  heatmap_url: 'https://static.sensorsdata.cn/sdk/1.12.7/heatmap.min.js',
  name: 'sensors',
  server_url: 'https://sa.opposhop.cn/sa?project=production',
  heatmap:{},
  use_app_track: true,
  show_log:false
});
sensors.registerPage({
  platform_type: 'H5'
});
sensors.quick('autoTrack');