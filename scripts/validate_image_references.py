import os
import re
from pathlib import Path

def find_slider_images(file_path):
    """
    Extract sliderImages array from a TSX file.
    
    Args:
        file_path: Path to the TSX file
        
    Returns:
        List of image paths found in sliderImages array
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"  ⚠️  Error reading file: {e}")
        return []
    
    # Pattern to match sliderImages array
    # Looks for: sliderImages: [ ... ],
    pattern = r'sliderImages:\s*\[(.*?)\]'
    match = re.search(pattern, content, re.DOTALL)
    
    if not match:
        return []
    
    array_content = match.group(1)
    
    # Extract all quoted strings (image paths)
    image_paths = re.findall(r'["\']([^"\']+)["\']', array_content)
    
    return image_paths

def validate_images(tsx_folder, images_base_folder):
    """
    Validate that all images referenced in TSX files exist.
    
    Args:
        tsx_folder: Folder containing TSX files with sliderImages arrays
        images_base_folder: Base folder where actual images are stored
    """
    tsx_folder = Path(tsx_folder)
    images_base_folder = Path(images_base_folder)
    
    if not tsx_folder.exists():
        print(f"❌ TSX folder not found: {tsx_folder}")
        return
    
    if not images_base_folder.exists():
        print(f"❌ Images base folder not found: {images_base_folder}")
        return
    
    # Find all TSX files
    tsx_files = list(tsx_folder.rglob("*.tsx"))
    
    if not tsx_files:
        print(f"⚠️  No TSX files found in {tsx_folder}")
        return
    
    print(f"🔍 Scanning {len(tsx_files)} TSX file(s)...\n")
    
    total_images = 0
    missing_images = 0
    files_with_issues = 0
    
    for tsx_file in tsx_files:
        report = f"📄 {tsx_file.name}"
        
        image_paths = find_slider_images(tsx_file)
        
        if not image_paths:
            report += f"\n  ℹ️  No sliderImages array found\n"
            print(report)
            continue
        
        # print(f"  Found {len(image_paths)} image(s)")
        
        file_has_issues = False
        
        for img_path in image_paths:
            total_images += 1
            
            # Remove "public/" prefix if present
            if img_path.startswith("public/"):
                img_path = "/".join(img_path.split('/')[-3:])  # keep only the specific path 
            
            # Convert forward slashes to OS-specific path separator
            img_path = img_path.replace('/', os.sep)
        
            # Construct full path
            full_path = images_base_folder / img_path

            # Check if file exists
            if not full_path.exists():
                if not file_has_issues:
                    report += f"\n  ❌ Missing images:"
                    file_has_issues = True
                    files_with_issues += 1
                
                report += f"\n     - {img_path}"
                missing_images += 1
        
        if file_has_issues:
            print(report)
        
        
    
    # Summary
    print("=" * 60)
    print("📊 SUMMARY")
    print("=" * 60)
    print(f"Total TSX files scanned: {len(tsx_files)}")
    print(f"Total images referenced: {total_images}")
    print(f"Missing images: {missing_images}")
    print(f"Files with issues: {files_with_issues}")
    
    if missing_images == 0:
        print("\n✅ All images exist!")
    else:
        print(f"\n⚠️  {missing_images} image(s) missing")

if __name__ == "__main__":
    # Configuration
    tsx_folder = r"C:\Users\migue\Documentos\GitHub\m_watch_collection\src\app\data\watchModels"
    images_base_folder = r"C:\Users\migue\Documentos\GitHub\MWatchCollectionResources\public\assets\Images"
    
    print("🔎 Image Path Validator")
    print("=" * 60)
    print(f"TSX folder: {tsx_folder}")
    print(f"Images folder: {images_base_folder}")
    print("=" * 60)
    print()
    
    validate_images(tsx_folder, images_base_folder)