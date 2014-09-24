//== Dialogs.Main Module =====================================================//

/**
 * Include this module 'dialogs.main' in your module's dependency list where you
 * intend to use it.  Then inject the 'dialogs' service in your controllers that
 * need it.
 */

angular.module('dialogs.main',['dialogs.services','ngSanitize']) // requires angular-sanitize.min.js (ngSanitize) //code.angularjs.org/1.2.1/angular-sanitize.min.js
		
	.config(['$translateProvider',function($translateProvider){
		/** 
		 * if Angular-Translate is not loaded, use the translate substitute
		 * module and create default translations to use as default modal texts
		 */
		try{
			angular.module('pascalprecht.translate');
		}catch(err){
			console.log('Creating default translations for use without Angular-Translate.');

			// This will set default modal buttons, header and message text
			$translateProvider.translations('en-US',{
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
        	});
		} // end try/catch
	}]) // end config

	// Add default templates via $templateCache
	.run(['$templateCache','$interpolate',function($templateCache,$interpolate){
    
    	// get interpolation symbol (possible that someone may have changed it in their application instead of using '{{}}')
    	var startSym = $interpolate.startSymbol();
    	var endSym = $interpolate.endSymbol();
    
    	$templateCache.put('/dialogs/error.html','<div class="modal-header dialog-header-error"><button type="button" class="close" ng-click="close()">&times;</button><h4 class="modal-title text-danger"><span class="glyphicon glyphicon-warning-sign"></span> <span ng-bind-html="header"></span></h4></div><div class="modal-body text-danger" ng-bind-html="msg"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="close()">'+startSym+'"DIALOGS_CLOSE" | translate'+endSym+'</button></div>');
    	$templateCache.put('/dialogs/wait.html','<div class="modal-header dialog-header-wait"><h4 class="modal-title"><span class="glyphicon glyphicon-time"></span> '+startSym+'header'+endSym+'</h4></div><div class="modal-body"><p ng-bind-html="msg"></p><div class="progress progress-striped active"><div class="progress-bar progress-bar-info" ng-style="getProgress()"></div><span class="sr-only">'+startSym+'progress'+endSym+''+startSym+'"DIALOGS_PERCENT_COMPLETE" | translate'+endSym+'</span></div></div>');
    	$templateCache.put('/dialogs/notify.html','<div class="modal-header dialog-header-notify"><button type="button" class="close" ng-click="close()" class="pull-right">&times;</button><h4 class="modal-title text-info"><span class="glyphicon glyphicon-info-sign"></span> '+startSym+'header'+endSym+'</h4></div><div class="modal-body text-info" ng-bind-html="msg"></div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="close()">'+startSym+'"DIALOGS_OK" | translate'+endSym+'</button></div>');
    	$templateCache.put('/dialogs/confirm.html','<div class="modal-header dialog-header-confirm"><button type="button" class="close" ng-click="no()">&times;</button><h4 class="modal-title"><span class="glyphicon glyphicon-check"></span> '+startSym+'header'+endSym+'</h4></div><div class="modal-body" ng-bind-html="msg"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="yes()">'+startSym+'"DIALOGS_YES" | translate'+endSym+'</button><button type="button" class="btn btn-primary" ng-click="no()">'+startSym+'"DIALOGS_NO" | translate'+endSym+'</button></div>');
	}]); // end run / dialogs.main