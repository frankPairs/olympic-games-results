# Olympic Games App

## Installation

First, install the root dependencies running:

```npm i```

Just after that, run the next command:

```npx lerna bootstrap```

This project uses Lerna to manage the different apps this project has. That command will install all the necessary
dependencies for every app.

## Development

For development, run the next command from the root directory:

```npm run dev```

This command runs the GraphQL API and the React Application in parallel. It runs both commands in development mode
so this command must not be used to deploy to production.

## Test

For testing, run the next command from the root directory:

```npm test```

This command runs all the test from the GraphQL and the React Application in parallel
