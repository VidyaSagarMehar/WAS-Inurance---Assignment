# ✈️ Travel Insurance Quote & Plan Selection

🌐 **Live Preview:** [Link](https://vercel.com/vidya-sagar-mehars-projects/was-inurance-assignment/C1LV3LsphzkNq5EyuhGYPYpYNe2K)

A modern, responsive **Travel Insurance web application** that allows users to:
- Select destinations with smart autocomplete
- Choose travel dates seamlessly
- Compare insurance plans
- Progress through a multi-step booking flow

Built with **clean UI, modular JavaScript, and scalable folder structure** for long-term maintainability.

---

## ✨ Key Features

### 🌍 Destination Selection
- Country autocomplete dropdown
- Keyboard navigation (↑ ↓ Enter Esc)
- Dynamic chip selection
- Duplicate prevention
- “Destination not found” handling

### 📅 Travel Dates
- Native date picker
- Calendar icon hidden for clean UI
- Click anywhere on input to open calendar
- Cross-browser support (Chrome, Edge, Firefox)

### 🧭 Stepper Navigation
- Multi-step booking indicator
- Dynamic progress bar
- Active step highlighting
- Fully responsive

### 📱 Responsive Design
- Desktop & mobile optimized
- Mobile-specific plan selector
- Adaptive layouts using Tailwind CSS

### 🎨 UI & UX
- Clean, modern layout
- Consistent color system via CSS variables
- Smooth transitions & hover states
- Accessible and keyboard-friendly interactions

---

## 🛠 Tech Stack

### Frontend
- **HTML5**
- **Tailwind CSS (CDN)**
- **Vanilla JavaScript (Modular)**
- **CSS Variables for theming**

No frameworks — lightweight, fast, and easy to extend.

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

## 📜 JavaScript Modules

### `header.js`
- Desktop & mobile navigation handling
- Dropdown menu logic
- Overlay & ESC key handling
- Header state management

### `countryDropdown.js`
- Country autocomplete logic
- Keyboard navigation
- Dynamic chip creation & removal
- Click-outside handling
- Dropdown open/close control

### `planSelection.js`
- Plan toggle logic (Voyager / Voyager Plus)
- Mobile-first behavior
- Benefit show/hide handling

### `utils.js`
- Shared utilities
- Footer year auto-update
- Reusable helper functions

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the Repository
```bash
git clone <repo-url>
cd project-folder
