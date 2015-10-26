describe('Module dialogs.controllers', function(){

  var $modalInstance;
  var $translate;

  beforeEach(function(){
    module('dialogs.controllers');

    $modalInstance = {
      close: function(arg){},
      dismiss: function(arg){}
    };
    $translate = {
      instant: function(arg){}
    };

    spyOn($translate, 'instant').and.callFake(function(key){
      return {
        DIALOGS_ERROR: "Error",
        DIALOGS_ERROR_MSG: "An unknown error has occurred.",
        DIALOGS_CLOSE: "Close",
        DIALOGS_PLEASE_WAIT: "Please Wait",
        DIALOGS_PLEASE_WAIT_ELIPS: "Please Wait...",
        DIALOGS_PLEASE_WAIT_MSG: "Waiting on operation to complete.",
        DIALOGS_PERCENT_COMPLETE: "% Complete",
        DIALOGS_NOTIFICATION: "Notification",
        DIALOGS_NOTIFICATION_MSG: "Unknown application notification.",
        DIALOGS_CONFIRMATION: "Confirmation",
        DIALOGS_CONFIRMATION_MSG: "Confirmation required.",
        DIALOGS_OK: "OK",
        DIALOGS_YES: "Yes",
        DIALOGS_NO: "No"
      }[key];
    });

  });

  describe('Controller errorDialogCtrl', function() {

    var data;
    var $scope;
    var $ctrlr;
    var $rootScope;

    beforeEach(function(){
      inject(function($rootScope, $controller, $injector){

        $ctrlr = $controller;
        $scope = $rootScope.$new();
        $rootScope = $rootScope;

        spyOn($modalInstance, 'close');
        spyOn($scope, '$destroy');

      });
    });

    describe('Using Default Data', function(){
      beforeEach(function(){
        data = {};

        $ctrlr('errorDialogCtrl', {
          $scope: $scope,
          $modalInstance: $modalInstance,
          $translate: $translate,
          data: data
        });
      });

      it('should close modalInstance when close method executed', function(){
        $scope.close();
        expect($modalInstance.close).toHaveBeenCalled();
        expect($scope.$destroy).toHaveBeenCalled();
      });

      it('should have default values for header', function(){
        expect($translate.instant).toHaveBeenCalledWith('DIALOGS_ERROR');
        expect($scope.header).toBe("Error");
      });

      it('should have default values for msg', function(){
        expect($translate.instant).toHaveBeenCalledWith('DIALOGS_ERROR_MSG');
        expect($scope.msg).toBe("An unknown error has occurred.");
      });

      it('should have default values for icon', function(){
        expect($scope.icon).toBe("glyphicon glyphicon-warning-sign");
      });

    });

    describe('Using Provided Data', function(){
      beforeEach(function(){
        data = {
          header: "ThisError",
          msg: "Some Error Message",
          fa: true
        };

        $ctrlr('errorDialogCtrl', {
          $scope: $scope,
          $modalInstance: $modalInstance,
          $translate: $translate,
          data: data
        });
      });

      it('should have ThisError for header', function(){
        expect($scope.header).toBe("ThisError");
      });

      it('should have default values for msg', function(){
        expect($scope.msg).toBe("Some Error Message");
      });

      it('should have default values for icon', function(){
        expect($scope.icon).toBe("fa fa-warning");
      });

    });

  });

  describe('Controller notifyDialogCtrl', function() {

    var $scope;
    var data;
    var $ctrlr;
    var $rootScope;

    beforeEach(function(){
      inject(function($rootScope, $controller, $injector){

        $ctrlr = $controller;
        $scope = $rootScope.$new();
        $rootScope = $rootScope;

        spyOn($modalInstance, 'close');
        spyOn($scope, '$destroy');

      });
    });

    describe('Using Default Data', function(){
      beforeEach(function(){
        data = {};

        $ctrlr('notifyDialogCtrl', {
          $scope: $scope,
          $modalInstance: $modalInstance,
          $translate: $translate,
          data: data
        });
      });

      it('should close modalInstance when close method executed', function(){
        $scope.close();
        expect($modalInstance.close).toHaveBeenCalled();
        expect($scope.$destroy).toHaveBeenCalled();
      });

      it('should have default values for header', function(){
        expect($translate.instant).toHaveBeenCalledWith('DIALOGS_NOTIFICATION');
        expect($scope.header).toBe("Notification");
      });

      it('should have default values for msg', function(){
        expect($translate.instant).toHaveBeenCalledWith('DIALOGS_NOTIFICATION_MSG');
        expect($scope.msg).toBe("Unknown application notification.");
      });

      it('should have default values for icon', function(){
        expect($scope.icon).toBe("glyphicon glyphicon-info-sign");
      });

    });

    describe('Using Provided Data', function(){
      beforeEach(function(){
        data = {
          header: "ThisNotify",
          msg: "Some Notify Message",
          fa: true
        };

        $ctrlr('notifyDialogCtrl', {
          $scope: $scope,
          $modalInstance: $modalInstance,
          $translate: $translate,
          data: data
        });
      });

      it('should have ThisError for header', function(){
        expect($scope.header).toBe("ThisNotify");
      });

      it('should have Some Notify Message for msg', function(){
        expect($scope.msg).toBe("Some Notify Message");
      });

      it('should have font-awesome values for icon', function(){
        expect($scope.icon).toBe("fa fa-info");
      });

    });

  });

  describe('Controller confirmDialogCtrl', function() {

    var $scope;
    var data;
    var $ctrlr;
    var $rootScope;

    beforeEach(function(){
      inject(function($rootScope, $controller, $injector){

        $ctrlr = $controller;
        $scope = $rootScope.$new();
        $rootScope = $rootScope;

        spyOn($modalInstance, 'close');
        spyOn($scope, '$destroy');
        spyOn($modalInstance, 'dismiss');

      });
    });

    describe('Using Default Data', function(){
      beforeEach(function(){
        data = {};

        $ctrlr('confirmDialogCtrl', {
          $scope: $scope,
          $modalInstance: $modalInstance,
          $translate: $translate,
          data: data
        });
      });

      it('should dismiss modalInstance when no method executed', function(){
        $scope.no();
        expect($modalInstance.dismiss).toHaveBeenCalledWith('no');
      });

      it('should close modalInstance when yes method executed', function(){
        $scope.yes();
        expect($modalInstance.close).toHaveBeenCalledWith('yes');
      });

      it('should have default values for header', function(){
        expect($translate.instant).toHaveBeenCalledWith('DIALOGS_CONFIRMATION');
        expect($scope.header).toBe("Confirmation");
      });

      it('should have default values for msg', function(){
        expect($translate.instant).toHaveBeenCalledWith('DIALOGS_CONFIRMATION_MSG');
        expect($scope.msg).toBe("Confirmation required.");
      });

      it('should have default values for icon', function(){
        expect($scope.icon).toBe("glyphicon glyphicon-check");
      });

    });

    describe('Using Provided Data', function(){
      beforeEach(function(){
        data = {
          header: "ThisConfirm",
          msg: "Some Confirm Message",
          fa: true
        };

        $ctrlr('confirmDialogCtrl', {
          $scope: $scope,
          $modalInstance: $modalInstance,
          $translate: $translate,
          data: data
        });
      });

      it('should have ThisError for header', function(){
        expect($scope.header).toBe("ThisConfirm");
      });

      it('should have Some Confirm Message for msg', function(){
        expect($scope.msg).toBe("Some Confirm Message");
      });

      it('should have font-awesome values for icon', function(){
        expect($scope.icon).toBe("fa fa-check");
      });

    });

  });

  describe('Controller waitDialogCtrl', function() {

    var $scope;
    var data;
    var $ctrlr;
    var $rootScope;

    beforeEach(function(){
      inject(function(_$rootScope_, $controller, $injector){

        $ctrlr = $controller;
        $scope = _$rootScope_.$new();
        $rootScope = _$rootScope_;

        spyOn($modalInstance, 'close');
        spyOn($scope, '$destroy');

      });
    });

    describe('Sending Events to $scope', function(){
      beforeEach(function(){
        $ctrlr('waitDialogCtrl', {
          $scope: $scope,
          $modalInstance: $modalInstance,
          $translate: $translate,
          data: {}
        });
      });

      it('should get css for progress width', function(){
        $scope.progress = 50;
        var retval = $scope.getProgress();
        expect(retval).toEqual({'width': '50%'});
      });

    });

    describe('Using Default Data', function(){
      beforeEach(function(){
        data = {};

        $ctrlr('waitDialogCtrl', {
          $scope: $scope,
          $modalInstance: $modalInstance,
          $translate: $translate,
          data: data
        });
      });

      it('should have default values for header', function(){
        expect($translate.instant).toHaveBeenCalledWith('DIALOGS_PLEASE_WAIT_ELIPS');
        expect($scope.header).toBe("Please Wait...");
      });

      it('should have default values for msg', function(){
        expect($translate.instant).toHaveBeenCalledWith('DIALOGS_PLEASE_WAIT_MSG');
        expect($scope.msg).toBe("Waiting on operation to complete.");
      });

      it('should have default values for icon', function(){
        expect($scope.icon).toBe("glyphicon glyphicon-time");
      });

    });

    describe('Using Provided Data', function(){
      beforeEach(function(){
        data = {
          header: "ThisConfirm",
          msg: "Some Confirm Message",
          fa: true
        };

        $ctrlr('waitDialogCtrl', {
          $scope: $scope,
          $modalInstance: $modalInstance,
          $translate: $translate,
          data: data
        });
      });

      it('should have ThisError for header', function(){
        expect($scope.header).toBe("ThisConfirm");
      });

      it('should have Some Confirm Message for msg', function(){
        expect($scope.msg).toBe("Some Confirm Message");
      });

      it('should have font-awesome values for icon', function(){
        expect($scope.icon).toBe("fa fa-clock-o");
      });

    });

  });


});
