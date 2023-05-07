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



appointment =[]
appointment_id = 0

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


@app.route('/profile')
def get_home():
    return render_template('index.html')

@app.route('/profile/createappointment' ,methods = ['POST'])
def create_appointment():
    global appointment_id
    data = request.get_json()

    topic = data["topic"]
    description = data["description"]
    time = data["time"]
    
    appointment_id= appointment_id+1

    appointment.append({"topic" :topic,"description" : description,"time" : time, "id":appointment_id,"status": "Processing"})    
    return jsonify({"success": True})

@app.route('/profile/editappointment' ,methods = ['POST'])
def edit_appointment():
    data = request.get_json()

    topic = data["topic"]
    description = data["description"]
    time = data["time"]
    id = data["id"]
    
    for i in range(len(appointment)):
        if(appointment[i]['id'] == id):
             appointment[i]={"topic" :topic,"description" : description,"time" : time, "id": id,"status": "Processing"}
             break
    return jsonify({"success": True})


@app.route('/profile/deleteappointment' ,methods = ['DELETE'])
def delete_appointment():
    data = request.get_json()
    id = data["id"]
    
    for i in range(len(appointment)):
        if(appointment[i]['id'] == id):
             del appointment[i]
             break

    return jsonify({"success": True})


@app.route('/profile/appointments' ,methods = ['GET'])
def get_appointments():
  return {"data":appointment} ,200


app.use_static = True
if __name__ == '__main__':
    app.run(port=8080)
