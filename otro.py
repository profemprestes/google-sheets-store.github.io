import csv

# Define the file path
csv_file_path = r"G:\03-Tienda\Tienda Pedidos - Precio Hogar - Copia de Sheet1 2_backup.csv"

# Read the CSV file
rows = []
with open(csv_file_path, 'r', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        # Check if this is the Mochila Chuwi row
        if row[0] == 'OTR008' and 'Mochila Chuwi' in row[1]:
            row[4] = 'OTR008_mochila_chuwi_15'
        
        # Check if this is the Tripode row
        if row[0] == 'TEC015' and 'Tripode para Parlante' in row[1]:
            row[4] = 'TEC015_tripode_para_parlante_altura_1'
        
        rows.append(row)

# Write the updated data back to the CSV file
with open(csv_file_path, 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(rows)

print("CSV file updated successfully!")