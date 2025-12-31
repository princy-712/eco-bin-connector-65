# ♻️ AI Waste Detector – Eco-Bin Connector

AI Waste Detector is an intelligent waste classification system that leverages AI to identify various types of waste. The project features a React + TypeScript frontend and a Flask backend that processes waste images using a trained AI model, promoting efficient waste management.




AI Waste Detector – Eco-Bin Collector is a smart waste classification system designed to promote eco-friendly habits through the power of artificial intelligence. It allows users to upload images of waste items, which are then analyzed by a trained AI model to determine their category—such as plastic, e-waste, organic, paper, hazardous, or general waste.
Built with a modern tech stack including React + TypeScript on the frontend and Flask + Python on the backend, this project provides an intuitive and responsive user experience. The goal is to assist in proper waste segregation, reduce environmental pollution, and support sustainable living with the help of intelligent automation.




## API Reference

#### Get all items

#####   1.Pillow (PIL):
```http 
  https://pillow.readthedocs.io/en/stable/
```
#####   2.Flask: 
```http
https://flask.palletsprojects.com/
```
##### 3.Possible Datasets:
```http
TACO (Trash Annotations in Context): http://tacodataset.org/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `PIL.Image` | `Image Object` |Used for loading and preprocessing waste images before classification.
  |`NumPy Array` | `ndarray` |Converts images into numerical format for AI model processing.
|`LABELS` | `List[str]` |Categories of waste (`["Plastic", "E-waste", "Organic", "Paper", "Hazardous", "General Waste"]`).
|`random.choice` | `Function` |May be used to simulate or augment predictions for testing.
| `Flask API` | `Flask API` |Handles image uploads and sends predictions from the AI model to the frontend.
| `Model.predict()` | `Function` |AI model function that processes an image and returns a predicted waste category.
| `Dataset` | `TACO / WasteNet `(Optional) |Training dataset (if applicable) used for model training.




## Project Structure


`eco-bin-collector/`

`├── tailwind.config.ts`  
`├── index.html`  
`├── package.json`  
`├── vite.config.ts`  
`├── .gitignore`

`│── src/`  
`│   ├── components/`  
`│   │   ├── AIWasteDetector.tsx`  
`│   │   ├── FeatureCard.tsx`  
`│   │   ├── Footer.tsx`

`│   │   ├── Hero.tsx`  
`│   │   ├── Navbar.tsx`  
`│   │   ├── PageTransition.tsx`  
`│   ├── hooks/`  
`│   │   ├── use-mobile.tsx`  
`│   │   ├── use-toast.ts`  
`│   ├── lib/`  
`│   │   ├── utils.ts`  
`│   ├── pages/`  
`│   │   ├── About.tsx`  
`│   │   ├── Contact.tsx`  
`│   │   ├── Feature.tsx`  
`│   │   ├── Index.tsx`  
`│   │   ├── NotFound.tsx`  
`│`  
`│── public/`  
`│   ├── favicon.ico`  
`│   ├── placeholder.svg`  
`│   ├── robots.txt`  
`│`  
`│── backend/`  
`│   ├── app.py  # Flask backend`  
`│   ├── model.py  # AI model`  


## 🎨 Frontend (React + TypeScript)

The frontend is built with React + TypeScript using Vite for fast performance.The project follows a modular structure with:

Components: Reusable UI elements (Navbar, Hero, Footer, etc.).

Pages: Different sections of the app (Index, About, Contact, etc.).

Hooks: Custom React hooks for mobile responsiveness and toast notifications.

Lib: Utility functions.

### 🛠️ Setup

Navigate to the frontend directory:
```http
cd eco-bin-collector
```

Install dependencies:
```http
npm install
```
Start the development server:
## 🧠 Backend (Flask + AI Model)

The backend is powered by Flask and a trained AI model to classify waste into:

🛍 Plastic

🔋 E-waste

🌱 Organic

📄 Paper

⚠️ Hazardous

🗑 General Waste

### 🛠️ Setup

Navigate to the backend folder:
```http
cd backend
```
Create a virtual environment:
```http
python -m venv venv  
source venv/bin/activate  # Mac/Linux  
venv\Scripts\activate  # Windows
```
Install dependencies:
```http
pip install -r requirements.txt
```
Run the Flask server:
```http
python app.py
```

## 🚀 Features

✅ AI-powered waste detection

✅ User-friendly React UI

✅ Fast and efficient with Vite

✅ Responsive design with TailwindCSS

✅ Flask API for seamless image processing


## 🛠️ Technologies Used

### Frontend:

- React (TypeScript)

- Vite

- Tailwind CSS

- shadcn ui

### Backend:

- Flask

- PIL (Pillow)

- NumPy

- Custom AI Model
## Deployment

To deploy this project run

```bash
  npm run deploy
```

or

Simply open [Lovable](https://lovable.dev/projects/035ac17e-244b-4dd7-b92e-fa73ad64cc05) and click on Share -> Publish.

#### I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
  


**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```
## Authors

- [@princy-712](https://github.com/princy-712)


## Badges
visit for  badges : [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Documentation

[Documentation](https://linktodocumentation)


## Feedback

If you have any feedback, please reach out to us at [princyy.sahu@gmail.com]

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Roadmap

🛣️ Roadmap
Here’s a simplified view of the development stages for the AI Waste Detector project:

### 🚀 Initial Release
✅ Build AI model for waste classification

✅ Develop Flask backend for image processing

✅ Create React frontend with image upload feature

✅ Connect frontend to backend API

✅ Apply responsive design with TailwindCSS

### 🔧 Upcoming Improvements
🔄 Improve model accuracy with more training data

🖼 Add drag-and-drop image upload + preview

🧪 Add loading states and error handling

📈 Display results with better UI feedback

### 🌐 Deployment Goals
☁️ Deploy backend to Render or Heroku

🖥 Deploy frontend to Vercel or Netlify

📂 Create a downloadable dataset or open API

🧩 Invite community contributions



## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start

```
<img width="1470" height="837" alt="Screenshot 2025-12-31 at 10 54 45 PM" src="https://github.com/user-attachments/assets/57193592-6d48-48fa-8b26-7603f6511372" />
<img width="1470" height="839" alt="Screenshot 2025-12-31 at 10 55 26 PM" src="https://github.com/user-attachments/assets/1d466422-9153-41e5-9989-151471232631" />
<img width="1470" height="840" alt="Screenshot 2025-12-31 at 10 56 02 PM" src="https://github.com/user-attachments/assets/dde8a553-80e8-4727-9b9b-39fe7b110a96" />
<img width="1470" height="838" alt="Screenshot 2025-12-31 at 10 57 20 PM" src="https://github.com/user-attachments/assets/feee36b9-f7d0-4e9b-aa99-cde31a9248fb" />
<img width="1470" height="838" alt="Screenshot 2025-12-31 at 10 58 19 PM" src="https://github.com/user-attachments/assets/557f2102-5afe-4ca1-a071-48ac3425095c" />

## Tested (Result)
![result_WhatsApp_Image_2025-03-30_at_16 01 11_18bca005](https://github.com/user-attachments/assets/403ffb4c-98c1-47dc-9f88-c183c4ce76d8)











