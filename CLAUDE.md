# Fluensia Learn

## Project Overview

Fluensia Learn is a secure video learning platform for Fluensia Academy.

Version 1.0 focuses only on secure video delivery for purchased courses.

Students should only be able to watch videos online after authentication.

No payment gateway is included in Version 1.

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma ORM
- PostgreSQL
- Better Auth
- Bunny Stream (later)

---

## Architecture

Use a Modular Monolith architecture.

Modules:

- Authentication
- Student
- Admin
- Courses
- Lessons
- Video

Each module should be isolated.

---

## Coding Rules

- Use TypeScript only.
- Do not use JavaScript.
- Use reusable components.
- Keep files focused on one responsibility.
- Avoid duplicate code.
- Follow Next.js App Router best practices.

---

## Authentication Rules

Roles:

ADMIN

STUDENT

Only authenticated users can access protected pages.

Students should never access admin pages.

---

## Version 1 Scope

Build only:

- Authentication
- Student Dashboard
- Admin Dashboard
- Course Management
- Lesson Management
- Secure Video Player
- Progress Tracking

Do NOT build:

- Payments
- AI
- Certificates
- Live Classes
- CRM
- Mobile App

---

## Workflow

Before implementing a feature:

1. Analyze the existing project.
2. Explain the implementation plan.
3. Wait for approval.
4. Implement only the requested feature.
5. Do not modify unrelated code.
6. Keep commits small and modular.

Never implement features outside the current sprint.
