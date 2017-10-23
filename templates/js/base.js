class FormFunctions {
    static simplePost(urlIn, dataIn, successMsg = 'Success'){
        $.ajax({
            type: "POST"
            ,url: urlIn
            ,data: dataIn
            ,success: function(data) {
                console.log(successMsg)
            }
        });
    }
    
    static simplePostId(urlIn, id, successMsg = 'Success'){
        $.ajax({
            type: "POST"
            ,url: urlIn
            ,data: $('#' + id).serialize()
            ,success: function(data) {
                console.log(successMsg)
            }
        });
    }
    
  }

function connectDockerClient(){
   FormFunctions.simplePost("{{ url_for('connectTest') }}", $('#clientConnect').serialize(), "client connected")
}

function createNewSwarm(form){
    FormFunctions.simplePost("{{ url_for('createSwarm') }}", $('#createNewSwarm').serialize(), "swarm created")
}

function addWorkerToSwarm(){
    FormFunctions.simplePost("{{ url_for('addWorkerToSwarm') }}", $('#addWorkerToSwarm').serialize(), "added worker")
}

function killSwarm(){
    FormFunctions.simplePost("{{ url_for('killSwarm') }}", $('#killSwarm').serialize(), "swarm killed")
}

function printSwarmInfo(){
    FormFunctions.simplePost("{{ url_for('printSwarmInfo') }}", $('#printSwarmInfo').serialize(), "swarm info printed")
}