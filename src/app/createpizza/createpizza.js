angular.module('app.createpizza', [
    'services.crud',
    'ui.router'
])

    .config(function config($stateProvider) {
        $stateProvider.state('createpizza', {
            url: '/createpizza',
            views: {
                "main": {
                    controller: 'CreatePizzaCtrl',
                    templateUrl: 'app/createpizza/createpizza.tpl.html'

                }
            },
            data: {pageTitle: 'Create your pizza'}
        });
    })

    .controller('CreatePizzaCtrl', function CreatePizza($scope) {
        $scope.ingredients = CrudService.getIngredients();
    });



