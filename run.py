from flask import Flask
import hostService
app = Flask(__name__)

# import after app is created because of circular references
# import * to merely insert the routes
from routes import *
hs = hostService.HostService()

wsgi_app = app.wsgi_app

if __name__ == "__main__":
    app.run()