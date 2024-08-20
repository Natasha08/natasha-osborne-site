[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Natasha08/natasha-osborne-site/tree/main.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Natasha08/natasha-osborne-site/tree/production)

Portfolio website created with [Next.js](https://nextjs.org/docs) (for future features)

## Getting Started

#### Node Version

Run the following command to check the node version:

```bash
nvm use
```

To install the correct node version

```bash
nvm use
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

Open [http://localhost:3000](http://localhost:3000) (or the url in the terminal if you're binding to `0.0.0.0`) with your browser to see the result.

## Deployments
Automatically deploys to Vercel
