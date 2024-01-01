# Mars Photo API

The purpose of this project is for users to quickly lookup mars photos on a particular solar day and camera. 

### How to run on localhost:

**1. Clone the project to local**

```
git clone https://github.com/codergirl01/mars-photos-project.git
```

**2. Run `npm install`**

```
cd client
npm install
```

This command installs all the packages used in this project. Alternatively, packages can be installed individually:

**dotenv**
```javaScript
npm i dotenv
```
API keys are stored in the ```.env``` file and uses ```process.env``` to access these API keys. Please see documentation on this: [Documentation](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env). API keys used in this project will need to be registered and obtained through [OpenWeather API](https://openweathermap.org/api) and [geocoding section of the Mapbox api](https://docs.mapbox.com/api/search/#forward-geocoding).

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

