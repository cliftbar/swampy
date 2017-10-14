import docker
import requests

class HostService():
    client = None #docker.from_env()
    swarmWorkers = []

    def hello(self):
        return "Host Service Hello"

    def connectClient(self, ip = '192.168.1.246', port = '5555'):
        client = docker.DockerClient(base_url = '{0}:{1}'.format(ip, port))
        print(client.images.list())
        pass
        
    def createSwarm(self, name, workers = None):
        pass