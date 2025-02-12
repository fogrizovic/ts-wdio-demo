# ts-wdio-demo
# Install
## Pre requisites
* Install Node.js 18.20.2 (npm 10.5.0)
    * mac/linux: You can install [nvm](https://github.com/nvm-sh/nvm) to manage npm and node versions. 
    * windows: You can install [nvm-windows](https://github.com/coreybutler/nvm-windows) to manage npm and node versions.
* Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Install the latest chrome browser
## Clone repo
Clone [ts-wdio-demo](git@github.com:fogrizovic/ts-wdio-demo.git) repository.
```console
foo@bar:~$ git clone git@github.com:fogrizovic/ts-wdio-demo.git
```
## Install npm dependencies
```console
foo@bar:~$ npm i
```
# Run 
## Scripts
- all: for running all tests
- smoke: for running smoke tests
- reports: generates reports in allure-report folder
### Examples

MAC/LINUX
```console
foo@bar:~$ npm run all  
```
```console
foo@bar:~$ npm run all -- --logLevel debug
```
