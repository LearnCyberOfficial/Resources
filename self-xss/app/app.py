from flask import *
import os

app = Flask(__name__)

@app.route("/")
def index():
    resp = make_response(render_template("index.html"))
    resp.set_cookie("secret_cookie", "flag{self_xss}")
    return resp

app.run("0.0.0.0", 8080, debug = os.name == "nt")