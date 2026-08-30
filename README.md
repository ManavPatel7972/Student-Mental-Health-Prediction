# Student Mental Health Prediction

A full-stack application for predicting student mental health using machine learning, built with React (frontend) and FastAPI (backend).

## 📁 Project Structure

```
Student-Mental-Health-Prediction/
│
├── frontend/                           # React frontend application
│   ├── src/
│   │   ├── components/                 # React components
│   │   │   ├── Footer.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── pages/                      # Page components
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Info.jsx
│   │   │   ├── NotFound.jsx
│   │   │   └── Predict.jsx
│   │   ├── services/
│   │   │   └── api.js                  # API client
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css                   # Global styles
│   ├── package.json
│   ├── vite.config.js
│   └── .env                            # Frontend environment variables
│
├── backend/                            # FastAPI backend application
│   ├── main.py                         # FastAPI application with prediction endpoint
│   ├── requirements.txt                # Python dependencies
│   ├── model.pkl                       # Pre-trained ML model
│   ├── Student-Mental-Health.ipynb     # Jupyter notebook for model training
│   └── Student Social Media And Mental Health Impact.csv  # Training dataset
│
└── .venv/                              # Python virtual environment
```

## 🚀 Getting Started

### Run with Docker

From the project root, build and start the complete application:

```bash
docker compose up --build -d
```

- Frontend: `http://localhost:5173`
- Backend and API documentation: `http://localhost:8000/docs`

The frontend proxies `/api` requests to the backend container, so no Docker-specific frontend environment file is needed. To stop the containers:

```bash
docker compose down
```

### Prerequisites

- Python 3.8+ (for backend)
- Node.js 14+ (for frontend)
- npm or yarn (package manager)

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Create and activate virtual environment (if not already done):

```bash
# Windows
python -m venv .venv
.venv\Scripts\activate

# macOS/Linux
python3 -m venv .venv
source .venv/bin/activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run the FastAPI server:

```bash
uvicorn main:app --reload
```

The backend will be available at: `http://127.0.0.1:8000`

**API Documentation**: `http://127.0.0.1:8000/docs` (Swagger UI)

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file (already exists with default configuration):

```
VITE_API_URL=http://127.0.0.1:8000
```

4. Run the development server:

```bash
npm run dev
```

The frontend will be available at: `http://localhost:5173`

## 📋 Available Scripts

### Backend

```bash
cd backend
uvicorn main:app --reload      # Run with auto-reload
uvicorn main:app               # Run production mode
```

### Frontend

```bash
cd frontend
npm run dev                     # Start development server
npm run build                   # Build for production
npm run preview                 # Preview production build
npm run lint                    # Run ESLint
```

## 🔧 Configuration

### Environment Variables (Frontend)

- `VITE_API_URL`: Backend API URL (default: `http://127.0.0.1:8000`)

## 📊 API Endpoints

### Health Check

```
GET /
Response: {"Server Running ......."}
```

### Prediction

```
POST /predict
Content-Type: application/json

Request body:
{
  "age": 20,
  "gender": "Male",
  "country": "India",
  "academic_level": "Undergraduate",
  "most_used_platform": "Instagram",
  "purpose_of_use": "Entertainment",
  "avg_daily_usage_hours": 4.5,
  "daily_unlocks": 50,
  "study_hours": 3,
  "physical_activity_hours": 1,
  "sleep_hours_per_night": 7,
  "stress_level": "Medium"
}

Response:
{
  "predicted_mental_helth_score": 0.75
}
```

## 🎨 Features

- 🧠 Mental health prediction based on social media usage patterns
- 📱 Modern, responsive React frontend with Vite
- ⚡ Fast FastAPI backend with real-time predictions
- 🎯 Interactive prediction form with validation
- 📊 Beautiful UI with gradient effects and animations
- 🔗 CORS enabled for frontend-backend communication

## 🛠️ Technology Stack

### Frontend

- React 19
- Vite
- React Router DOM
- Lucide React (icons)
- React Hot Toast (notifications)
- Tailwind CSS concepts (custom CSS)

### Backend

- FastAPI
- Uvicorn
- Pydantic
- Pandas
- Scikit-learn
- Joblib

## 📝 Model Details

The machine learning model is pre-trained and saved as `model.pkl` in the backend folder. It predicts mental health scores based on:

- Demographic information (age, gender, country)
- Academic level
- Social media platform preferences
- Daily usage patterns
- Physical activity and sleep hours
- Stress levels

## 🐛 Troubleshooting

### Backend Issues

- **Model not found**: Ensure `model.pkl` is in the `backend/` directory
- **Port 8000 already in use**: Change the port with `--port 8001` flag
- **ImportError for dependencies**: Run `pip install -r requirements.txt` in activated virtual environment

### Frontend Issues

- **API connection failed**: Verify backend is running on `http://127.0.0.1:8000`
- **Build errors**: Clear `node_modules` and run `npm install` again
- **Port 5173 in use**: Vite will automatically use the next available port

## 📄 License

This project is open source.