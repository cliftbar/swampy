function connectDockerClient(){
    $.ajax({
        type: "POST"
        ,url: "{{ url_for('connectTest') }}"
        ,data: $('#clientConnect').serialize()
        ,success: function(data) {
            console.log("success")
        }
    });
}

function createNewSwarm(form){
    $.ajax({
        type: "POST"
        ,url: "{{ url_for('createSwarm') }}"
        ,data: $('#createNewSwarm').serialize()
        ,success: function(data) {
            console.log("created swarm")
        }
    });
}

function addWorkerToSwarm(){
    $.ajax({
        type: "POST"
        ,url: "{{ url_for('addWorkerToSwarm') }}"
        ,data: $('#addWorkerToSwarm').serialize()
        ,success: function(data) {
            console.log("added worker")
        }
    });
}

function killSwarm(){
    $.ajax({
        type: "POST"
        ,url: "{{ url_for('killSwarm') }}"
        //,data: $('#addWorkerToSwarm').serialize()
        ,success: function(data) {
            console.log("swarm killed")
        }
    });
}

function printSwarmInfo(){
    $.ajax({
        type: "POST"
        ,url: "{{ url_for('printSwarmInfo') }}"
        //,data: $('#addWorkerToSwarm').serialize()
        ,success: function(data) {
            console.log("swarm info printed")
        }
    });
}