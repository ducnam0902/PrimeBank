# PrimeBank

A modern digital banking platform built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. PrimeBank simulates real-world banking workflows, including authentication, account management, transactions, transfers, savings, and financial analytics.

## Preview

> Screenshots and live demo will be added soon.

## Features

### Phase 1: Authentication & Foundation

* User registration
* User login
* Forgot password
* Password reset with OTP (mock)
* Protected routes
* Session persistence
* Dashboard placeholder

### Phase 2: Dashboard & Account Overview

* Account summary
* Available balance
* Recent transactions
* Quick actions

### Phase 3: Transaction History

* Transaction list
* Search and filtering
* Transaction details
* Pagination

### Phase 4: Transfers & Beneficiaries

* Internal transfers
* External transfers
* Beneficiary management
* Transfer confirmation flow

### Phase 5: Savings & Analytics

* Savings accounts
* Financial insights
* Spending analysis
* Cash flow visualization

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Router
* Zustand
* TanStack Query
* Axios

### UI & Styling

* Tailwind CSS
* shadcn/ui
* Lucide React
* Recharts

### Forms & Validation

* React Hook Form
* Zod

## Project Structure

```text
src/

features/
├── auth/
├── dashboard/
├── transactions/
├── transfers/
└── savings/

layouts/
routes/
services/
```

## Getting Started

### Prerequisites

* Node.js 20+
* npm 10+

### Installation

```bash
git clone https://github.com/<your-username>/primebank.git

cd primebank

npm install
```

### Start Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
```

## Roadmap

* [ ] Authentication flow
* [ ] Dashboard and account overview
* [ ] Transaction management
* [ ] Money transfers
* [ ] Savings accounts
* [ ] Financial analytics
* [ ] Backend integration
* [ ] Automated testing

## Disclaimer

PrimeBank does not process real financial data or perform actual banking transactions.

## License

This project is licensed under the MIT License.
