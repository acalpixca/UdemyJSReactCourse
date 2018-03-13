# JavaScript and React for Devs - Udemy - Cassidy Williams

## AJAX:
Synchronous vs Asynchronous - you can do both in AJAX
But it's with Asynchronous that you leverage the user experience benefits, i.e. you can render and modify your elements / dom objects/ whatever while data is being fetched (not after).

### HTTP Methods
GET - requests data from a resource (pulls)
POST - submits data to be processed (creates)
DELETE - requests deletion of a resource (removes)

### HTTP Status codes
100-level: Request received and understood. "Hold on".
200-level: as above plus processed successfully. "Here you go"
300-level: client must take additional action (e.g. redirection). "Go away".
400-level: the error seems to have been caused by the client. "You messed up".
500-level: the server failed to fulfill a valid request. "The server's messed up".

For Ajax and to simplify, we need a method to request a resource, and a handler to process what we receive, if we get a success status code, or handle the error otherwise.
