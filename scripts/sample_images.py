import os
import cv2
from tqdm import tqdm
from PIL import Image

main_folder_path = "C:/Users/migue/Documentos/GitHub/MWatchCollectionResources/public/assets/Images/Brands_Backgrounds/"
main_folder_path = "C:/Users/migue/Documentos/GitHub/MWatchCollectionResources/public/assets/Images/Movements/Certina"
main_folder_path = "C:/Users/migue/Documentos/GitHub/MWatchCollectionResources/public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/"


def remove_lower_extension_images():
    folders = os.walk(main_folder_path, topdown=False)
    for root, dirs, files in tqdm(folders):
        for path in dirs:
            source_path = os.path.join(root, path)

        for name in files:
            source_path = os.path.join(root, name)

            if (
                "500x500" in source_path
                or "800x800" in source_path
                or "200x200" in source_path
                or "1200x1200" in source_path
            ):
                continue

            elif "#PANDORA#" in name:
                os.remove(source_path)
                continue

            if "jpg" in source_path or "png" in source_path:
                try:
                    print(source_path)
                    img = Image.open(source_path)
                    # os.chmod(source_path, 0o777)
                    # os.remove(source_path)
                    new_name = f"{source_path.split('.')[0]}#PANDORA#.{source_path.split('.')[-1].upper()}"
                    img.save(os.path.join(root, new_name))
                    img.close()
                    os.remove(source_path)
                    continue
                except Exception as e:
                    print(source_path)
                    print(e)


def make_all_default_images_upper_case_extension():
    folders = os.walk(main_folder_path, topdown=False)
    for root, dirs, files in tqdm(folders):
        for name in files:
            source_path = os.path.join(root, name)
            if "#PANDORA#" in source_path:
                try:
                    img = Image.open(source_path)
                    # new_name = ".".join(source_path.split(".")[:-1]) + ".JPG"
                    new_name = source_path.replace("#PANDORA#", "")
                    img.save(os.path.join(root, new_name))
                    img.close()

                    os.remove(source_path)
                except Exception as e:
                    print(source_path)
                    print(e)


def create_sub_images():
    idx = 0
    slice = 40
    #[idx*slice:idx*slice +slice]
    folders = list(os.walk(main_folder_path, topdown=False))
    for root, dirs, files in tqdm(folders):
        for name in files:
            source_path = os.path.join(root, name)
            if (
                "500x500" in source_path
                or "800x800" in source_path
                or "200x200" in source_path
                or "sell_report.JPG" in source_path
                or "1200x1200" in source_path
            ):
                continue
            else:
                # print(source_path)
                for size in [200, 500, 800, 1200]:
                    try:
                        new_name = (
                            ".".join(source_path.split(".")[0:1])
                            + f"_{size}x{size}."
                            + source_path.split(".")[-1].upper()
                        )
                        # img = cv2.imread(source_path)
                        # resized =  cv2.resize(img, (size, size), interpolation=cv2.INTER_LANCZOS4)
                        # cv2.imwrite(os.path.join(root, new_name), resized)
                        img = Image.open(source_path)
                        img.thumbnail((size, size), Image.LANCZOS)
                        img.save(
                            os.path.join(root, new_name), optimize=True, quality=70
                        )

                    except Exception as e:
                        print(name)
                        print(e)

                # compress main image
                #img = Image.open(source_path)
                #img.save(source_path, optimize=True, quality=70)

def create_sale_images():
    idx = 0
    slice = 40
    #[idx*slice:idx*slice +slice]
    folders = list(os.walk(main_folder_path, topdown=False))
    for root, dirs, files in tqdm(folders):
        for name in files:
            source_path = os.path.join(root, name)
            if "sell_report.jpg" in source_path.lower():
                try:
                    new_name = "saleReport.JPG"
                    # img = cv2.imread(source_path)
                    # resized =  cv2.resize(img, (size, size), interpolation=cv2.INTER_LANCZOS4)
                    # cv2.imwrite(os.path.join(root, new_name), resized)
                    img = Image.open(source_path)
                    img.save(
                        os.path.join(root, new_name), optimize=True, quality=100
                    )

                except Exception as e:
                    print(source_path)
                    print(e)

     


# remove_lower_extension_images()
# make_all_default_images_upper_case_extension()
create_sub_images()

# 6.29 , 33103 

# A5HAM3RS
