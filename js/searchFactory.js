githubUserSearch.factory('Search', ['$http', function($http) {
var queryUrl = "https://api.github.com/search/users?access_token="+ gitAccessToken;
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm
         }
        });
      }
    }
}]);
