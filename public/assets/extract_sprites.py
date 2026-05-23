import sys
import numpy as np
from PIL import Image
from scipy.ndimage import label, find_objects

def extract_sprites(image_path, output_prefix):
    print(f"Processing {image_path}...")
    img = Image.open(image_path).convert("RGBA")
    data = np.array(img)
    
    # Get color channels and alpha
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Treat near-white pixels as transparent
    is_not_white = (r < 240) | (g < 240) | (b < 240)
    mask = (a > 50) & is_not_white
    
    # Label connected components
    labeled_array, num_features = label(mask)
    print(f"Found {num_features} potential objects.")
    
    # Find bounding boxes for each labeled component
    objects = find_objects(labeled_array)
    
    count = 0
    for i, obj in enumerate(objects):
        if obj is None: continue
        
        # obj is a tuple of slices (y_slice, x_slice)
        y_slice, x_slice = obj
        
        # Minimum size filter to ignore dust/noise
        h = y_slice.stop - y_slice.start
        w = x_slice.stop - x_slice.start
        if h < 20 or w < 20: continue
        
        # Add a little padding
        pad = 5
        y0 = max(0, y_slice.start - pad)
        y1 = min(img.height, y_slice.stop + pad)
        x0 = max(0, x_slice.start - pad)
        x1 = min(img.width, x_slice.stop + pad)
        
        # Crop and save
        cropped = img.crop((x0, y0, x1, y1))
        out_name = f"{output_prefix}_{count+1}.png"
        cropped.save(out_name)
        count += 1
        print(f"Saved {out_name} ({w}x{h})")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python extract_sprites.py <input.png> <output_prefix>")
        sys.exit(1)
    extract_sprites(sys.argv[1], sys.argv[2])
