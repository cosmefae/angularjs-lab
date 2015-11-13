(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function() {
     this.tab = 1;

     this.selectTab = function(setTab) {
       this.tab = setTab;
     };
     this.isSelected = function(checkTab) {
        return this.tab === checkTab;
     };
  });

  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      images: [
        {
          full: 'https://placeimg.com/100/100/nature',
          thumb: 'https://placeimg.com/500/500/nature',
        }
      ],
      canPurchase: false,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          author: 'Paulo'
        },
        {
          stars: 3,
          body: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          author: 'Alonso'
        }
      ]
    },
    {
      name: 'Storm',
      price: 5.50,
      description: 'Liiiipsum!',
      images: [
        {
          full: 'https://placeimg.com/100/100/animals',
          thumb: 'https://placeimg.com/500/500/animals',
        }
      ],
      canPurchase: false,
      soldOut: false,
      reviews: [
        {
          stars: 1,
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          author: 'Paulo'
        },
        {
          stars: 0,
          body: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          author: 'Alonso'
        }
      ]
    }
  ];
})();
