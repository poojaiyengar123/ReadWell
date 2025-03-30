# ReadWell 📖

**ReadWell** is an accessibility-focused application that allows users to upload images and transcribe them into text. Designed with dyslexia-friendly formatting, ReadWell aims to make reading easier and more accessible for individuals with dyslexia. 

## Features 

### 1. Image Upload and Transcription
* Users can upload images containing text.
* The application extracts and transcribes the text from the image.

### 2. Dyslexia-Friendly Text Display
* Transcribed text is presented in a format optimized for readability.
* Font styles and layouts are tailored to enhance accessibility.

### 3. Image Gallery
* Users can view previously uploaded images in an organized gallery. 
* Provides easy access to past transcriptions.

## Screenshots

### 1. Image Upload Page
Users can upload an image for transcription in a simple and intuitive interface.

  ![Image Upload Page](src/assets/image_upload_page.png)
  
### 2. Transcription Display
Once an image is uploaded, ReadWell displays the transcribed text in a dyslexia-friendly format. 

  ![Transcription Display Page](src/assets/transcription_display_page.png)

### 3. Image Gallery
A dedicated section allows users to browse previously uploaded images and their transcriptions.

  ![Image Gallery Page](src/assets/image_gallery_page.png)

## Planned Improvements

#### 1. Text-to-Speech Integration
  * Provide an audio version of transcribed text to further improve accessibility.

#### 2. Multi-Language Support
  * Enable text transcription in multiple languages.

## Technologies Used

* **Frontend Framework**: Vite + React
* **Backend**: Python
* **OCR Technology**: Tesseract
* **Languages**: TypeScript, HTML, CSS

## How to Use ReadWell

#### 1. Upload an Image
  * Select an image containing text and upload it to ReadWell.

#### 2. View Transcription
  * Read the extracted text in a dyslexia-friendly format.

#### 3. Browse Past Uploads
  * Access previosuly uploaded images and their transcriptions in the gallery. 

## Setup Instructions

Follow these steps to run ReadWell locally:

### Prerequisites

Before running this application, you'll need to install:
* Python (3.8 or higher)
* Node.js and npm 
* Tesseract OCR (required for OCR functionality)

1. Install Tesseract OCR
Tesseract OCR is required for the text extraction functionality. 

**Windows**
* Download and install from UB Mannheim
* Note the installation path (default is `C:\Program Files\Tesseract-OCR\`)
* Make sure to check "Add to PATH" during installation

**macOS**

        brew install tesseract

**Linux(Ubuntu/Debian)**

        sudo apt update
        sudo apt install tesseract-ocr

2. Clone the repository:

        git clone https://github.com/poojaiyengar123/ReadWell.git
        cd ReadWell

3. Set up the Backend
* Navigate to the backend directory:

        cd READWELL/backend

* Install Python dependencies:

        pip install -r requirements.txt

4. Configure Tesseract path (if needed):
* Open `transcribe_image.py`
* Adjust the following line at the top based on your installation:

        import pytesseract
        pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'  # For Windows
        # pytesseract.pytesseract.tesseract_cmd = r'/usr/bin/tesseract'  # For Linux
        # pytesseract.pytesseract.tesseract_cmd = r'/usr/local/bin/tesseract'  # For macOS

5. Start the backend server: 

        uvicorn server:app --reload 

* The server will run at http://localhost:8000

6. Set up the Frontend
* Navigate to the frontend directory: 

        cd READWELL/read-well

* Install JavaScript dependencies:

        npm install

* Start the development server:

        npm run dev

7. Open your browser and navigate to:

        http://localhost:5174
