'use strict';

describe('Controller: AddforumCtrl', function () {

  // load the controller's module
  beforeEach(module('myAppApp'));

  var AddforumCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddforumCtrl = $controller('AddforumCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddforumCtrl.awesomeThings.length).toBe(3);
  });
});
