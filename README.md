# getting-started

* https://fierce-gorge-33432.herokuapp.com
* https://dev1-shure-community.cs41.force.com/CSPGateway

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

## How the sample app works
* This app was deployed to Heroku, either using Git or by using Heroku Button on the repository.
* When Heroku received the source code, it fetched all the dependencies in the package.json, creating a deployable slug.
* The platform then spins up a dyno, a lightweight container that provides an isolated environment in which the slug can be mounted and executed.
* You can scale your app, manage it, and deploy over 150 add-on services, from the Dashboard or CLI.
* If you deployed this app by deploying the Heroku Button, then in a command line shell, run:
    * git clone https://github.com/heroku/node-js-getting-started.git - this will create a local copy of the source code for the app
    * cd node-js-getting-started - change directory into the local source code repository
    * heroku git:remote -a <your-app-name> - associate the Heroku app with the repository
    * You'll now be set up to run the app locally, or deploy changes to Heroku

## Chat Deployments Settings
* Chat Deployment Name
* Developer Name
* Chat Window Title - 
* Allow Visitors to Save Transcripts
* Allow Acces to Pre-Chat API - 
* Permitted Domains - To limit the domains that can host this deployment.
* Enable Custome Timeouts - Customize the default idle connection timeout durations.
* `https://shure--dev1.cs41.my.salesforce.com/572550000008OwB`
