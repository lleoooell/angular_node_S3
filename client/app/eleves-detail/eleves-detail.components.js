angular.
  module('elevesDetail').
  component('elevesDetail', {
    templateUrl: 'app/eleves-detail/eleves-detail.template.html',
    controller: ['$routeParams','Eleves',
      function ElevesDetailController($routeParams,Eleves) {
        var self = this;
        // console.log($routeParams.id);
        this.eleve = Eleves.get({eleveId : $routeParams.eleveId},function(eleve){
          console.log(eleve);
        });
        // self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        //   self.setImage(phone.images[0]);
        // });

        // self.setImage = function setImage(imageUrl) {
        //   self.mainImageUrl = imageUrl;
        // };
      }
    ]
  });