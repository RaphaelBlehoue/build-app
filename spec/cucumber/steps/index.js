import superagent from 'superagent';
import assert from 'assert';
import { When, Then } from 'cucumber';

const port = process.env.PORT || 9099;
const URL_API = `localhost:${port}`;
const ERROR_BAD_REQUEST = 400;

When('the client creates a POST request to /users', function () {
  this.request = superagent('POST', `${URL_API}/users`);
});

When('attaches a generic empty payload', function () {
  return undefined;
});

When('send the request', function (callback) {
  this.request
    .then((response) => {
      this.response = response.res;
      callback();
    })
    .catch((error) => {
      this.response = error.response;
      callback();
    });
});

Then('our API should response with a 400 HTTP status code', function () {
  assert.equal(this.response.statusCode, ERROR_BAD_REQUEST);
});

Then('the payload of response should be a JSON object', function () {
  // check Content type Header
  const contentType = this.response.headers['Content-Type'] || this.response.headers['content-type'];
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('Response not of Content-Type application/json');
  }
  try {
    this.responsePayload = JSON.parse(this.response.text);
  } catch (e) {
    throw new Error('Response not a valid JSON object');
  }
});

Then('contains a message property which says "Payload should not be empty"', function () {
  assert.equal(this.responsePayload.message, 'Payload should not be empty');
});
