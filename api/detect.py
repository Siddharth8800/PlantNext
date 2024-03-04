from ultralytics import YOLO
from pymongo import MongoClient

image_paths = r"B:\PlantIT\api\images\5.jpg"
model_loc = r"B:\PlantIT\PlantNext\api\best.pt"
save_dir = r"B:\PlantIT\PlantNext\api\images"
disease_model = r"B:\PlantIT\PlantNext\api\bestDisease.pt"

#MongoDB connection
client = MongoClient(port=27017)

# Step 2: Choose the database and collection
db = client['plant_app']
collection = db['plants']


def predict_image(image_path):
    model = YOLO(model=model_loc)
    predictions = model.predict(source=image_path)
    cls = int(predictions[0].boxes.cls[0].item())
    ans = collection.find_one({'id': cls})
    return ans


def predict_disease(image_path):
    model = YOLO(model=disease_model)
    predictions = model.predict(source=image_path)
    cls = int(predictions[0].boxes.cls[0].item())
    ans = collection.find_one({'id': cls})
    return ans

# def predict_image(image_path):
#     model = YOLO(model=model_loc)
#     for i, class_name in enumerate(class_names):
#         class_dict[i] = class_name
#     predictions = model.predict(source=image_path)
#     cls = int(predictions[0].boxes.cls[0].item())
#     class_name = class_dict[cls]
#     return ({"Class_Index": cls, "Class_Name": class_name, "Lorem_Ipsum": "Lorem Ipsum Dolor Sit Amet"})
 

# with open("predicted_labels5.txt", '+w') as file:
#       for idx, prediction in enumerate(predictions[0].boxes.xywhn): # change final attribute to desired box format
#           cls = int(predictions[0].boxes.cls[idx].item())
#           # Write line to file in YOLO label format : cls x y w h
#           file.write(f"{cls}\n")