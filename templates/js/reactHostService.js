// import React from 'react'
// import ReactDOM from 'react-dom'
//import FormFunctions from "base.js"

class DockerConnector extends React.Component{
    constructor(props){
        super(props)
        this.idIp = props.id + 'Ip';
        this.idPort = props.id + 'Port';
        this.data = "test";
    }

    handleSubmit = (e) => {
        FormFunctions.simplePostId(this.props.apiUrl, this.props.id)
    }
    
    myForm = (
        <form id={this.props.id} name={this.props.id}>
            <h1>Docker Connect</h1>
            <input id={this.idIp} name="ip" type="text" placeholder="IP Address" />
            <input id={this.idPort} name="port" type="text" placeholder="Port Number" />
            <button type="button" onClick={this.handleSubmit} >Submit</button>
        </form>
    );

    render(){
        return this.myForm
    }
}

  
class HostService extends React.Component {
    hello = <h1>Hello World</h1>
    testPrint = <DockerConnector id="testPrint" headerTitle="Test Print" apiUrl="{{ url_for('printTest') }}" />
    newSwarm = <DockerConnector id="createNewSwarm" headerTitle="Create New Docker Swarm" apiUrl="{{ url_for('createSwarm') }}" />
    addWorker = <DockerConnector id="addWorkerToSwarm" headerTitle="Add worker to Swarm" apiUrl="{{ url_for('addWorkerToSwarm') }}" />

    render () {
        
        //return this.dc
        return (
            <div>
                {this.hello}
                {this.testPrint}
                {this.newSwarm}
                {this.addWorker}
            </div>
        )
    }
}

ReactDOM.render(
    <HostService />
    ,document.getElementById('app')
)