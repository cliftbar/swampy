from run import app, hs
import dockerInterface

@app.route('/')
def hello():
    return hs.hello()