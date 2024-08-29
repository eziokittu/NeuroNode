from fastapi import FastAPI, File, UploadFile, Request, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import pandas as pd
import numpy as np
from projects.DL_CatDog.DL_CatDog import preprocess_image, read_image, model_DL_CatDog
from projects.ML_StudentPerformance.ML_StudentPerformace import predict_student_performance, create_custom_data, form1

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to specific origins if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check route
@app.get("/api/working")
def home():
    return {"message": "FastAPI server is running on Hugging Face Spaces!"}

# # Prediction route for DL_CatDog
@app.post("/api/predict1")
async def predict_DL_CatDog(file: UploadFile = File(...)):
    try:
        image = read_image(file)
        preprocessed_image = preprocess_image(image)
        prediction = model_DL_CatDog.predict(preprocessed_image)
        predicted_class = "Dog" if np.round(prediction[0][0]) == 1 else "Cat"
        return JSONResponse(content={"ok": 1, "prediction": predicted_class})
    except Exception as e:
        return JSONResponse(content={"ok": -1, "message": f"Something went wrong! {str(e)}"}, status_code=500)

# New Prediction route for ML_StudentPerformance
@app.post("/api/predict2")
async def predict_student_performance_api(request: form1):
    # print(request, end='\n\n\n\n')
    try:
        # Create the CustomData object
        custom_data = create_custom_data(
            gender= request.gender,
            ethnicity= request.ethnicity,
            parental_level_of_education= request.parental_level_of_education,
            lunch= request.lunch,
            test_preparation_course= request.test_preparation_course,
            reading_score= request.reading_score,
            writing_score= request.writing_score
        )
        # Perform the prediction
        result = predict_student_performance(custom_data)
        return JSONResponse(content={"ok": 1, "prediction": result})
    except Exception as e:
        return JSONResponse(content={"ok": -1, "message": f"Something went wrong! {str(e)}"}, status_code=500)

# Main function to run the FastAPI server
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=7860)
