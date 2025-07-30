from fastapi import FastAPI

# Create a FastAPI application instance
app = FastAPI(
    title="Indic Recipe Recommender Backend",
    description="Core API for recipe recommendations.",
    version="0.1.0",
)


# Define a simple "Hello World" endpoint
@app.get("/")
async def read_root():
    """
    A basic endpoint to check if the API is running.
    """
    return {"message": "Hello from Indic Recipe Recommender Backend!"}
