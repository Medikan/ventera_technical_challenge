# Ventera Technical Challenge

## Functional Overview

A verification tool used to check the conversion value between certain temperatures or volumes.

Enter the initial value and unit, then the target unit and the value the the student believes to correct conversion to be. Returns correct or incorrect, as well as the expected and recieved value.

All conversions are done server side, with the front end simply recieving and displaying data

Although some example scenarios contain nonsensical data, this tool does not support those as input. The textfields are numerical data only, and the Units of Measurement can only be selected if they are in the same family (temperature/volume)

Some conversions might be a little sloppy. I did grab the base conversion data from Google, but used multiple conversions to save time writing some conversion functions. Due to rounding issues some of the answers may be off by a bit.

TODOS (if I had more time to sink into this):

- Unit testing (probably jest)
- More robust front end input object containing values `label`, `value`, `defaultValue`, `isValid`, `message`
- Front end UI/UX needs a lot of work
- Didn't implement pipelines since I'm only familiar with how to do it via CodeDeploy and ECS on AWS
- Implement better rounding. Currently just truncating, which isn't ideal

## Available Scripts

### `npm run client`

Runs the front end of the application in developer mode. Defaults to port 3000

### `npm run build`

Builds the front end application and places it in the /build/ directory

### `npm run server`

Runs the backend node server. Currently only works after the front end has been built, since it is looking to serve files in the /build/ directory. Defaults to port 3001

### `npm run start`

Build the front end and runs the server. Defaults to port 3001
