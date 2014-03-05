angular-dialog-service
======================

A complete AngularJS service with controllers and templates for generating application modals and dialogs for use with Angular-UI-Bootstrap and Twitter Bootstrap

Demos 
- v1.0 : http://codepen.io/m-e-conroy/pen/ALsdF
- v2.0 : http://codepen.io/m-e-conroy/pen/AmBpL

Release Versions:
- v1.0 : supports AngularJS 1.1.5 and below.
- v2.0 : supports AngularJS 1.2 +
- v3.0 / Master Branch : supports AngularJS 1.2 +, Angular UI Bootstrap 0.10.0

Predefined dialogs/modals include:

1. $dialogs.error(header,msg,[static])
2. $dialogs.wait(header,msg,progess,[static])
3. $dialogs.notify(header,msg,[static])
4. $dialogs.confirm(header,msg,[static])
5. $dialogs.create(url,ctrlr,data,opts)

Dependencies:

v1.0

1.  Angular JS - www.angularjs.org (version 1.1.5 and less) 
2.  Angular UI Bootstrap - http://angular-ui.github.io/bootstrap/#/modal (version <= 0.6.0, Non-Bootstrap 3 Branch) with embedded templates.
3.  Twitter Bootstrap CSS (2+)

v2.0 Additional Dependencies

1.  Angular JS ngSanitize - http://code.angularjs.org/1.2.1/angular-sanitize.min.js
	- ngSanitize: http://docs.angularjs.org/api/ngSanitize (needed for ng-bind-html)

v3.0

1.  AngularJS 1.2 +
2.  Angular UI Bootstrap 0.10.0
3.  Twitter Bootstrap CSS 3.0.3
4.  AngularJS ngSanitize

CSS:

Included a css file that has a .modal class fix for Bootstrap and also has some predefined styles for the various modals described in the service.

v3.0 css file has the .modal class removed that had been a fix for a Bootstrap 3 display problem.  This has since been rectified by Angular UI and Bootstrap.

Changes:

v3.0

1.  Added support for Angular UI Bootstrap 0.10.0.
2.  Added the ability to customize the header on the error and wait dialogs.
3.  Added example files.

Notes:

- Bootstrap 3: (v3.0 of this service no longer requires this fix) There's a problem with the actual modal being displayed even though it appears in the HTML code to be present.  I found that adding a "display: block" to Bootstrap 3's .modal class solved the problem.  
- It should not rely on including the Bootstrap JS.
- For version 2.0 + of this service module do not forget to include the ngSanitize Angular module.
