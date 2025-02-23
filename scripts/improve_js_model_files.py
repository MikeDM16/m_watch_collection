import os
import re

def extract_image_source_dir(js_content):
    """Extracts the common image source directory from sliderImages in the given JS content."""
    matches = re.findall(r'sliderImages:\s*\[\s*"([^"]+/)', js_content)
    if matches and all(m == matches[0] for m in matches):
        return matches[0]
    return Exception(js_content)

def process_js_file(file_path):
    """Reads a JS file, extracts the image source directory, and inserts it before sliderImages in the main JSON const."""
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    image_source_dir = extract_image_source_dir(content)
    print(image_source_dir)

    if image_source_dir:
        # Check if the property already exists
        if 'imagesSourceDir' not in content:

            if "saleReport" in content:
                new_content = re.sub(r'(saleReport:\s*\{)', f'imagesSourceDir: "{image_source_dir}",\n' +"saleReport: {\n \1", content)
            else:
                new_content = re.sub(r'(technicalData:\s*\{)', f'imagesSourceDir: "{image_source_dir}",\n' +"technicalData: {\n \1", content)
        
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print(f"Updated: {file_path}")
        else:
            print(f"Already updated: {file_path}")
    else:
        print(f"No consistent sliderImages path found in: {file_path}")

def process_directory(root_folder):
    """Recursively scans all subdirectories for JS files and processes them."""
    for root, _, files in os.walk(root_folder, topdown=False):
        for file in files:
            if file.endswith('.tsx'):
                process_js_file(os.path.join(root, file))

if __name__ == "__main__":
    root_folder = "C:/Users/migue/Documentos/GitHub/m_watch_collection/src/app/data/watchModels"
    print(root_folder)
    process_directory(root_folder)
