[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Natasha08/natasha-osborne-site/tree/main.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Natasha08/natasha-osborne-site/tree/production) <a href="https://codeclimate.com/github/Natasha08/natasha-osborne-site/maintainability"><img src="https://api.codeclimate.com/v1/badges/a6edc104cb41d0464448/maintainability" /></a>

<img width="1440" alt="image" src="https://github.com/user-attachments/assets/beda36d4-4b58-4ecd-985e-c383e9949a19">

Portfolio website created with [Next.js](https://nextjs.org/docs) (for future features)

## Forking the Repo
You are welcome to fork this repository and use the code in your own projects, provided that you give appropriate credit. Please include a link back to this repository in your project or documentation.

## Getting Started

#### Node Version

Run the following command to check the node version:

```bash
nvm use
```

To install the correct node version

```bash
nvm install v20.15.0
```

#### Install Packages

```bash
npm i
```

#### Create environment variables

```
cp .env.example .env
```

Open the .env file to inspect the required variables for the project

#### Run the development server:

```bash
npm run dev
```

If running the following command to run the server (to test on other devices), check the terminal for the url:

```bash
npm run dev -- -p 0.0.0.0
```

To run tests:

```bash
npm test
```

Lint commands:

See lint errors:

```bash
npm run lint
```

See and correct lint errors:

```bash
npm run lint-fix
```

Open [http://localhost:3000](http://localhost:3000) (or the url in the terminal if you're binding to `0.0.0.0`) with your browser to see the result.

## Deployments
Automatically deploys to Vercel
