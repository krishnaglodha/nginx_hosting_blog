from fastapi import FastAPI
import random

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


heroes = ['Mahatma Gandhi', 'Bhagat singh', 'Nelson Mandela', 'Subhash Chandra Bose', 'B. R. Ambedkar', 'A. P. J. Abdul Kalam', 'Vallabhbhai Patel', 'J. R. D. Tata']
@app.get("/hero")
async def hero():
    return {"hero of the day":random.choice(heroes)}

