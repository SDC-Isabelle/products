# Project Name

> This backend application was built using PostgreSQL and Express.js. The frontend for Atlier Retail, an e-commerce website, was inherited as legacy code. Previously, data was stored and received on a hosted API, taking around 40-50ms to make requests. As web traffic increased, we needed to build a scalable backend to handle an increase in requests per second while optimizing performance. This application is specifically for the product overview section.

## Tech Stack
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## Description
To improve user experience, the reduction in request latency was prioritized. Data was stored in a PostgreSQL database using indexing and JSON aggregate techniques. In development, application was tested using K6. In production, application was tested using Loader.io. Application was deployed on an EC2 micro instance, with load balancing and Nginx caching for full performance optimization. As a result, all queries came out to be under 10ms with some under 5ms.

## Project Phases
Phase 0: Pick service and initial setup
<br></br>
Phase 1: Create database - perform ELT process and migrate data via Postgres GUI
<br></br>
Phase 2: Create the API - define routes, integrate server and databases
<br></br>
Phase 3: Performance tune the service - stress-test service in development locally with K6
<br></br>
Phase 4: Deploy and benchmark initial performance - deploy services to raw EC2 instances 
<br></br>
Phase 5: Scale the application - stress-test cloud instances with loader.io, optimize the system and repeat!

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

