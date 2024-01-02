# Mars Photo API

The purpose of this project is for users to quickly lookup mars images gathered by NASA's Perseverance, Curiosity, Opportunity, and Spirit rovers on a particular solar day and camera. Results can be filtered by solar day and/or camera. Queries by solar day can range from 0, which is the date of landing, up to the current maximum in the database.

### Demo
Please see this demo deployed at: https://codergirl01.github.io/mars-photos-project/

### How to run on localhost:

**1. Clone the project to local**

```
git clone https://github.com/codergirl01/mars-photos-project.git
```

**2. Run `npm install`**

```
cd client
npm install
cd ..
npm install
```

This command installs all the packages used in this project. Alternatively, packages can be installed individually:

**dotenv**
```javaScript
npm i dotenv
```
API keys are stored in the ```.env``` file and uses ```process.env``` to access these API keys. Please see documentation on this: [Documentation](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env). API keys used in this project will need to be registered and obtained through [Mars Photo API](https://api.nasa.gov/index.html#apply-for-an-api-key).

Set your API key in an environment variable on your local machine then in the code, read API keys from the environment variable by using ```process.env```.


**3. Run app**


*Example*
```
cd client
npm run dev
cd ..
node index.js
```
This will provide a port where it renders the app on your local server. 

