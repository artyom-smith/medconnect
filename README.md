# 🏥 MedConnect

**MedConnect** is an interactive, mobile-friendly educational web application designed for medical university and college students. It serves as a comprehensive digital portal to master essential nursing competencies, test medical knowledge under time constraints, and access vital regulatory documents.

Originally built as a vanilla JS beta, alpha version has been **completely re-engineered from the ground up using React** to achieve high performance, modular architecture, and a seamless app-like user experience.

---

## 🚀 Tech Stack & Architecture

The project follows a modern client-server architecture, splitting frontend user experience from development-stage services.

### Frontend (SPA)
* **Core Framework:** `React.js`
* **Routing:** `React Router` (Client-side routing, protected routes, and dynamic navigation)
* **Build Tool:** `Vite` (for production bundling)
* **Styling:** `Tailwind CSS`
* **Markups & Design:** `Semantic HTML5`, `CSS3` (Flexbox/Grid layouts), responsive UI patterns, and cross-browser compatibility.

### Backend & Dev Services
* **Runtime Environment:** `Node.js`
* **Mock Backend & Automation:** `Python` + `FastAPI` (Service layer serving local development configurations, data simulation, and staging API endpoints)

---

## 🌟 Key Features

* 📚 **Imperative Guidelines & Manuals:** Well-structured, componentized step-by-step algorithms for medical procedures grouped logically by modules.
* ⏱️ **Asynchronous Timed Testing:** React-driven mock exams featuring optimized state-controlled countdowns.
* 🧩 **Clinical Case Studies (Situational Tasks):** Interactive practical scenarios designed to develop critical clinical thinking and decision-making skills.
* 📜 **Regulatory Documents Hub:** Instant view and download access to official medical regulations and sanitary guidelines (e.g., SanPiN documents) in PDF format.
* ⚡ **Integrated Interactive Modules:** Fully implemented core platform services, including a real-time Competitions engine and a secure Peer-to-Peer Chat system, implemented in accordance with modern standards of efficiency and personal data security.
* 📱 **Fluid Responsive Layouts:** Fully optimized for seamless presentation across diverse screen sizes, from compact mobile devices (iOS/Android) to high-resolution desktop monitors.
* 🌐 **Cross-Browser Accessibility:** Engineered and tested to deliver identical performance and visual fidelity on Chrome, Safari, Firefox, and Edge browsers.

---

## 🛠️ Installation & Local Development

To spin up the project locally in development mode, follow these steps:

### Prerequisites
Make sure you have **Node.js** and **Python 3.8+** installed on your system.

### 1. Frontend Setup
Clone the repository and install dependencies:
```bash
git clone https://github.com
cd medconnect
npm install
```
Start the Vite local development server:
```bash
npm run dev
```

### 2. Development Server Setup (Python FastAPI)
Navigate to your backend/server directory and launch your service script or run directly via Uvicorn:
```bash
# Example if using standard Uvicorn launch:
pip install fastapi uvicorn
uvicorn main:app --reload
```

---

## 🗺️ Future Roadmap

* 🌐 **Full Staging Integration:** Migrate the lightweight Python FastAPI server into a production-ready cloud backend.
* 📱 **PWA Support:** Convert the interface into a true Progressive Web App (PWA) using Vite plugins for offline capability.
* 🥇 **Global Leaderboards:** Implement WebSocket connections for real-time peer-to-peer chat modules and competitive quizzes.

---

## 👥 Authors & Credits

* **Front-end & Server-side Development:** [Artyom Kuznetsov](https://github.io)
* **UI/UX Design:** Polina Zhigalova
