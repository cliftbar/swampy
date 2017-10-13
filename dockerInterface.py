import docker

def hello():
    return "hello world"

def initClient():
    global client
    client = docker.from_env()

def listImages():
    client.
    return client.images.list()

def listContainers():
    return client.images.list()