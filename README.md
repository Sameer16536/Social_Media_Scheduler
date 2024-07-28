# Social Media Scheduler

A web application to schedule and manage posts across multiple social media platforms with analytics tracking.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

The Social Media Scheduler allows users to schedule posts across multiple social media platforms, view analytics, and manage content efficiently. Inspired by tools like Buffer and Hootsuite, this project provides a centralized dashboard for handling all your social media activities.

## Features

- User authentication (signup and login)
- Schedule posts for multiple social media platforms
- View scheduled posts in a centralized dashboard
- Track analytics for posts (engagements, reach, etc.)
- Responsive design using Tailwind CSS

## Tech Stack

### Frontend
- React
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express
- Prisma
- PostgreSQL
- JWT for authentication
- bcrypt for password hashing

## Project Structure

### Frontend

```
social-media-scheduler-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── LoginForm.tsx
│   │   ├── ScheduleForm.tsx
│   │   ├── Dashboard.tsx
│   ├── features/
│   │   ├── auth/
│   │   │   ├── authSlice.ts
│   ├── store/
│   │   ├── store.ts
│   ├── App.tsx
│   ├── index.tsx
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
```

### Backend

```
social-media-scheduler-backend/
├── prisma/
│   ├── schema.prisma
├── src/
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── scheduleRoutes.ts
│   │   ├── analyticsRoutes.ts
│   ├── app.ts
│   ├── server.ts
├── .env
├── tsconfig.json
├── package.json
```

## Installation

### Prerequisites

- Node.js
- PostgreSQL

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/social-media-scheduler-frontend.git
   cd social-media-scheduler-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Tailwind CSS:
   ```bash
   npx tailwindcss init -p
   ```

4. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/social-media-scheduler-backend.git
   cd social-media-scheduler-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npx prisma migrate dev --name init
   ```

4. Add your environment variables in a `.env` file:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
   JWT_SECRET="your_jwt_secret"
   ```

5. Start the development server:
   ```bash
   npm run start
   ```

## Usage

1. Register a new account or login with an existing account.
2. Schedule a new post by providing the content, selecting social media platforms, and setting the scheduled date and time.
3. View your scheduled posts and their details on the dashboard.
4. Track the analytics of your posts.

## API Endpoints

### Authentication
- **POST** `/api/auth/login`: Login a user.
- **POST** `/api/auth/signup`: Signup a new user.

### Scheduling
- **POST** `/api/schedule`: Schedule a new post.
- **GET** `/api/schedule`: Get all scheduled posts.

### Analytics
- **GET** `/api/analytics`: Get analytics data for posts.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.