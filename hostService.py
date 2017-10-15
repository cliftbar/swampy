import docker
import requests
import json
class HostService():
    client = None #docker.from_env()
    swarmMaster = None
    swarmWorkers = []


    def hello(self):
        return "Host Service Hello"

    def connectClient(self, ip = '192.168.1.246', port = '5555'):
        client = docker.DockerClient(base_url = '{0}:{1}'.format(ip, port))
        print(client.images.list())
        pass
        
    def createSwarm(self, name, ip, port, workers = None):
        masterClient = docker.DockerClient(base_url = '{0}:{1}'.format(ip, port))
        masterClient.swarm.init(
            force_new_cluster=True
            #,name = name
        )
        masterClient.swarm.update(name = name)
        #masterClient.swarm.join(masterClient.swarm.)
        self.swarmMaster = {"client": masterClient, "ip": ip, "port": port}
        print("swarm created")

    def addWorkerToSwarm(self, ip, port):
        workerClient = docker.DockerClient(base_url = '{0}:{1}'.format(ip, port))
        joinAddress = [self.swarmMaster["ip"]]
        token = self.swarmMaster["client"].swarm.attrs["JoinTokens"]["Worker"]

        workerClient.swarm.join(
            remote_addrs = joinAddress
            ,join_token = token
            ,listen_addr = "0.0.0.0"
        )
        worker = {"client": workerClient, "ip": ip, "port": port}
        self.swarmWorkers.append(worker)
        print("worker added")

    def killSwarm(self):
        for worker in self.swarmWorkers:
            worker["client"].swarm.leave(True)
        self.swarmMaster["client"].swarm.leave(True)
        print("swarm killed")

    def printSwarmInfo(self):
        print(json.dumps(self.swarmMaster["client"].swarm.attrs, indent=4))
        print(self.swarmMaster["client"].nodes.list())