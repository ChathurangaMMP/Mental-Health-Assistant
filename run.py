from flask import Flask, render_template, request, redirect, session
import sqlite3

app = Flask(__name__, template_folder='templates')
app.secret_key = 'secret-key'

# connect to the database
conn = sqlite3.connect('database/medx_database.db', check_same_thread=False)
c = conn.cursor()

# create the users table if it doesn't exist
c.execute('''CREATE TABLE IF NOT EXISTS users
             (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT)''')
conn.commit()


@app.route('/')
def home():
    if 'email' in session:
        return render_template('home.html')
    else:
        return redirect('/login')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        c.execute('SELECT * FROM users WHERE email=? AND password=?',
                  (email, password))
        user = c.fetchone()
        if user:
            session['email'] = user[1]
            return redirect('/')
        else:
            return render_template('login.html', error='Invalid email or password')
    else:
        return render_template('login.html')


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        c.execute('INSERT INTO users (email, password) VALUES (?, ?)',
                  (email, password))
        conn.commit()
        session['email'] = email
        return redirect('/')
    else:
        return render_template('signup.html')


@app.route('/logout')
def logout():
    session.pop('email', None)
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
