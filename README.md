# MotoFlexed - Bike Servicing Management API

MotoFlexed is a bike servicing management system built with Node.js, Express.js, TypeScript, Prisma ORM, and PostgreSQL. This API allows users to manage customers, bikes, and service records efficiently — built for modern garage and service center operations.

---

## Live Backend Link

> [MotoFlexed Live Backend Link]()

---

## Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Validation**: Zod (optional)
- **Deployment**: Render / Railway
- **Error Handling**: Centralized Global Error Handler

---

## Setup Guide

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/motoflexed.git
cd motoflexed
```

2. **Install Dependencies**

```bash
npm install
```

3. **Configure Environment**

Create a `.env` file and add:

```env
PORT=5000
DATABASE_URL=your_postgres_database_url
NODE_ENV=development
```

4. **Generate Prisma Client**

```bash
npx prisma generate
```

5. **Run Migrations**

```bash
npx prisma migrate dev --name init
```

6. **Start the Server**

```bash
npm run dev
```

---

## Key Features

- **Customer Management** – Create, read, update, and delete customer records.
- **Bike Registration** – Assign bikes to customers with unique service records.
- **Service Tracking** – Record and monitor service history with timestamps.
- **Error Handling** – Unified error structure for predictable debugging.
- **Modular Structure** – Clean service-controller-route architecture.
- **Transaction Safety** – Uses Prisma `$transaction` to ensure atomic operations.

---
