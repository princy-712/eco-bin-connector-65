# app.py

import os
from flask import Flask, request, send_file, jsonify
from werkzeug.utils import secure_filename
from model import simulate_detection
from PIL import Image, ImageDraw, ImageFont

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/')
def index():
    return "📦 Waste Classifier API — POST an image to /api/classify"


@app.route('/api/classify', methods=['POST'])
def classify():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    try:
        img = Image.open(filepath).convert("RGB")
    except Exception:
        return jsonify({'error': 'Invalid image file'}), 400

    # Simulate detection
    detections = simulate_detection(filepath)

    # Draw boxes and labels
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("arial.ttf", 20)
    except:
        font = ImageFont.load_default()

    for det in detections:
        x1, y1, x2, y2 = det['bbox']
        label = det['label']
        density = det['density']
        label_text = f"{label} ({density} g/cm³)"

        draw.rectangle([x1, y1, x2, y2], outline="red", width=3)
        draw.text((x1 + 5, y1 - 20), label_text, fill="yellow", font=font)

    # Save output image
    output_path = os.path.join(app.config['UPLOAD_FOLDER'], f"result_{filename}")
    img.save(output_path)

    # Return image
    return send_file(output_path, mimetype='image/jpeg')


if __name__ == '__main__':
    app.run(debug=True)

