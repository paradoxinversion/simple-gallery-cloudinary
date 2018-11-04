# Photo Gallery

A simple photo gallery intended for one user.

## Stack

Node, Express, React, MongoDB, Parcel

## Installing / Preparing to Run

After cloning run

```bash
yarn install
```

### Cloudinary Keys

To upload photos, you will need a Cloudinary account. Free accounts are valid. Once you have an account, create a file called `.env` in the root directory, with the following:

```text
CLOUDINARY_CLOUD_NAME="YOUR_CLOUD_NAME"
CLOUDINARY_API_KEY="YOUR_API_KEY"
CLOUDINARY_API_SECRET="YOUR_API_SECRET"
```

Replacing temporary values with your secrets as necessary.

Sidenote: Make sure to read Cloudinary's terms of service and use the gallery in accordance with their rules & guidelines.

## Running

### Server

To start just the Express server, make sure you have a `mongod` instance running and run

yarn run start-server

### Client

To start the client, run

```bash
yarn run start-client
```

## Client & Server

### Development

To start the client AND start a `mongod` instance automatically, run

```bash
yarn run start-dev
```

To run both client and server without automaically starting and mongod instance, make sure `mongod` is running and execute

```bash
yarn start
```

This is the command you'll most likely use upon deployment of your gallery.
