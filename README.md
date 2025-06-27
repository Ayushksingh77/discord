# Custom Discord Server Admin Dashboard

## Overview
This project is a custom Discord Server Admin Dashboard built with Next.js 14+ (App Router) and Tailwind CSS. It presents server statistics and allows basic admin interactions (all mocked in the frontend, no backend or Discord API integration). The design, layout, and all components are built from scratch.

## Features
- **Dashboard:** Metric cards (Total Members, Online Users, Active Roles, Messages Today) and a member growth chart.
- **Members:** Paginated, searchable, sortable table with avatar, username, join date, role, filter by role, and add member modal.
- **Roles:** List roles with color labels, toggle visibility, and inline renaming.
- **Messages:** List messages with avatar, username, timestamp, content, and delete button.
- **Dark mode:** Toggle with persistence.
- **Responsive:** Works on desktop, tablet, and mobile; sidebar collapses on mobile.
- **Accessible:** ARIA labels, semantic HTML, keyboard navigation, and good contrast.
- **Animations:** (Optional) Framer Motion for transitions.

## Approach
- **No templates, UI kits, or Figma mockups used.**
- **No backend, API calls, or Discord integration.**
- **No AI tools or code copypasta.**
- **State managed with React Context and hooks.**
- **Icons:** Heroicons.
- **Styling:** Tailwind CSS.

## How to Run
1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Open your browser:**
   Go to [http://localhost:3000](http://localhost:3000)

## File Structure
- `src/components/` — Reusable UI components
- `src/context/` — Context providers for theme and mock data
- `src/app/` — App routes (dashboard, members, roles, messages)


**Author:** Ayush Kumar Singh
