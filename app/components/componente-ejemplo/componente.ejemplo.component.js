/* globals _ENV_ */
(function(angular) {
    'use strict';

    /**
     * @ngdoc directive
     * @name component.componenteEjemplo
     * @requires $stateParams
     * @description
     * Componente para el resumen de la cabecera del fichero
     */
    angular
        .module('myApp')
        .component('componenteEjemplo', {
            templateUrl: 'components/componente-ejemplo/componente-ejemplo-layout.html',
            controller: ComponenteEjemploController,
            bindings: {
                miVariable: '='
           }
        });

    ComponenteEjemploController.$inject = ['$scope', '$injector', '$attrs'];
    /**
    * @ngdoc method
    * @name ComponenteEjemploController
    * @methodOf component.componenteEjemplo
    * @requires $scope
    * @description
    * Controlador para el componente de ejemplo
    */
    function ComponenteEjemploController($scope, $injector, $attrs) {
        var ctrl = this;
        
        ctrl.variable1 = 'Esto es una variable del componente';

        ctrl.variable2 = "Recibe por parametro el valor: " + $attrs.miVariable;

        var suma = parseInt($attrs.miVariable) + 5;

        ctrl.variable3 = "y al modificarlo pinta esto:" + suma;

        ctrl.ejecutoBoton = function (parametroRecibido){
            console.log("Al clickar el valor he recibido el parametro:" + parametroRecibido);
        }
        
        ctrl.ejecutoBotonBindeado = function (parametro){
            console.log("Al clickar sumo el valor que le mando con el parametro bindeado:" + (parseInt($attrs.miVariable) + parametro));
        }
    }
})(window.angular);
