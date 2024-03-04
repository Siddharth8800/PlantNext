from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from detect import predict_image
from chat import generate, load_model, clear_context
import shutil


app = FastAPI()

# origins = [
#     "file:///B:/PlantIT/PlantHTML/match.html",  # Replace with the origin of your frontend
# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_model()

@app.get('/')
def root():
    return {'message': 'Hello World'}

@app.post('/uploadfile/')
def upload_file(upload_file: UploadFile = File(...)):
    try:
        path = f'./images/{upload_file.filename}'
        with open(path, 'wb') as file:
            shutil.copyfileobj(upload_file.file, file)
        
        result = predict_image(path)
        return {
            "id": result['id'],
            "name": result['name'],
            "description": result['description']
        }
    except Exception as e:
        return {"error": str(e)}
    
class Question(BaseModel):
    question: str

@app.post('/chat/')
def chat(question: Question):
    try:
        response = generate(question.question)
        return response
    except Exception as e:
        return {"error": str(e)}

@app.post("/clear_context/")
def clear_context():
    try:
        clear_context()
        return {"message": "Context cleared"}
    except Exception as e:
        return {"error": str(e)}