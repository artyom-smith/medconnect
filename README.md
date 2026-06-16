# MedConnect (Beta v1.0)

**MedConnect** is an interactive, mobile-friendly educational web application designed for medical university and college students. It serves as a comprehensive digital portal to master essential nursing competencies, test medical knowledge under time constraints, and access vital regulatory documents.

---

## 📚 Covered Modules & Curriculums
The current beta release fully implements three core vocational modules (MDK) under medical training standards:

*   **MDK 01.01:** Ensuring a Safe Environment within Healthcare Organizations (Infection control, waste management, disinfection protocols).
*   **MDK 04.01:** General Patient Care (Vitals monitoring, basic nursing procedures, enema, ice-pack application).
*   **MDK 04.04:** Standards and Technologies in Professional Nursing Practice (Blood pressure monitoring, heart rate assessment, bedsores prevention).

---

## ✨ Key Features
*   📖 **Interactive Guidelines & Manuals:** Well-structured, step-by-step algorithms for medical procedures grouped logically by modules.
*   ⏱️ **Asynchronous Timed Testing:** JavaScript-driven mock exams with automated background countdowns that never freeze the user interface.
*   🧩 **Clinical Case Studies (Situational Tasks):** Practical scenarios designed to develop clinical thinking and decision-making skills.
*   💾 **Regulatory Documents Hub:** Instant view and download access to official medical regulations and sanitary guidelines (e.g., SanPiN documents) in PDF format.
*   🔒 **Feature Toggling (Beta Screens):** Unreleased modules (such as Competitions and Anonymous Chat) are gracefully locked using CSS absolute layouts and pointer-event blocking for a seamless app-like UX.

---

## 🛠️ Tech Stack & Architecture
This project is built using vanilla technologies to ensure lightning-fast performance, strict security, and flawless execution as a static site hosted on GitHub Pages.

*   **Frontend:** Semantic HTML5, CSS3 (Flexible box layouts, responsive UI, app-like fixed windows navigation).
*   **Logic:** Asynchronous Vanilla JavaScript (DOM manipulation, event bubbling control via `stopPropagation`).
*   **Design & Assets:** Custom UI illustrations, vector icon packs, and embedded typography fonts (Montserrat, Plus Jakarta Sans, Roboto).

---

## 👥 Authors & Credits
*   **Front-end Development:** [Artyom Kuznetsov](https://artyom-smith.github.io)
*   **UI/UX Design:** [Polina Zhigalova]

---

## 📝 Future Roadmap
*   Migrate static code into a modern SPA framework (React / Vue) for the alpha release.
*   Convert the fixed-window interface into a true Progressive Web App (PWA) using the pre-configured `manifest.json`.
*   Unlock the global interactive leaderboard and peer-to-peer chat modules.
