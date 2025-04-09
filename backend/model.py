
# model.py

from PIL import Image
import random

LABELS = [
    'plastic',
    'e-waste',
    'organic',
    'paper',
    'hazardous',
    'general waste'
]

DENSITY_RANGES = {
    'plastic': (0.8, 1.2),
    'e-waste': (2.0, 7.0),
    'organic': (0.5, 1.0),
    'paper': (0.6, 1.5),
    'hazardous': (1.0, 3.5),
    'general waste': (0.3, 2.0)
}

def simulate_detection(image_path):
    img = Image.open(image_path)
    width, height = img.size

    results = []
    for _ in range(random.randint(2, 5)):  # simulate 2–5 objects
        label = random.choice(LABELS)
        low, high = DENSITY_RANGES[label]
        density = round(random.uniform(low, high), 2)

        # Simulate bounding box
        x1 = random.randint(0, width - 100)
        y1 = random.randint(0, height - 100)
        x2 = min(x1 + random.randint(50, 150), width)
        y2 = min(y1 + random.randint(50, 150), height)

        results.append({
            'label': label,
            'density': density,
            'bbox': [x1, y1, x2, y2]
        })

    return results

