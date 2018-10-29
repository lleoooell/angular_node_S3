
// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('elevesListe').
  component('elevesListe', {
    templateUrl: 'app/eleves-liste/eleves-liste.template.html',
    controller: ['$routeParams','Eleves',
      function ElevesListeController($routeParams,Eleves) {
        var self = this;
        this.listeEleves = Eleves.query();
        // self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        //   self.setImage(phone.images[0]);
        // });

        // self.setImage = function setImage(imageUrl) {
        //   self.mainImageUrl = imageUrl;
        // };
      }
    ]
  });
