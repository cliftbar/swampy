import docker
import requests

class HostService():
    client = docker.from_env()
    swarmWorkers = []

    def hello(self):
        return "Host Service Hello"

    def connectClient()
        
    def createSwarm(self, name, workers = None)