This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Tailwind
Install Tailwind and its peer-dependencies using npm:

`npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`
Create React App doesn’t support PostCSS 8 yet so you need to install the Tailwind CSS v2.0 PostCSS 7 compatibility build for now as we’ve shown above.

Install and configure CRACO
Since Create React App doesn’t let you override the PostCSS configuration natively, we also need to install CRACO to be able to configure Tailwind:
`npm install @craco/craco`

Once it’s installed, update your scripts in your package.json file to use craco instead of react-scripts for all scripts except eject:

```console
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
```
