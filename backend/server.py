from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import uuid
import os

"""
@Author Arnav Dadarya
"""

app = FastAPI()

# Enable CORS
app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:5174"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

# Directory to store uploaded images
UPLOAD_DIR = "uploaded_images"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/upload/")
async def upload_image(file: UploadFile = File(...)):
  image_id = str(uuid.uuid4())
  file_ext = os.path.splitext(file.filename)[-1]
  file_path = os.path.join(UPLOAD_DIR, f"{image_id}{file_ext}")

  with open(file_path, "wb") as f:
    f.write(await file.read())

  return {"image_id": image_id, "filename": f"{image_id}{file_ext}"}

@app.get("/image/{image_id}")
async def get_image(image_id: str):
  for file_name in os.listdir(UPLOAD_DIR):
    if file_name.startswith(image_id):
      file_path = os.path.join(UPLOAD_DIR, file_name)
      return FileResponse(path=file_path, media_type="image/jpeg", filename=file_name)

  raise HTTPException(status_code=404, detail="Image not found")