import os
from PIL import Image

# Function to compress a single image
def compress_image(input_image_path, output_image_path, quality=100):
    with Image.open(input_image_path) as img:
        # Convert the image to RGB (necessary for saving JPG images)
        img = img.convert("RGB")
        
        # Save with optimized compression (adjust quality)
        img.save(output_image_path, "JPEG", quality=quality, optimize=True)

# Function to recursively find all JPG images and compress them
def compress_images_in_folder(folder_path, quality=85):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
      
            if file.lower().endswith(('.jpg', '.jpeg')):  # Check if the file is a JPG image
                input_image_path = os.path.join(root, file)
                output_image_path = os.path.join(root, f"{file}")
                
                print(f"Compressing {input_image_path}...")
                compress_image(input_image_path, output_image_path, quality)
                print(f"Saved compressed image as {output_image_path}")

# Example usage
folder_path = "C:/Users/migue/Documentos/GitHub/MWatchCollectionResources/public/assets/Images/"  # Replace with the folder path you want to process
compress_images_in_folder(folder_path, quality=30)
# 32 760 Files, 345 Folders
# 6.32