from run import app, hs
import flask as fl

@app.route('/')
def index():
    return fl.render_template('html/index.html')

@app.route('/indexJs.js')
def indexJs():
    return fl.render_template('js/base.js')

@app.route('/test/connectTest/', methods=['POST'])
def connectTest():
    print("hello")
    print(fl.request.form)
    ip = fl.request.form['ip']
    port = fl.request.form['port']
    hs.connectClient(ip, port)
    return "Success"

@app.route('/swarm/createSwarm', methods=['POST'])
def createSwarm():
    print("creating swarm")

    ip = fl.request.form['ip']
    port = fl.request.form['port']
    name = "test"

    hs.createSwarm(name, ip, port)
    return "Success"

@app.route('/swarm/addWorkerToSwarm', methods=['POST'])
def addWorkerToSwarm():
    print("adding worker")

    ip = fl.request.form['ip']
    port = fl.request.form['port']

    hs.addWorkerToSwarm(ip, port)
    return "Success"

@app.route('/swarm/killSwarm', methods=['POST'])
def killSwarm():
    print("killing swarm")

    hs.killSwarm()
    return "Success"

@app.route('/swarm/printSwarmInfo', methods=['POST'])
def printSwarmInfo():
    hs.printSwarmInfo()
    return "Success"