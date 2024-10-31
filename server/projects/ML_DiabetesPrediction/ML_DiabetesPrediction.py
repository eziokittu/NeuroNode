from pydantic import BaseModel
import pickle

# loading the saved model
model_ML_DiabetesPrediction = pickle.load(open('./projects/ML_DiabetesPrediction/model_DiabetesPrediction.pkl', 'rb'))

class form2(BaseModel):
    Pregnancies: int
    Glucose: int
    BloodPressure: int
    SkinThickness: int
    Insulin: int
    BMI: float
    DiabetesPedigreeFunction: float
    Age: int