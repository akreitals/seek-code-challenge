# seek-code-challenge
React Redux Styled-Components shopping cart for the seek interview process

This repository contains a client side implementation for the seek code exercise.
It is built using React, Redux and StyledComponents, uses Flow for static type 
checking and includes server side rendering.

Note that the NodeJS API built is only to provide static mock responses to API 
calls to better demonstrate the architecture of the data layer on the client. As a 
result all of the discount calculation sits client side in order to demonstrate the 
logic although this is obviously not ideal.

I have outlined below improvements and extensions that I would have liked to 
implement if time had provided.


## Installation
Clone this repo and then run
```sh
npm install
```

## Usage

### Development
```sh
npm run start
```
Runs the app in development mode using hot module reloading. 
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.


### Production
```
npm run build
npm run start:prod
```
Runs linting (eslint, flow, styled) and tests and then builds the app in production mode, including babelifying the server and providing minified and cache-busted javascript assets.

### Authentication Details
| Company  	| Credentials                                                	| Discount                                                                    	|
|----------	|------------------------------------------------------------	|-----------------------------------------------------------------------------	|
| Default  	| username: `customer@default.com` password: `password`      	|                                                                             	|
| Unilever 	| username: `customer@unilever.com` password: `password` 	    | 3 for 2 Classic Ads                                                         	|
| Apple    	| username: `customer@apple.com` password: `password`        	| Discount Standard Ads                                                       	|
| Nike     	| username: `customer@nike.com` password: `password`         	| Discount on 4 or more Premium Ads                                           	|
| Ford     	| username: `customer@ford.com` password: `password`         	| 5 for 4 Classic Ads Discount Standard Ads Discount on 3 or more Premium Ads 	|

# Testing
```
npm test
```
Will run unit and integration tests. Coverage could be improved and E2E tests using cucumber and nightwatch
would have been added given more time.

## Improvements
Additions/Improvements I would have liked to included
* Add docker files to enable containerised build and development and deployed to ECS, EKS or EB
* E2E tests using Cucumber and Nightwatch
* Improve test coverage including container components using Jest and Enzyme
* Persist state to cookies storage to maintain cart between sessions
* Move key settings to NODE_ENV variables or similar to increase configurability
* Limit polyfills included to only those actually used to decrease asset size
* Authentication (mocked via the API) using JWT and a completed authenticationRepository on the client