var app = angular.module('testeAplicacao', []);

app.controller('loginController', ['$scope', '$http', function ($scope, $http) {

    /* validar login */
    $scope.click_btnEntrar = function () {
        if (!$scope.usuario) {
            $scope.erro = "Informe o usuário!";

            document.getElementById("cUsuario").focus();

        } else if (!$scope.senha) {
            $scope.erro = "Informe a senha!";

            document.getElementById("cSenha").focus();
        } else {
            $scope.erro = null;

            location.href = "http://www.google.com";
        }
    };
}]);
