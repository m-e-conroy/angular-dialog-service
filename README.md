angular-dialog-service
======================

A complete AngularJS service with controllers and templates for generating application modals and dialogs for use with Angular-UI-Bootstrap and Twitter Bootstrap

Demo: http://codepen.io/m-e-conroy/pen/ALsdF

Release Versions:
	- v1.0 : supports AngularJS 1.1.5 and below.
	- v2.0 / Master Branch : supports AngularJS 1.2 +

Predefined dialogs/modals include:

1. $dialogs.error(msg)
2. $dialogs.wait(msg,progess)
3. $dialogs.notify(header,msg)
4. $dialogs.confirm(header,msg)
5. $dialogs.create(url,ctrlr,data,opts)

Dependencies:

v1.0

1.  Angular JS - www.angularjs.org (version 1.1.5 and less) 
2.  Angular UI Bootstrap - http://angular-ui.github.io/bootstrap/#/modal (version 0.6.0+) with embedded templates.
3.  Twitter Bootstrap CSS (2+)

v2.0 Additional Dependencies
1.  Angular JS ngSanitize - http://code.angularjs.org/1.2.1/angular-sanitize.min.js
	- ngSanitize: http://docs.angularjs.org/api/ngSanitize (needed for ng-bind-html)


CSS:

I've included a css file that has a .modal class fix for Bootstrap and also has some predefined styles for the various modals described in the service.

Notes:

- Bootstrap 3: There's a problem with the actual modal being displayed even though it appears in the HTML code to be present.  I found that adding a "display: block" to Bootstrap 3's .modal class solved the problem.  
- It should not rely on including the Bootstrap JS.
- For version 2.0 of this service module do not forget to include the ngSanitize Angular module.
