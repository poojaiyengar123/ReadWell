from PIL import Image
import pytesseract

pytesseract.pytesseract.tesseract_cmd = r'/usr/local/bin/tesseract'

def image_to_text(image_path, lang='eng'):
    """
    Extracts text from an image using OCR.

    Args:
        image_path: Path to the image file.
        lang: Language of the text in the image (default is English 'eng').

    Returns:
        Extracted text as a string.
    """
    try:
        image = Image.open(image_path)
        text = pytesseract.image_to_string(image, lang=lang)
        return text
    except Exception as e:
        return f"Error: {e}"