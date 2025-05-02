import os
import cv2
from tqdm import tqdm
from PIL import Image

main_folder_path = (
    "C:/Users/migue/Documentos/GitHub/m_watch_collection/src/app/data/watchModels"
)
# main_folder_path = "C:/Users/migue/Documentos/GitHub/MWatchCollectionApp/public/assets/Backgrouds/Details"

def get_list_of_movement():
    movements: dict = {}

    folders = os.walk(main_folder_path, topdown=False)

    for root, dirs, files in folders:
        for path in dirs:
            source_path = os.path.join(root, path)

        for name in files:
            source_path = os.path.join(root, name)

            if ".tsx" in source_path:
                lines: list = []
                with open(source_path, "r") as fopen:
                    lines = fopen.readlines()

                movement_info: str = ""
                for idx, line in enumerate(lines):
                    if "movement: {" in line:
                        movement_info = lines[idx + 1].split('"')[1].strip()
                        if movement_info in movements.keys():
                            movements[movement_info].append(name)
                        else:
                            movements[movement_info] = [name]
                        break

    movements = dict(
        sorted(movements.items(), key=lambda kv: len(kv[1]), reverse=False)
    )
    print(f"----------------------------------")
    print(f"----------------------------------")
    for key, v in movements.items():
        print(f"Movement: {key}: {len(v)}")
    print(f"----------------------------------")
    print(f"-------------- {len(movements.keys())} ----------------")
    print(f"----------------------------------")


get_list_of_movement()
