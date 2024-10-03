# PlantNext

PlantNext is a comprehensive web application designed for plant enthusiasts and gardeners. 
It leverages the power of Next.js for the frontend and FastAPI for the backend, providing a seamless experience for users to interact with their garden data, receive plant care advice, and utilize image recognition for plant disease detection.

## Features

- **Garden Management**: Users can add, view, and manage their garden's plants through an intuitive interface.
- **Chatbot**: A chatbot is available for users to ask questions related to plant care and receive instant advice.
- **Image Recognition**: Users can upload images of their plants to detect potential diseases and receive suggestions for treatment. Yolov8 models are utilized for this purpose
- **Responsive Design**: The application is fully responsive, ensuring a great user experience on both desktop and mobile devices.

## Getting Started

### Prerequisites

- Node.js
- Python 3.10 or higher
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone https://github.com/siddharth8800/PlantNext.git
cd PlantNext
```
2. Install the frontend dependencies:

```bash
cd first
npm install
```

3. Start the frontend server:

```bash
npm run dev
```

Open `http://localhost:3000` to view the frontend application in the browser.

4. Install the backend dependencies:

```bash
cd ../api
pip install -r requirements.txt
```
5. Start the FastAPI server:
    
```bash
uvicorn main:app --reload
```

The FastAPI server will be available at `http://localhost:8000`.

### Configuration
- Ensure MongoDB is running on your system.
- You may need to adjust CORS settings in `api/main.py` to match your frontend's URL if it's different from the default.

### Usage
- Garden Management: Navigate to the Garden page to add and manage your plants.
- Chatbot: Access the Chatbot from the sidebar to ask questions and receive advice.
Image Recognition: Use the Upload feature to detect diseases in plant images.


## Screenshots

### Homescreen
![WhatsApp Image 2024-10-03 at 9 02 56 PM](https://github.com/user-attachments/assets/598ef016-8f8d-4d27-88da-de23fe267f18)



### Assistant Screen
Here we use our Python backend server and the trained Yolov8 model to make predictions and a locally hosted LLM Mistral 7B running on Metal API to answer any queries the user has.

![WhatsApp Image 2024-10-03 at 8 40 03 PM](https://github.com/user-attachments/assets/e0dc4fbf-6bfb-4a64-8e59-ccd7e6acd27c)

![WhatsApp Image 2024-10-03 at 8 40 03 PM (1)](https://github.com/user-attachments/assets/11b08a17-2182-46bb-bf3b-52ee3d002fc5)


### Garden Screen
![WhatsApp Image 2024-10-03 at 8 40 03 PM (2)](https://github.com/user-attachments/assets/b2d19913-1c37-4fe4-b89c-10615fd91832)




