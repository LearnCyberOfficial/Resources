from flask import *
import os

app = Flask(__name__)

payload = "Enter your payload here!"

@app.route("/", methods = ["POST", "GET"])
def index():
    global payload
    if request.method == "POST":
        payload = request.form.get("payload", payload)
    resp = make_response(render_template("index.html", payload = payload))
    resp.set_cookie("secret_cookie", "flag{stored_xss}")
    return resp

app.run("0.0.0.0", 8080, debug = os.name == "nt")