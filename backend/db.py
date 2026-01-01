import csv
import sqlite3

conn = sqlite3.connect("jarvis.db")
cursor = conn.cursor()

#Installed app command---
# query = "CREATE TABLE IF NOT EXISTS sys_command(id integer primary key, name VARCHAR(100), path VARCHAR(1000))"
# cursor.execute(query)

#Web command---
# query = "CREATE TABLE IF NOT EXISTS web_command(id integer primary key, name VARCHAR(100), path VARCHAR(1000))"
# cursor.execute(query)

#Installed app command---
# query ="INSERT OR IGNORE INTO sys_command VALUES(null,'spotify','C:\\Users\\RAKESH\\AppData\\Local\\Microsoft\\WindowsApps\\Spotify.exe')"
# cursor.execute(query)
# conn.commit()


#Web command---
# query ="INSERT OR IGNORE INTO web_command VALUES(null,'Youtube','https://www.youtube.com/')"
# cursor.execute(query)
# conn.commit()

# query ="INSERT OR IGNORE INTO web_command VALUES(null,'facebook','https://www.facebook.com/')"
# cursor.execute(query)
# conn.commit()

# query ="INSERT OR IGNORE INTO web_command VALUES(null,'google','https://www.google.com/')"
# cursor.execute(query)
# conn.commit()

# For deleting stored data from jarvis.db 

# query = "DELETE FROM web_command WHERE name = 'linkedin'"
# cursor.execute(query)
# conn.commit()

# query = "DELETE FROM sys_command WHERE name = 'spotify'"
# cursor.execute(query)
# conn.commit()

# cursor.execute('''CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY, name VARCHAR(200), phone VARCHAR(255), email VARCHAR(255) NULL)''')


# desired_columns_indices = [0, 18]

# with open('contacts .csv', 'r', encoding = 'utf-8') as csvfile:
#     csvreader = csv.reader(csvfile)
#     for row in csvreader:
#         selected_data = [row[i] for i in desired_columns_indices]
#         cursor.execute(''' INSERT INTO contacts(id, 'name', 'phone') VALUES (null, ?, ?);''', tuple(selected_data))

# conn.commit()
# conn.close()

# print("Data inserted successfully")