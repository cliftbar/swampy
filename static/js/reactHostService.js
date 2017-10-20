import React from 'react'
import ReactDOM from 'react-dom'

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

class SimpleDockerConnector extends React.Component {
    constructor(id, headerTitle, apiUrl) {
        super();
        this.id = id;
        this.headerTitle = headerTitle;
        this.url = apiUrl;
    }

    connectDockerClient() {
        simplePost(apiUrl, myForm.serialize(), "client connected")
    }

    myForm = (
        <form id={this.id} name={this.id} action={this.connectDockerClient}>
            <h1>Docker Connect</h1>
            <input id={this.id + 'Ip'} name="ip" type="text" placeholder="IP Address" />
            <input id={this.id + 'Port'} name="port" type="text" placeholder="Port" />
            <button type="submit">Submit</button>
        </form>
    )

    render() {
        return this.myForm
    }
}

class HostService extends React.Component {
    hello = <h1>Hello World</h1>
    dockerConnect = new SimpleDockerConnector("dockerConnect", "Docker Connect", "{{ url_for('connectTest') }}")
    render () {
        return (
            <div>
                {this.hello}
                {this.dockerConnect}
            </div>
        )
    }
}

ReactDOM.render(
    <HostService />
    ,document.getElementById('app')
)