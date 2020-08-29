# Welcome to [ImageUploader](https://shielded-cove-08964.herokuapp.com/)
## Site for image sharing, browsing and hosting.

- Developed by by Jasmin Soltani in August 2020
- Check it out [HERE](https://shielded-cove-08964.herokuapp.com/).

## Tech Stack
- React ([Create React App](https://github.com/facebook/create-react-app) on the frontend)
- Redux
- Node.js
- Express.js
- PostgreSQL
- AWS

## Trying the App
Use the following dummy account to test our the site features! <br />
Username: test@test.com <br />
Password: 123

## Local Development

### Repo Set Up
1. Clone the repo
2. Install packages with `yarn install`
3. Run `yarn start-dev` to run server and frontend locally
  - To run frontend only, run `yarn start-react` (default port 3000)
  - To run backend only, run `yarn start-dev-server` (default port 5000)
4. That's it!

### Database Set Up
This project uses PostgreSQL. Make sure you have the postgres CLI installed.
- Navigate to the root folder of this repo on your local machine
- Enter the psql CLI by entering `psql`
- In the psql CLI run `CREATE DATABASE imageuploader;` to create a new database called  "imageuploader". You only need to do this step once.
- In the psql CLI run `\c imageuploader` to connect to the database you just created
- In the psql CLI run `\i server/db/index.sql` to run the sql file that will create the tables for the database

To test your tables created successfully and seeded with the dummy data, run `SELECT * FROM USERS;` in the psql CLI. You should see 4 dummy emails seeded.

### Environmental Variable Set Up
You need to add environmental variables in order for the database driver pg to connect to your database.
- In the root folder create a `secrets.js` file
- In this file add the following:
```
process.env.USER='postgres';
process.env.PGUSER='postgres';
process.env.PGPASSWORD=YOURSECRETPASSWORDHERE
process.env.PGHOST='localhost';
process.env.PGDATABASE='imageuploader';
process.env.PGPORT=5432;
```
Note, the PGPASSWORD variable can be omitted if you do not have a password for your database.
