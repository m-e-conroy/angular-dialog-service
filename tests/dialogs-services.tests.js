describe('Module dialogs.services', function(){

  var modalOptions = {
    templateUrl : '',
    controller : '',
    backdrop: true,
    backdropClass: "dialogs-backdrop-default",
    keyboard: true,
    windowClass: "dialogs-default",
    size: 'lg',
    animation: false,
    resolve : {
      data : jasmine.any(Function)
    }
  };

  var modalComponentOptions = {
    component: 'myComponent',
    backdrop: true,
    backdropClass: "dialogs-backdrop-default",
    keyboard: true,
    windowClass: "dialogs-default",
    size: 'lg',
    animation: false,
    resolve : {
      data : jasmine.any(Function)
    }
  }

  describe('Provider: dialogsProvider and Service: dialogs', function(){

    var provider;

    beforeEach(function(){
      module('dialogs.services', function(dialogsProvider){
        provider = dialogsProvider;
      });
    });

    it('should open modal instance with default error params', inject(function($uibModal){
      spyOn($uibModal, 'open');
      var service = provider.$get[1]($uibModal).error();
      errorModalOptions = modalOptions;
      errorModalOptions.templateUrl = '/dialogs/error.html';
      errorModalOptions.controller = 'errorDialogCtrl';

      expect($uibModal.open).toHaveBeenCalled();
      expect($uibModal.open).toHaveBeenCalledWith(errorModalOptions);
    }));

    it('should open modal instance with default wait params', inject(function($uibModal){
      spyOn($uibModal, 'open');
      var service = provider.$get[1]($uibModal).wait();
      waitModalOptions = modalOptions;
      waitModalOptions.templateUrl = '/dialogs/wait.html';
      waitModalOptions.controller = 'waitDialogCtrl';

      expect($uibModal.open).toHaveBeenCalled();
      expect($uibModal.open).toHaveBeenCalledWith(waitModalOptions);
    }));

    it('should open modal instance with default notify params', inject(function($uibModal){
      spyOn($uibModal, 'open');
      var service = provider.$get[1]($uibModal).notify();
      notifyModalOptions = modalOptions;
      notifyModalOptions.templateUrl = '/dialogs/notify.html';
      notifyModalOptions.controller = 'notifyDialogCtrl';

      expect($uibModal.open).toHaveBeenCalled();
      expect($uibModal.open).toHaveBeenCalledWith(notifyModalOptions);
    }));

    it('should open modal instance with default confirm params', inject(function($uibModal){
      spyOn($uibModal, 'open');
      var service = provider.$get[1]($uibModal).confirm();
      confirmModalOptions = modalOptions;
      confirmModalOptions.templateUrl = '/dialogs/confirm.html';
      confirmModalOptions.controller = 'confirmDialogCtrl';

      expect($uibModal.open).toHaveBeenCalled();
      expect($uibModal.open).toHaveBeenCalledWith(confirmModalOptions);
    }));

    it('should open modal instance with specifying component params', inject(function($uibModal){
      spyOn($uibModal, 'open');

      createModalOptions = modalComponentOptions;

      var service = provider.$get[1]($uibModal).createWithComponent(
        createModalOptions.component
      );

      expect($uibModal.open).toHaveBeenCalled();
      expect($uibModal.open).toHaveBeenCalledWith(jasmine.objectContaining(createModalOptions));
    }));

    it('should open modal instance with using params', inject(function($uibModal){
      spyOn($uibModal, 'open');

      createModalOptions = modalOptions;
      createModalOptions.templateUrl = '/dialogs/create.html';
      createModalOptions.controller = 'createDialogCtrl';

      var service = provider.$get[1]($uibModal).create(
        createModalOptions.templateUrl,
        createModalOptions.controller
      );

      expect($uibModal.open).toHaveBeenCalled();
      expect($uibModal.open).toHaveBeenCalledWith(jasmine.objectContaining(createModalOptions));
    }));

    it('should open modal with backdrop value from useBackdrop config', inject(function($uibModal){
      provider.useBackdrop(false);
      spyOn($uibModal, 'open');
      var service = provider.$get[1]($uibModal).error();
      errorModalOptions = angular.copy(modalOptions);
      errorModalOptions.templateUrl = '/dialogs/error.html';
      errorModalOptions.controller = 'errorDialogCtrl';
      errorModalOptions.backdrop = false;

      expect($uibModal.open).toHaveBeenCalled();
      expect($uibModal.open).toHaveBeenCalledWith(errorModalOptions);
    }));

    it('should open modal with keyboard value from useEscClose config', inject(function($uibModal){
      provider.useEscClose(false);
      spyOn($uibModal, 'open');
      var service = provider.$get[1]($uibModal).error();
      errorModalOptions = angular.copy(modalOptions);
      errorModalOptions.templateUrl = '/dialogs/error.html';
      errorModalOptions.controller = 'errorDialogCtrl';
      errorModalOptions.keyboard = false;

      expect($uibModal.open).toHaveBeenCalled();
      expect($uibModal.open).toHaveBeenCalledWith(errorModalOptions);
    }));

    it('should open modal with windowClass value from useClass config', inject(function($uibModal){
      provider.useClass("some-class");
      spyOn($uibModal, 'open');
      var service = provider.$get[1]($uibModal).error();
      errorModalOptions = angular.copy(modalOptions);
      errorModalOptions.templateUrl = '/dialogs/error.html';
      errorModalOptions.controller = 'errorDialogCtrl';
      errorModalOptions.windowClass = "some-class";

      expect($uibModal.open).toHaveBeenCalled();
      expect($uibModal.open).toHaveBeenCalledWith(errorModalOptions);
    }));

    it('should copy data when opening create dialog when useCopy is true in config', inject(function($uibModal){
      provider.useCopy(true);
      spyOn(angular, 'copy');

      createModalOptions = modalOptions;
      createModalOptions.templateUrl = '/dialogs/create.html';
      createModalOptions.controller = 'createDialogCtrl';

      var service = provider.$get[1]($uibModal).create(
        createModalOptions.templateUrl,
        createModalOptions.controller
      );

      expect(angular.copy).toHaveBeenCalled();
    }));

    it('should open modal with size value from setSize config', inject(function($uibModal){
      provider.setSize("md");
      spyOn($uibModal, 'open');
      var service = provider.$get[1]($uibModal).error();
      errorModalOptions = angular.copy(modalOptions);
      errorModalOptions.templateUrl = '/dialogs/error.html';
      errorModalOptions.controller = 'errorDialogCtrl';
      errorModalOptions.size = "md";

      expect($uibModal.open).toHaveBeenCalled();
      expect($uibModal.open).toHaveBeenCalledWith(errorModalOptions);
    }));

    it('should open modal with animation true when useAnimation config is executed', inject(function($uibModal){
      provider.useAnimation();
      spyOn($uibModal, 'open');
      var service = provider.$get[1]($uibModal).error();
      errorModalOptions = angular.copy(modalOptions);
      errorModalOptions.templateUrl = '/dialogs/error.html';
      errorModalOptions.controller = 'errorDialogCtrl';
      errorModalOptions.animation = true;

      expect($uibModal.open).toHaveBeenCalled();
      expect($uibModal.open).toHaveBeenCalledWith(errorModalOptions);
    }));


  });

});
