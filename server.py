from flask import Flask, jsonify , render_template , send_file, request ,session
from flask_cors import CORS
import datetime
import os


app = Flask(__name__,template_folder='ui/build')
cors = CORS(app)
app.secret_key = "my-secret-key"

emails =[]
passwords = []
ids=[]


@app.route('/static/js/<path:filename>')
def static1(filename):
    print(filename)
    return send_file('ui/build/static/js/'+ filename)

@app.route('/static/css/<path:filename>')
def static2(filename):
    print(filename)
    return send_file('ui/build/static/css/'+ filename)

@app.route('/static/media/<path:filename>')
def static3(filename):
    print(filename)
    return send_file('ui/build/static/media/'+ filename)

@app.route('/<path:filename>')
def static4(filename):
    print(filename)
    return send_file('ui/build/' +filename)

@app.route('/')
def hello_world():
    return render_template('index.html')



@app.route('/profile')
def get_home():
    return render_template('index.html')


  
   
@app.route('/signup' ,methods = ['POST'])
def sign_up():
    data = request.get_json()
    email = data["email"]
    password = data["password"]
    
    emails.append(email)
    print(data)
    session["user_id"] = 12
    passwords.append(password)

    
    return jsonify({"success": True})


app.use_static = True
if __name__ == '__main__':
    app.run(port=8080)
