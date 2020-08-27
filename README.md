# Welcome to [ImageUploader](https://shielded-cove-08964.herokuapp.com/)
## Site for image sharing, browsing and hosting.

- Developed by by Jasmin Soltani in August 2020
- Check it out [here](https://shielded-cove-08964.herokuapp.com/)

## Tech Stack
- React ([Create React App](https://github.com/facebook/create-react-app) on the frontend)
- Redux
- Node.js
- Express.js
- PostgreSQL
- AWS

## Local Development

### Repo Set Up
1. Clone the repo
2. Install packages with `yarn install`
3. Run `yarn start-dev` to run server and frontend locally
4. To run frontend only, run `yarn start-react`

### Database Set Up
This project uses PostgreSQL. Make sure you have the postgres CLI installed.
- Navigate to the root folder of this repo on your local machine
- Enter the psql CLI by entering `psql`
- In the psql CLI run `CREATE DATABASE imageuploader;` to create a new database called  "imageuploader"
- In the psql CLI run `\c imageuploader` to connect to the database you just created
- In the psql CLI run `\i server/db/index.sql` to run the sql file that will create the tables for the database

To test your tables created successfully and seeded with the dummy data, run `SELECT * FROM USERS;` in the psql CLI.
