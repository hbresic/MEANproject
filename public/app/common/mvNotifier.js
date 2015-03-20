angular.module('app').value('mvToastr', toastr);
angular.module('app').factory('mvNotifier', function(mvToastr){
  return {
    notify: function(msg) {
      mvToastr.sucsess(msg);
      console.log(msg);
    }
  };
});
