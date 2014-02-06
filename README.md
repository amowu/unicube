Unicube offical website
=======================

Requirement
-----------

- [node.js](http://nodejs.org/) or [nvm](https://github.com/creationix/nvm)
- [forever](https://github.com/nodejitsu/forever)
- [bower](https://github.com/bower/bower)

Installation
------------

Server side:

	$ cd web-server
	web-server$ npm install

Client side:

	$ cd web-client
	web-client$ bower install

Usage
-----

Start server:

	$ forever start web-server/server.js

Stop server:

	$ forever stopall