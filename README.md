# QR Transfer - Better than emailing yourself

This project is a small utility web app used to transfer URLs and plain text from one device to another.

This backend application serves [the frontend project](https://github.com/plgod/qr-transfer). More details are available on that page.

## Known issues

### Sessions are not private

Each session uses a random number from 0 to 9999. It is possible to join an existing session if you know the session number, or to find existing sessions by brute force, or even to be served an existing session by pure luck.

### Sessions are never cleared

This is not an issue for an app with little to no usage hosted on a non-persistent cloud instance, since sessions are held in-memory. After some inactivity, the cloud instance is shut down and sessions are reset.
