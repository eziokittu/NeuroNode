from projects.ML_StudentPerformance.src.pipelines.predict_pipeline import CustomData, PredictPipeline
from pydantic import BaseModel

# Function to handle the prediction logic
def predict_student_performance(data):
    # Convert the incoming form data to a DataFrame
    pred_df = data.get_data_as_dataframe()

    # Initialize the prediction pipeline
    predict_pipeline = PredictPipeline()
    results = predict_pipeline.predict(pred_df)

    return results[0]  # Return the first prediction result

# Function to handle form data conversion
def create_custom_data(gender, ethnicity, parental_level_of_education, lunch, test_preparation_course, reading_score, writing_score):
    return CustomData(
        gender=gender,
        race_ethnicity=ethnicity,
        parental_level_of_education=parental_level_of_education,
        lunch=lunch,
        test_preparation_course=test_preparation_course,
        reading_score=float(reading_score),
        writing_score=float(writing_score)
    )

class form1(BaseModel):
    gender: str
    ethnicity: str
    parental_level_of_education: str
    lunch: str
    test_preparation_course: str
    reading_score: float
    writing_score: float