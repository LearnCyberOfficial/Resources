from flask import *
import mysql.connector

app = Flask(__name__)
db = mysql.connector.connect(
  host="database",
  user="root",
  db="db",
  password="password"
)

cursor = db.cursor(buffered=True)

try:
    cursor.execute("CREATE TABLE users (username VARCHAR(255), password VARCHAR(255));")
    cursor.execute("INSERT INTO users (username, password) VALUES ('user', 'normalpassword'), ('admin', 'supersecurepassword');")
    db.commit()
except:
    pass

@app.route("/", methods = ["POST", "GET"])
def index():
    if request.method == "POST":
        password = request.form.get("password")
        cursor.execute(f"SELECT * FROM users WHERE password = '{password}'")
        user = cursor.fetchone()
        return render_template("index.html", user = user, invalid = user is None)
    return render_template("index.html")

app.run("0.0.0.0", 8080, debug = True)