# iTunes Media Search App

This is a full-stack web application that allows users to search for media using the iTunes Search API. Users can explore songs, podcasts, movies, and more — and even add items to a local favourites list. Built as a capstone project for HyperionDev.

---

##  Features

- Search by term & media type (music, movies, podcasts, etc.)
- User-friendly React interface
- Add/Remove favourites without needing to log in
- LocalStorage preserves favourites even after refresh
- Back-end uses Node.js + Express to fetch data from iTunes API
- Error handling and clean feedback via `react-toastify`

---

## Technologies Used

### Front-end:
- React
- Axios
- React Toastify
- CSS (custom styling)

### Back-end:
- Node.js
- Express
- Axios
- CORS
- dotenv

---

## Folder Structure

project-root/
│
├── backend/
│ ├── routes/
│ │ └── itunes.js
│ ├── middleware/
│ │ └── auth.js (optional, unused)
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── SearchBar.js
│ │ │ ├── MediaList.js
│ │ │ └── Favourites.js
│ │ ├── App.js
│ │ └── App.css
│ └── package.json
│
└── README.md


---

## 🛠 How to Run This Project

### Backend (Express API)

1. Navigate to the backend folder:
   ```bash
   cd backend

Install dependencies: 

npm install

3. Create a .env file:
PORT=5000
JWT_SECRET=anyplaceholder (not needed for this app)

Start the server: node server.js

Frontend (React App)
In a new terminal, go to the frontend folder:

cd frontend

Install dependencies:
npm install

Start the app:
npm start

Open your browser at:
http://localhost:3000