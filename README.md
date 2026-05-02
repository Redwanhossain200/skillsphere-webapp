# 🎓 SkillSphere

**SkillSphere** is a modern online learning platform built with Next.js and Tailwind CSS. It allows learners to browse courses, view details, authenticate with email/password or Google, access protected course pages, and manage their profile.

## 🚀 Live Demo

[Visit Project](https://skillsphere-webapp.vercel.app)

> If the live URL is not active yet, replace this link with the deployed application URL after deployment.

## ✨ Key Features

- Responsive landing page with hero section, popular courses, trending courses, learning tips, and top instructors
- All Courses page with search functionality by course title
- Course details page protected for authenticated users only
- Email/password authentication and Google social login via BetterAuth
- User profile page with profile details and update form
- Toast notifications for success/error feedback
- Clean App Router structure with persistent navbar and footer
- Custom animations using `framer-motion`
- Not Found (`404`) page and loading states for fetch requests

## 📚 Pages / Routes

- `/` - Home page
- `/courses` - All Courses page
- `/courses/[id]` - Course details page (protected)
- `/profile` - User profile page
- `/profile/update` - Update profile information
- `/login` - Login page
- `/register` - Registration page

## 📑 Course Data

Courses are loaded from `public/courses.json` and include fields such as:

- `id`
- `title`
- `instructor`
- `duration`
- `rating`
- `level`
- `description`
- `image`
- `category`
- `price`
- `isTrending`

## 🔧 Environment Variables

The app uses environment variables for authentication and database configuration.

Create a `.env` file with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_URL=https://your-better-auth-app.vercel.app
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 🛠️ Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS
- DaisyUI
- BetterAuth
- React Hook Form
- React Hot Toast
- Framer Motion
- React Icons
- MongoDB

## 📦 npm Packages Used

- `next`
- `react`
- `react-dom`
- `better-auth`
- `daisyui`
- `tailwindcss`
- `react-hook-form`
- `react-hot-toast`
- `framer-motion`
- `motion`
- `react-icons`
- `mongodb`

## ✅ Notes

- The app is structured with the Next.js App Router and server components for auth session checks.
- Protected routes redirect users to `/login` when not authenticated.
- Profile update functionality supports name and image URL updates.
- Search functionality is implemented on the All Courses page.

## 💡 How to Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.
