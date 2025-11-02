# 🎓 Tutor Dashboard

A modern and responsive Tutor Dashboard application built using **Vite + React**.  
This dashboard is designed to help tutors manage their sessions, students, calendar events, and notifications with a clean UI and smooth navigation.

---

## 📸 Preview

>

## 🚀 Live Demo

https://tutor-dashboard-teal.vercel.app/

---

## ✨ Features

- 📅 Interactive tutor schedule & session view
- 🧭 Sidebar with nested navigation
- 🎨 Tailwind-powered clean UI design
- ⏳ Day & date utilities using **dayjs**
- ⚛️ Client-side routing with `react-router-dom`

---

## 🛠️ Tech Stack

| Category       | Tools Used              |
| -------------- | ----------------------- |
| Framework      | **React 19** + **Vite** |
| Routing        | `react-router-dom`      |
| UI Styling     | **Tailwind CSS**        |
| Date utilities | `dayjs`                 |
| Icons          | `react-icons`           |
| Build Tool     | **Vite**                |

---

## 📦 Dependencies (from `package.json`)

### Runtime Dependencies

- react
- react-dom
- react-router-dom
- react-icons
- dayjs

### Dev Dependencies

- vite
- @vitejs/plugin-react
- tailwindcss
- eslint (with react plugins)
- autoprefixer
- postcss
- prettier
- prettier-plugin-tailwindcss

---

## 📁 Project Structure

src/
├─ ui/
├─ pages/
├─ features/
| ├─ authentication/
| ├─ dashboard/
| ├─ sessions/
| └─ tutors/
|  
├─ assets/
├─ hooks/ (if used)
├─ utils/ (if used)
├─ App.jsx
├─ index.css
└─ main.jsx

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/RomarioPappachan/tutor-dashboard.git
cd tutor-dashboard
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

### Production build

```bash
npm run build
npm run preview
```

---

## ⏱️ Development Time

**~11–12 hours**

> Although the suggested duration was 4–6 hours, I spent additional time to ensure a clean structure, reusable components, UI polish, responsive design, animations, and overall quality to match a real-world production dashboard experience.

---

## Assumptions

- The design screenshots are the primary source of truth for layout, spacing, and UI behavior.
- No backend integration was required; all interactions are front-end only.
- The calendar and buttons are for UI demonstration only; external APIs or real event data were not needed.
- Hover states, modal behavior, and mobile menu animations were interpreted based on design intent.
- Used Tailwind CSS as allowed by the assessment requirement.
- Fonts, icons, and color values were matched as closely as possible to the provided design.
- Exact pixel values were approximated based on the given UI screenshots when dimensions were not explicitly provided.
- Time-based alert (New Tutor Request) shows after 3 seconds as specified.
- Tablet breakpoint behavior follows a responsive approach since exact tablet screenshots were not provided.

## Browser Compatibility Notes

This project is developed using modern web standards and Tailwind CSS v3 to ensure wider browser compatibility, including better support for older browsers compared to Tailwind v4.

### Browser Support Expectation

The application is expected to work smoothly on:

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (latest)

> Although not manually tested across all browsers, Tailwind CSS v3 and modern responsive practices help ensure broad compatibility.

### Mobile Device Support

The design is responsive and intended to work on:

- Android devices (Chrome)
- iOS devices (Safari)

### Older Browsers

Tailwind CSS v3 was chosen specifically to provide better support and graceful degradation for older browsers.  
However, very old browsers (like Internet Explorer) are not officially supported.

### Notes

- Fully modern, mobile-first responsive layout
- Uses Flexbox, Grid, and modern JavaScript
- Expected to degrade gracefully where advanced features are unavailable
