## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

When the app is running you can make the following requests:

```bash
GET http://127.0.0.1 # returns the full list of data

GET http://127.0.0.1?limit=5 # limits the data return to 5 object

GET http://127.0.0.1/4ddbe251-72af-495e-8e9d-869217e1d92a # returns a single object with id 4ddbe251-72af-495e-8e9d-869217e1d92a


```

## Test

```bash
# unit tests
$ npm run test
```