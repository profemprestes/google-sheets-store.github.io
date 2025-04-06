import os
import csv
import shutil
import re

# Define paths
image_directory = r"G:\03-Tienda\Ultimas Descargas"
csv_file_path = r"G:\03-Tienda\Tienda Pedidos - Precio Hogar - Copia de Sheet1 2.csv"
backup_csv_path = r"G:\03-Tienda\Tienda Pedidos - Precio Hogar - Copia de Sheet1 2_backup.csv"

# Create a backup of the CSV file
shutil.copy2(csv_file_path, backup_csv_path)
print(f"Backup created at {backup_csv_path}")

# Read the CSV file to get product information
products = []
with open(csv_file_path, 'r', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        products.append(row)

# Function to clean a filename
def clean_filename(name):
    # Remove special characters and replace spaces with underscores
    cleaned = re.sub(r'[^\w\s]', '', name)
    cleaned = cleaned.replace(' ', '_').lower()
    return cleaned

# Function to generate consistent image name format
def generate_image_name(product_id, product_title):
    return f"{product_id}_{clean_filename(product_title)}"

# Check if directory exists, create if it doesn't
if not os.path.exists(image_directory):
    os.makedirs(image_directory)
    print(f"Created directory: {image_directory}")

# Now process the actual image files in the directory
print("\nScanning for images to rename...")
image_extensions = ['.jpg', '.jpeg', '.JPG', '.JPEG']
renamed_count = 0

# Create a mapping of product IDs and titles to their standardized image names
image_name_mapping = {}
for product in products:
    product_id = product['id']
    product_title = product['title'].strip()
    current_image = product['image']
    
    # Store the current image name for reference
    image_name_mapping[product_id] = {
        'title': product_title,
        'current_image': current_image,
        'expected_image': generate_image_name(product_id, product_title)
    }

# Rename image files
for filename in os.listdir(image_directory):
    file_path = os.path.join(image_directory, filename)
    
    # Check if it's a file and has a JPEG extension
    if os.path.isfile(file_path) and any(filename.endswith(ext) for ext in image_extensions):
        # Get file name without extension
        name_without_ext = os.path.splitext(filename)[0].lower()
        extension = os.path.splitext(filename)[1]
        
        # Try to match with a product by ID or partial name match
        matched_product_id = None
        
        # First try to match by product ID at the beginning of filename
        for product_id, info in image_name_mapping.items():
            if name_without_ext.startswith(product_id.lower()):
                matched_product_id = product_id
                break
        
        # If no match by ID, try to match by product title
        if not matched_product_id:
            for product_id, info in image_name_mapping.items():
                product_title_clean = clean_filename(info['title'])
                if product_title_clean in name_without_ext or name_without_ext in product_title_clean:
                    matched_product_id = product_id
                    break
        
        # Rename the file if a match was found
        if matched_product_id:
            expected_image_name = image_name_mapping[matched_product_id]['expected_image']
            new_filename = f"{expected_image_name}{extension}"
            new_file_path = os.path.join(image_directory, new_filename)
            
            # Rename the file
            try:
                if not os.path.exists(new_file_path):
                    os.rename(file_path, new_file_path)
                    renamed_count += 1
                    print(f"Renamed: {filename} -> {new_filename}")
                else:
                    print(f"Skipped: {filename} (destination file already exists)")
            except Exception as e:
                print(f"Error renaming {filename}: {e}")
        else:
            print(f"No product match found for image: {filename}")

# Update CSV with consistent image naming
print("\nUpdating CSV with consistent image naming...")
updated_count = 0

# Read the CSV file
rows = []
with open(csv_file_path, 'r', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    header = next(reader)
    rows.append(header)
    
    # Find the index of the image column
    image_index = header.index('image') if 'image' in header else None
    
    if image_index is not None:
        for row in reader:
            product_id = row[0]  # Assuming ID is in the first column
            
            if product_id in image_name_mapping:
                expected_image = image_name_mapping[product_id]['expected_image']
                
                # Update the image name if it doesn't match the expected format
                if row[image_index] != expected_image:
                    print(f"Updating image reference: {row[image_index]} -> {expected_image}")
                    row[image_index] = expected_image
                    updated_count += 1
            
            rows.append(row)

# Write the updated data back to the CSV
with open(csv_file_path, 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(rows)

print(f"\nProcess completed! Updated {updated_count} product entries in CSV and renamed {renamed_count} image files.")