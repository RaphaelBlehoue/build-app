import superagent from 'superagent';
import { When, Then } from 'cucumber';

let request;
let result;
let error;

When('the client creates a POST request to /users', function () {
  request = superagent('POST', 'localhost:9099/users');
});

When('attaches a generic empty payload', function () {
  return undefined;
});

When('send the request', function (callback) {
  request
    .then((response) => {
      result = response.res;
      callback();
    })
    .catch((errorResponse) => {
      error = errorResponse.response;
      callback();
    });
});

Then('our API should response with a 400 HTTP status code', function () {
  if (error.statusCode !== 400) throw new Error();
});

Then('the payload of response should be a JSON object', function () {
  return 'pending';
});

Then('contains a message property which says "Payload should not be empty"', function () {
  return 'pending';
});
