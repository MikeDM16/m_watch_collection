import os

def rename_js_to_tsx(directory):
    for root, _, files in os.walk(directory):
        for filename in files:
            if filename.endswith(".js"):
                old_path = os.path.join(root, filename)
                new_path = os.path.join(root, filename[:-3] + ".tsx")
                os.rename(old_path, new_path)
                print(f"Renamed: {old_path} -> {new_path}")

# Replace 'your_directory_path' with the actual path
folder_path = "./src/app/data/watchModels"

# rename_js_to_tsx(folder_path)
