import sqlite3


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

<<<<<<< HEAD
depression_questionary_responses
    - create_depression_questionary_responses
    - add_depression_questionary_responses_data

=======
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
# general functions
    - create_all_tables
    - read_all_data_from_table
    - read_data_record_from_table
    - update_record_in_table
    - delete_table
    - delete_record_from_table
<<<<<<< HEAD
    - delete_all_tables
=======
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
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
<<<<<<< HEAD
                    q_1 TEXT,
                    q_2 TEXT,
                    q_3 TEXT,
                    q_4 TEXT,
                    q_5 TEXT,
                    q_6 TEXT,
                    q_7 TEXT,
                    q_8 TEXT,
                    q_9 TEXT,
                    q_10 TEXT)''')
    conn.commit()
    conn.close()


def add_user_questionary_responses_data(response):
    '''
    The variable response is a list of elements. The first element is the email of the user.
    The next 10 elements are the answers for the 10 question in the questionary.
    '''
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO user_questionary_response (email, q_1, q_2, q_3, \
            q_4, q_5, q_6, q_7, q_8, q_9, q_10) \
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        tuple(response))
    conn.commit()
    conn.close()


def create_depression_questionary_responses():
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS depression_questionary_responses
                    (email TEXT PRIMARY KEY,
                    q_1 INTEGER,
                    q_2 INTEGER,
                    q_3 INTEGER,
                    q_4 INTEGER,
                    q_5 INTEGER,
                    q_6 INTEGER,
                    q_7 INTEGER,
                    q_8 INTEGER,
                    q_9 INTEGER,
                    q_10 INTEGER,
                    q_11 INTEGER,
                    q_12 INTEGER,
                    q_13 INTEGER,
                    q_14 INTEGER,
                    q_15 INTEGER,
                    q_16 INTEGER,
                    q_17 INTEGER,
                    q_18 INTEGER,
                    q_19 INTEGER,
                    q_20 INTEGER,
                    q_21 INTEGER,
                    depression_total INTEGER)''')
=======
                    question_1 TEXT,
                    question_2 TEXT,
                    question_3 TEXT)''')
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
    conn.commit()
    conn.close()


<<<<<<< HEAD
def add_depression_questionary_responses_data(response):
    '''
    The variable response is a list of elements. The first element is the email of the user.
    The next 21 elements are the answers for the 21 question in the questionary.
    The last element is the total score for depression questionary.
    '''
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO depression_questionary_responses (email, q_1, q_2, q_3, q_4, \
            q_5, q_6, q_7, q_8, q_9, q_10, q_11, q_12, q_13, q_14, q_15, q_16, \
                q_17, q_18, q_19, q_20, q_21, depression_total) \
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        tuple(response))
=======
def add_user_questionary_responses_data(email, question_1, question_2, question_3):
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO user_questionary_response (email, question_1, question_2, question_3) \
            VALUES (?, ?, ?, ?)",
        (email, question_1, question_2, question_3))
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
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


<<<<<<< HEAD
def delete_all_tables():
    conn = sqlite3.connect(filename)
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = cursor.fetchall()
    for table_name in tables:
        drop_table_query = f"DROP TABLE {table_name[0]};"
        cursor.execute(drop_table_query)
    conn.commit()
    conn.close()


=======
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
# create_all_tables()
