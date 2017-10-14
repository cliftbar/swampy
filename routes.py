from run import app, hs
import flask as fl
import dockerInterface

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
    return "Success" # hs.hello()