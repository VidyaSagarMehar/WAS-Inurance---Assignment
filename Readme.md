# ✈️ Travel Insurance Quote & Plan Selection  
**Frontend Assessment Submission – WAS Insurance**

🌐 **Live Preview:**  [LINK](https://was-inurance-assignment.vercel.app/)

This project is a **frontend assessment submission** built in response to the WAS Insurance Front End Developer role.  
It demonstrates strong fundamentals in **HTML5, CSS3, and JavaScript**, with a focus on **performance, responsiveness, accessibility, and clean architecture**.

The implementation closely follows the provided Figma design and meets the expectations of a **high-quality, production-ready deliverable**, not a partial or rushed solution.

---
🎨 **Figma Design Reference:**  
This project was implemented based on the provided Figma design:
https://www.figma.com/design/PTxY4uhxKNULunGjbCzSkf/Untitled?node-id=0-1&t=VEe2W9Woj21bZAsk-1

---

## 🎯 Assessment Objectives

This project was built to demonstrate the ability to:

- Translate **high-fidelity Figma designs** into responsive web pages
- Identify UI/UX problems and execute improvements independently
- Write **semantic HTML**, clean CSS, and maintainable JavaScript
- Optimize for **Core Web Vitals** (performance, accessibility, SEO)
- Deliver pixel-accurate layouts without hand-holding

---

## ✨ Key Features

### 🌍 Destination Selection
- Country autocomplete dropdown
- Keyboard navigation (↑ ↓ Enter Esc)
- Dynamic chip-based selection
- Duplicate prevention
- Graceful “Destination not found” handling

### 📅 Travel Dates
- Native date picker
- Calendar icon hidden for cleaner UI
- Click anywhere in the input to open calendar
- Cross-browser support (Chrome, Edge, Firefox)

### 🧭 Stepper Navigation
- Multi-step booking indicator
- Dynamic progress bar
- Active step highlighting
- Fully responsive across screen sizes

### 📱 Responsive Design
- Mobile-first layout
- Desktop and mobile optimised UI
- Adaptive components using Tailwind CSS utilities

### 🎨 UI, UX & Accessibility
- Clean, modern interface
- Consistent theming via CSS variables
- Keyboard-friendly interactions
- Semantic HTML structure
- Optimised layout for readability and usability

---

## 🛠 Tech Stack & Constraints

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Tailwind CSS (CDN)**

### Important Notes
- ❌ No JavaScript frameworks (React, Angular, Vue)
- ✅ Pure HTML, CSS, and JavaScript
- ✅ Modular JS architecture
- ✅ Clean, readable, and well-named classes & IDs

This ensures fast load times, excellent Lighthouse scores, and long-term maintainability.

---

## 📁 Project Structure

project-root <br>
│<br>
├── index.html <br>
├── choosePlan.html <br>
│<br>
├── assests <br>
│ ├── css <br>
│ │ └── style.css <br>
│ │ <br>
│ ├── images <br>
│ │ ├── logo-dark.png <br>
│ │ ├── logo-light.png <br>
│ │ ├── bg-cover.jpg <br>
│ │ ├── plane.png <br>
│ │ └── ... <br>
│ │ <br>
│ └── script <br>
│ ├── header.js <br>
│ ├── countryDropdown.js <br>
│ ├── planSelection.js <br>
│ └── utils.js <br>
│ <br>
└── README.md <br>



---

## 📜 JavaScript Architecture

### `header.js`
- Desktop & mobile navigation handling
- Header dropdown logic
- Overlay and ESC key handling
- Header state management

### `countryDropdown.js`
- Country autocomplete logic
- Keyboard navigation support
- Dynamic chip creation & removal
- Click-outside detection
- Dropdown state control

### `planSelection.js`
- Plan toggle logic (Voyager / Voyager Plus)
- Mobile-first plan selection
- Benefits expand/collapse handling

### `utils.js`
- Shared utilities
- Footer year auto-update
- Reusable helper logic

Each module is **single-responsibility**, improving readability and scalability.

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the Repository
```bash
git clone <repo-url>
cd project-folder