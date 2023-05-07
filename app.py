from flask import Flask, jsonify, redirect , render_template , send_file, request 
from flask_reverse_proxy import FlaskReverseProxied
from flask_cors import CORS
import datetime
import os
import random
import string

import requests



app = Flask(__name__,template_folder='Templates')
cors = CORS(app)


emails =[]
passwords = []
ids=[]

tokens = []
appointment =[]
appointment_id = 0

####################### Src accessing ######################

@app.route('/static/js/<path:filename>')
def static1(filename):
    print(filename)
    return send_file('Templates/ui/static/js/'+ filename)

@app.route('/static/css/<path:filename>')
def static2(filename):
    print(filename)
    return send_file('Templates/ui/static/css/'+ filename)

@app.route('/static/media/<path:filename>')
def static3(filename):
    print(filename)
    return send_file('Templates/ui/static/media/'+ filename)

@app.route('/<path:filename>')
def static4(filename):
    print(filename)
    return send_file('Templates/ui/' +filename)


        

@app.route('/')
def hello_world():
    return render_template('/ui/index.html')

@app.route('/account')
def account():

    args = request.args

    token = args.get("token")
    email = args.get("email")

    valid = check_login(token , email)

    print(valid)

    if(valid):
        return render_template('/ui/account.html')
    
    else:
        return redirect("/")

   




######################### Sign in ,up and login action ########################

def get_random_string(length):
    # With combination of lower and upper case
    result_str = ''.join(random.choice(string.ascii_letters) for i in range(length))
    # print random string
    return result_str

def check_login(token ,email):
    for tok in tokens:
        if(tok["token"]==token ):
            if(tok["email"]==email):
                return True
            
    return False

        


   
@app.route('/signup' ,methods = ['POST'])
def sign_up():
    data = request.get_json()
    email = data["email"]
    password = data["password"]
    
    emails.append(email)
    print(data)
    passwords.append(password)
    


    return jsonify({"success": True})



@app.route('/login' ,methods = ['POST'])
def loggin_():
    data = request.get_json()
    email = data["email"]
    password = data["password"]

    print("email",email)
    print("Password",password)

    print(emails)
    print(passwords)


    if(email not in emails):
        print("111111")
        return jsonify({"success": False , "message" : "Email is not registered"})
    
    else:
       if(password == passwords[emails.index(email)]):
           token = get_random_string(8)
           tokens.append({"token": token ,"email":email })

           print("token ",token)
           print("Email ",email)
        
           return jsonify({"success": True , "message" : "Successfully login" , "token": token , "email" : email})
   
             
       
       else:
           print("Exv")
           return jsonify({"success": False , "message" : "Password is wrong" })
    



################### Profile actions ##################################

@app.route('/profile/createappointment' ,methods = ['POST'])
def create_appointment():
    global appointment_id
    data = request.get_json()

    token=data["token"]
    email = data["email"]
    topic = data["topic"]
    description = data["description"]
    time = data["time"]

    valid=check_login(token ,email)
    if(valid):
        appointment_id= appointment_id+1

        appointment.append({"topic" :topic,"description" : description,"time" : time, "id":appointment_id,"status": "Processing"})    
        return jsonify({"success": True})
    
    else:
        return redirect("/")

@app.route('/profile/editappointment' ,methods = ['POST'])
def edit_appointment():
    data = request.get_json()

    topic = data["topic"]
    description = data["description"]
    time = data["time"]
    id = data["id"]

    token=data["token"]
    email = data["email"]
    valid=check_login(token ,email)

    if(valid):
    
        for i in range(len(appointment)):
            if(appointment[i]['id'] == id):
                appointment[i]={"topic" :topic,"description" : description,"time" : time, "id": id,"status": "Processing"}
                break
        return jsonify({"success": True})
    else:
        return redirect("/")


@app.route('/profile/deleteappointment' ,methods = ['DELETE'])
def delete_appointment():
    data = request.get_json()
    id = data["id"]
    
    token=data["token"]
    email = data["email"]
    valid=check_login(token ,email)

    if(valid):
        for i in range(len(appointment)):
            if(appointment[i]['id'] == id):
                del appointment[i]
                break

        return jsonify({"success": True})
    else:
        return redirect("/")


@app.route('/profile/appointments' ,methods = ['GET'])
def get_appointments():
  args = request.args

  token = args.get("token")
  email = args.get("email")
  valid = check_login(token , email)


  if(valid):
    return {"data":appointment} ,200


app.use_static = True
if __name__ == '__main__':
    app.run(port=8080)
