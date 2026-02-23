# 🌤️ React Weather App

A responsive weather application built using React that allows users to search real-time weather conditions for any city. The app fetches live data from a weather API and displays temperature, humidity, and weather conditions with dynamic visuals.

---

## 🚀 Features

* Search weather by city name
* Real-time weather data
* Displays temperature, humidity, min & max temperature
* Dynamic weather icons & background images
* Error handling for invalid city searches
* Clean and responsive user interface

---

## 🏗️ Tech Stack

**Frontend:** React.js, CSS
**UI Library:** Material UI
**API:** OpenWeatherMap API
**Build Tool:** Vite

---

## 📂 Project Structure

```
src/
│
├── WeatherApp.jsx    # Main component & state management
├── SearchBox.jsx     # User input & API request logic
├── DetailBox.jsx     # Weather display card
├── SearchBox.css
├── DetailBox.css
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ukchauhan/React-Weather-App.git
cd React-Weather-App
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

Visit: **[http://localhost:5173](http://localhost:5173)**

---

## 🔑 API Configuration

This project uses the OpenWeatherMap API.

Replace the API key in `SearchBox.jsx`:

```js
const API_KEY = "YOUR_API_KEY";
```

You can generate a free API key from:
👉 [https://openweathermap.org/api](https://openweathermap.org/api)

---

## 🧠 How It Works

1. User enters a city name.
2. App sends request to weather API.
3. Weather data is fetched and processed.
4. State updates automatically.
5. UI re-renders with updated weather information.

---

## 🎯 Key Concepts Used

* React Functional Components
* useState Hook
* Props & Component Communication
* API Fetching
* Conditional Rendering
* Error Handling

---

## 📸 Future Improvements

* Add 5-day weather forecast
* Add loading spinner
* Detect user location automatically
* Add dark mode
* Deploy with live URL

---

## 👨‍💻 Author

**Urvesh Chauhan**
Computer Engineering Student

---

⭐ If you like this project, consider giving it a star!
