import os
import sys

def generate_image_array(brand_name, folder_path):
    """
    Generate a TypeScript-style array of image paths from a folder.
    
    Args:
        brand_name: str
        folder_path: Path to the folder containing images
    """
    # Supported image extensions
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'}
    
    # Get all files in the folder
    try:
        files = os.listdir(folder_path)
    except FileNotFoundError:
        print(f"Error: Folder '{folder_path}' not found.")
        return
    except PermissionError:
        print(f"Error: Permission denied to access '{folder_path}'.")
        return
    
    # Filter for image files and sort them
    image_files = sorted([
        f for f in files 
        if os.path.isfile(os.path.join(folder_path, f)) and 
        os.path.splitext(f)[1].lower() in image_extensions
    ])
    
    if not image_files:
        print(f"No image files found in '{folder_path}'.")
        return
    
    # Normalize the folder path (remove trailing slashes, convert to forward slashes)
    folder_path = folder_path.rstrip('/\\').replace('\\', '/').split('/')[-1]
    
    # Generate the array output
    print("sliderImages: [")
    for i, filename in enumerate(image_files):
        comma = "," if i < len(image_files) - 1 else ""
        print(f'  "public/assets/Images/{brand_name}/{folder_path}/{filename}"{comma}')
    print("],")
    
    print(f"\n// Found {len(image_files)} image(s)")

if __name__ == "__main__":
    folder_path = "c:/Users/migue/Downloads/t/1952_Omega_Tresor_Honeycomb_266"
    brand_name = "Omega"
    generate_image_array(brand_name, folder_path)
