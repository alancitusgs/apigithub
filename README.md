# API GITHUB PROJECT

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
With the GITHUB API it allows to build a backend with the commit list of a project.

## Installation
You need to install package.json dependencies
```bash
$ npm install
```


## Running the app
Run to start the project in local environment 
```bash
# development
$ npm run start
Run to start the project in development mode
# watch mode
$ npm run start:dev
Run for production mode
# production mode
$ npm run start:prod
```

## Test
Run to launch the unit tests of the application
```bash
# unit tests
$ npm run test
Ejecutar los test con coverage de las pruebas 
# test coverage
$ npm run test:cov
```


## observations of improvements
 - Scale this app in AWS ECS containers for horizontal scaling.
 - It is possible to connect to a Redis Server for data caching in order to lighten the DB workload.
 - It is suggested to implement observability services to monitor the performance of the service in high concurrency. AWS Cloudwatch,   Grafana, New Relic.
 - It is possible to use SonarqUBE for secure code verification and technical debt reduction.
 - It is suggested to integrate a continuous deployment of CI/CD in some server. Gitlab suggestion.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Alan Garcia Sánchez]
- LinkedIn - [@alangs](https://www.linkedin.com/in/alangs/)

## License

Nest is [MIT licensed](LICENSE).
