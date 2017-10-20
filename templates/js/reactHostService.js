// import React from 'react'
// import ReactDOM from 'react-dom'

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
        super(id, headerTitle, apiUrl);
        this.id = id;
        this.idIp = id + 'Ip'
        this.idPort = id + 'Port'
        this.headerTitle = headerTitle;
        this.url = apiUrl;
        this.state = {
            ip: ""
            ,port: ""
        }
        this.ip = ""
        this.port = ""

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log(this.headerTitle);
    }

    handleChange(event) {
        console.log("changed")
        console.log(event)
        console.log(event.target.value)
        
    }

    handleSubmit(event) {
        console.log("submit")
        console.log(event)
        //simplePost(this.apiUrl, data, "client connected");
    }

    myForm = (
        <form id={this.id} name={this.id} onSubmit={this.handleSubmit}>
            <h1>Docker Connect</h1>
            <input id={this.idIp} name="ip" type="text" placeholder="IP Address" value={this.ip} onChange={this.handleChange} />
            <input id={this.idPort} name="port" type="text" placeholder="Port" value={this.port} onChange={this.handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
    
    render() {
        console.log("rendering")
        return this.myForm
    }
}



// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value)} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
  

  
class HostService extends React.Component {
    hello = <h1>Hello World</h1>
    //dockerConnect = new SimpleDockerConector("dockerConnect", "Docker Connect", "{{ url_for('connectTest') }}")
    dockerConnect = <SimpleDockerConnector id="dockerConnect" headerTitle="Docker Connect" apiUrl="{{ url_for('connectTest') }}" />
    //dockerConnect = new NameForm("test")
    render () {
        //return this.hello 
        return this.dockerConnect
        // return (
        //     <div>
        //         {this.hello}
        //         {this.dockerConnect}
        //     </div>
        // )
    }
}

ReactDOM.render(
    <HostService />
    ,document.getElementById('app')
)