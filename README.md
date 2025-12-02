# 🚗 Vehicle Management System - IIT (ISM) Dhanbad

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

A comprehensive **Vehicle Entry & Exit Monitoring System** designed for **IIT (ISM) Dhanbad**. This application streamlines security operations by providing real-time tracking of vehicle movements, digital record-keeping, and automated reporting.

---

## ✨ Features

### 📊 Live Dashboard
- **Real-time Monitoring**: View vehicles currently inside the campus.
- **Statistics**: Instant access to total entries, current occupancy, and daily exit counts.
- **Search**: Quickly find vehicle records by driver name or vehicle number.
- **Quick Actions**: Record vehicle exits with a single click.

### 📝 Manual Entry
- **Digital Logging**: Replace paper registers with a digital form.
- **Validation**: Ensures all necessary details (Driver Name, Vehicle No, ID No) are captured.
- **Feedback**: Instant confirmation via toast notifications.

### 📈 Reports
- **Data Analysis**: Generate reports for specific time periods (Coming Soon).
- **Export**: Download data for administrative use.

### 📞 Contact Security
- **Emergency Access**: Quick access to campus security contact details.

---

## 🛠️ Tech Stack

- **Frontend**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Routing**: [React Router DOM](https://reactrouter.com/) (v7)
- **Backend & Database**: [Firebase](https://firebase.google.com/) (Firestore, Auth)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aditya-Shah-0/MPDI.git
   cd MPDI/my-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_CONFIG='{"apiKey":"YOUR_API_KEY","authDomain":"YOUR_AUTH_DOMAIN","projectId":"YOUR_PROJECT_ID","storageBucket":"YOUR_STORAGE_BUCKET","messagingSenderId":"YOUR_SENDER_ID","appId":"YOUR_APP_ID"}'
   VITE_FIREBASE_COLLECTION_PATH='/your/collection/path'
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   Navigate to `http://localhost:5173` to view the app.

---

## 📂 Project Structure

```
src/
├── assets/         # Images and icons
├── components/     # Reusable UI components (Header, Footer, Cards)
├── services/       # Firebase configuration and API services
├── App.jsx         # Main application layout and routing
├── main.jsx        # Entry point
└── index.css       # Global styles and Tailwind imports
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Made with ❤️ for IIT (ISM) Dhanbad
</p>
