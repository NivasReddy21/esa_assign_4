# ESA-Assignment4

## SMS API microservice

Github Repo Link: <https://github.com/NivasReddy21/esa_assign_4>

Clone the repo

### Run the following commands

- `npm init`
- `npm install mongoose express body-parser`
- `npm install dotenv`
- `npm install --save express-rate-limit`
- `npm install memory-cache --save`

To run the server locally, use the command `npm start` or `node server.js`

### Examples

```
{
    "from": 123456788,
    "to": 237916438,
    "text": "good morning!"
}
```

```
from : "1234567890"
to : "12345"
text : "hello"

output : "message": "Forbidden.... Authorization failed."
```
