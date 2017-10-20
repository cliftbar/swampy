function simplePost(urlIn, dataIn, successMsg = 'Success'){
    $.ajax({
        type: "POST"
        ,url: urlIn
        ,data: dataIn
        ,success: function(data) {
            console.log(successMsg)
        }
    });
}

function connectDockerClient(){
   simplePost("{{ url_for('connectTest') }}", $('#clientConnect').serialize(), "client connected")
}

function createNewSwarm(form){
    simplePost("{{ url_for('createSwarm') }}", $('#createNewSwarm').serialize(), "swarm created")
}

function addWorkerToSwarm(){
    simplePost("{{ url_for('addWorkerToSwarm') }}", $('#addWorkerToSwarm').serialize(), "added worker")
}

function killSwarm(){
    simplePost("{{ url_for('killSwarm') }}", $('#killSwarm').serialize(), "swarm killed")
}

function printSwarmInfo(){
    simplePost("{{ url_for('printSwarmInfo') }}", $('#printSwarmInfo').serialize(), "swarm info printed")
}