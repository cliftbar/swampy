from flask import Flask

app = Flask(__name__)

# import after app is created because of circular references
# import * to merely insert the routes
from routes import *

if __name__ == "__main__":
    app.run()