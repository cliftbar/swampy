from app import app
import dockerInterface

@app.route('/')
def helloWorld():
    dockerInterface.initClient()
    print(dockerInterface.listImages())
    return dockerInterface.hello()