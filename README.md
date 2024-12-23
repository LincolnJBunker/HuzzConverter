# Huzz Converter

This template provides a minimal setup to get Huzz Converter working on you own machine

## Clone the repository, and install the following dependencies

Below are the following dependencies needed to run this application:

```zsh
  $ npm install
  $ npm install @mui/material @emotion/react @emotion/styled
  $ npm install gender-api.com-client --save
```

## Set up your own GenderAPI Key
You'll need a GenderAPI key to enable gender detection

Link to GenderAPI Website: https://gender-api.com/en/
Link to GenderAPI Github: https://github.com/markus-perl/gender-api-client-npm

Add the API key to a .envrc file in the root directory of the project:

```js
VITE_GENDER_API_KEY=your_api_key_here
```

