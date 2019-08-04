Feature: Create User

Client should be able to send a request to our API in order to create User.
Our API should be also validate the structure of the payload and response
with an error if it is invalid

  Scenario: Empty payload
    If the client send a POST request to /users with unsupported payload,
    it should recieve a response with 4xx status

    When the client creates a POST request to /users
    And attaches a generic empty payload
    And send the request
    Then our API should response with a 400 HTTP status code
    And the payload of response should be a JSON object
    And contains a message property which says "Payload should not be empty"