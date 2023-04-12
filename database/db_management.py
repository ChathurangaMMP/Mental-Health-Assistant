import sqlite3
# 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
'''
Tables and functions
--------------------------

user_signup
    - create_user_signup_table
    - add_user_signup_data

counsellor_signup
    - create_counsellor_signup_table
    - add_counsellor_signup_data

user_questionary
    - create_user_questionary
    - add_user_questionary_data

user_questionary_response
    - create_user_questionary_responses
    - add_user_questionary_responses_data

# general functions
    - create_all_tables
    - read_all_data_from_table
    - read_data_record_from_table
    - update_record_in_table
    - delete_table
    - delete_record_from_table
'''

filename = 'medx_database.db'


def create_user_signup_table():
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS user_signup
                    (email TEXT PRIMARY KEY, 
                    phone_number TEXT, 
                    city TEXT, 
                    province TEXT, 
                    password TEXT)''')

    conn.commit()
    conn.close()


def add_user_signup_data(email, phone_number, city, province, password):
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO user_signup (email, phone_number, city, province, password) \
            VALUES (?, ?, ?, ?, ?)",
        (email, phone_number, city, province, password))
    conn.commit()
    conn.close()


def create_counsellor_signup_table():
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS counsellor_signup
                    (email TEXT PRIMARY KEY,
                    first_name TEXT,
                    second_name TEXT,
                    phone_number TEXT,
                    city TEXT,
                    province TEXT,
                    category TEXT,
                    available_time TEXT 
                    password TEXT)''')

    conn.commit()
    conn.close()


def add_counsellor_signup_data(email, first_name, second_name, phone_number,
                               city, province, category, available_time, password):
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO counsellor_signup (email, first_name, second_name, phone_number, \
            city, province, category, available_time, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)",
        (email, first_name, second_name, phone_number, city, province,
         category, available_time, password))
    conn.commit()
    conn.close()


def create_user_questionary():
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS user_questionary
                    (email TEXT PRIMARY KEY,
                    question_1 TEXT,
                    question_2 TEXT,
                    question_3 TEXT)''')

    conn.commit()
    conn.close()


def add_user_questionary_data(email, question_1, question_2, question_3):
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO user_questionary (email, question_1, question_2, question_3) \
            VALUES (?, ?, ?, ?)",
        (email, question_1, question_2, question_3))
    conn.commit()
    conn.close()


def create_user_questionary_responses():
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS user_questionary_response
                    (email TEXT PRIMARY KEY,
                    question_1 TEXT,
                    question_2 TEXT,
                    question_3 TEXT)''')
    conn.commit()
    conn.close()


def add_user_questionary_responses_data(email, question_1, question_2, question_3):
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO user_questionary_response (email, question_1, question_2, question_3) \
            VALUES (?, ?, ?, ?)",
        (email, question_1, question_2, question_3))
    conn.commit()
    conn.close()


def create_all_tables():
    create_user_signup_table()
    create_counsellor_signup_table()
    create_user_questionary()
    create_user_questionary_responses()


def read_all_data_from_table(table_name):
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM {table_name}")

    results = cursor.fetchall()
    conn.close()
    return results


def read_data_record_from_table(table_name, email, column_names_list):
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute(
        f"SELECT {', '.join(column_names_list)} FROM {table_name} WHERE email=?", (email,))

    results = cursor.fetchall()
    conn.close()
    return results


def update_record_in_table(table_name, primary_k_column, primary_k_value, column, new_data):
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute(
        f"UPDATE {table_name} SET {column}=? WHERE {primary_k_column}=?", (new_data, primary_k_value))
    conn.commit()
    conn.close()


def delete_record_from_table(table_name, primary_k_column, primary_k_value):
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute(
        f"DELETE FROM {table_name} WHERE {primary_k_column}=?", (primary_k_value,))
    conn.commit()
    conn.close()


def delete_table(table_name):
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute(f"DROP TABLE {table_name}")
    conn.commit()
    conn.close()


# create_all_tables()
