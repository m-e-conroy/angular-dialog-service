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

  describe('Provider: dialogsProvider and Service: dialogs', function(){

    var provider;

    beforeEach(function(){
      module('dialogs.services', function(dialogsProvider){
        provider = dialogsProvider;
      });
    });

    it('should open modal instance with default error params', inject(function($modal){
      spyOn($modal, 'open');
      var service = provider.$get[1]($modal).error();
      errorModalOptions = modalOptions;
      errorModalOptions.templateUrl = '/dialogs/error.html';
      errorModalOptions.controller = 'errorDialogCtrl';

      expect($modal.open).toHaveBeenCalled();
      expect($modal.open).toHaveBeenCalledWith(errorModalOptions);
    }));

    it('should open modal instance with default wait params', inject(function($modal){
      spyOn($modal, 'open');
      var service = provider.$get[1]($modal).wait();
      waitModalOptions = modalOptions;
      waitModalOptions.templateUrl = '/dialogs/wait.html';
      waitModalOptions.controller = 'waitDialogCtrl';

      expect($modal.open).toHaveBeenCalled();
      expect($modal.open).toHaveBeenCalledWith(waitModalOptions);
    }));

    it('should open modal instance with default notify params', inject(function($modal){
      spyOn($modal, 'open');
      var service = provider.$get[1]($modal).notify();
      notifyModalOptions = modalOptions;
      notifyModalOptions.templateUrl = '/dialogs/notify.html';
      notifyModalOptions.controller = 'notifyDialogCtrl';

      expect($modal.open).toHaveBeenCalled();
      expect($modal.open).toHaveBeenCalledWith(notifyModalOptions);
    }));

    it('should open modal instance with default confirm params', inject(function($modal){
      spyOn($modal, 'open');
      var service = provider.$get[1]($modal).confirm();
      confirmModalOptions = modalOptions;
      confirmModalOptions.templateUrl = '/dialogs/confirm.html';
      confirmModalOptions.controller = 'confirmDialogCtrl';

      expect($modal.open).toHaveBeenCalled();
      expect($modal.open).toHaveBeenCalledWith(confirmModalOptions);
    }));

    it('should open modal instance with default create params', inject(function($modal){
      spyOn($modal, 'open');

      createModalOptions = modalOptions;
      createModalOptions.templateUrl = '/dialogs/create.html';
      createModalOptions.controller = 'createDialogCtrl';

      var service = provider.$get[1]($modal).create(
        createModalOptions.templateUrl,
        createModalOptions.controller
      );

      expect($modal.open).toHaveBeenCalled();
      expect($modal.open).toHaveBeenCalledWith(createModalOptions);
    }));

    it('should open modal with backdrop value from useBackdrop config', inject(function($modal){
      provider.useBackdrop(false);
      spyOn($modal, 'open');
      var service = provider.$get[1]($modal).error();
      errorModalOptions = angular.copy(modalOptions);
      errorModalOptions.templateUrl = '/dialogs/error.html';
      errorModalOptions.controller = 'errorDialogCtrl';
      errorModalOptions.backdrop = false;

      expect($modal.open).toHaveBeenCalled();
      expect($modal.open).toHaveBeenCalledWith(errorModalOptions);
    }));

    it('should open modal with keyboard value from useEscClose config', inject(function($modal){
      provider.useEscClose(false);
      spyOn($modal, 'open');
      var service = provider.$get[1]($modal).error();
      errorModalOptions = angular.copy(modalOptions);
      errorModalOptions.templateUrl = '/dialogs/error.html';
      errorModalOptions.controller = 'errorDialogCtrl';
      errorModalOptions.keyboard = false;

      expect($modal.open).toHaveBeenCalled();
      expect($modal.open).toHaveBeenCalledWith(errorModalOptions);
    }));

    it('should open modal with windowClass value from useClass config', inject(function($modal){
      provider.useClass("some-class");
      spyOn($modal, 'open');
      var service = provider.$get[1]($modal).error();
      errorModalOptions = angular.copy(modalOptions);
      errorModalOptions.templateUrl = '/dialogs/error.html';
      errorModalOptions.controller = 'errorDialogCtrl';
      errorModalOptions.windowClass = "some-class";

      expect($modal.open).toHaveBeenCalled();
      expect($modal.open).toHaveBeenCalledWith(errorModalOptions);
    }));

    it('should copy data when opening create dialog when useCopy is true in config', inject(function($modal){
      provider.useCopy(true);
      spyOn(angular, 'copy');

      createModalOptions = modalOptions;
      createModalOptions.templateUrl = '/dialogs/create.html';
      createModalOptions.controller = 'createDialogCtrl';

      var service = provider.$get[1]($modal).create(
        createModalOptions.templateUrl,
        createModalOptions.controller
      );

      expect(angular.copy).toHaveBeenCalled();
    }));

    it('should open modal with size value from setSize config', inject(function($modal){
      provider.setSize("md");
      spyOn($modal, 'open');
      var service = provider.$get[1]($modal).error();
      errorModalOptions = angular.copy(modalOptions);
      errorModalOptions.templateUrl = '/dialogs/error.html';
      errorModalOptions.controller = 'errorDialogCtrl';
      errorModalOptions.size = "md";

      expect($modal.open).toHaveBeenCalled();
      expect($modal.open).toHaveBeenCalledWith(errorModalOptions);
    }));

    it('should open modal with animation true when useAnimation config is executed', inject(function($modal){
      provider.useAnimation();
      spyOn($modal, 'open');
      var service = provider.$get[1]($modal).error();
      errorModalOptions = angular.copy(modalOptions);
      errorModalOptions.templateUrl = '/dialogs/error.html';
      errorModalOptions.controller = 'errorDialogCtrl';
      errorModalOptions.animation = true;

      expect($modal.open).toHaveBeenCalled();
      expect($modal.open).toHaveBeenCalledWith(errorModalOptions);
    }));


  });

});
