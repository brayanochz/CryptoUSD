## TEST KNOWLEDGE NEXTJS AND REACTJS

## Technical test report

**Title:** Web application to obtain information about cryptocurrencies in USD

**Date:** 2023-11-08

**Authors:** Brayan Camargo

## Getting Started

Install dependencies:

```bash
npm install
# or
yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Run test

```bash
npm run test
# or
yarn test
```


## Live Demo

[https://cryptousd.brayancamargo.dev/](https://cryptousd.brayancamargo.dev/)


## Challenege

An enormous real estate company is going to be required to create a web application to
obtain information about crypto currencies in USD, but the governance decided to use the
default currency in EEUU. You make a list of crypto currencies, show the exchange to
USD, filter the list by currency and show details.

Please use this endpoint for access to information.
https://www.coinlore.com/cryptocurrency-data-api


## Used technology:

* Node v18
* Next.js 14
* TypeScript
* React.js
* Vercel

## Results:

The web application meets the requirements of the test statement. It is capable of displaying a list of cryptocurrencies, the exchange rate to USD, filtering the list by currency, and displaying details.

The application was developed using Next.js 14 with Server Side Rendering (SSR). SSR allows the server side to render the entire HTML page, including the cryptocurrency data, before sending it to the client browser. This results in faster initial page loading and a better user experience, especially for users with low-speed Internet connections.


## Live Demo:

[https://cryptousd.brayancamargo.dev/](https://cryptousd.brayancamargo.dev/)


## Performance analysis:

The results corresponding to the performance tests with different tools are attached:


### PageSpeed


#### Mobile

The performance tests for mobile devices obtained the following results:

![Mobile](https://github.com/brayanochz/CryptoUSD/assets/19654857/d9fc7fd0-57ce-43e7-9a3e-fead32c1804b "Mobile")

You can check it by entering the following link:[https://pagespeed.web.dev/analysis/https-cryptousd-brayancamargo-dev/6y0o47lgrm?form_factor=mobile](https://pagespeed.web.dev/analysis/https-cryptousd-brayancamargo-dev/6y0o47lgrm?form_factor=mobile)

#### Desk

The performance tests for mobile devices obtained the following results:

![Desk](https://github.com/brayanochz/CryptoUSD/assets/19654857/55760c73-f99c-4704-9d3f-c0f7703f5577 "Desk")


You can check it by entering the following link:[https://pagespeed.web.dev/analysis/https-cryptousd-brayancamargo-dev/6y0o47lgrm?form_factor=desktop](https://pagespeed.web.dev/analysis/https-cryptousd-brayancamargo-dev/6y0o47lgrm?form_factor=desktop)


### GTmetrix


![GTmetrix](https://github.com/brayanochz/CryptoUSD/assets/19654857/e894c757-69f6-476a-aa81-5627d2f17b05 "GTmetrix")


A more detailed report about these results can be found at the following link:[https://gtmetrix.com/reports/cryptousd.brayancamargo.dev/jFwjfF6Q/](https://gtmetrix.com/reports/cryptousd.brayancamargo.dev/jFwjfF6Q/)


## Improvements that can be made:

The following improvements could be made to further improve the performance and functionality of the application:



* **Using Cache for Cryptocurrency Data:** The application could implement a caching mechanism to store cryptocurrency data, reducing the need for frequent API requests and improving performance.
* **Improved filters:** By implementing the aforementioned improvement, an improvement could be made in the filters that areapply currently in the information, since it could be filtered directly on the complete data and not on the partial data provided by the api.
* **Implementation ofevidence End-to-End (E2E)**: Add end-to-end tests to verify the complete operation of the application and ensure the integrity of the features from the end-user perspective.


