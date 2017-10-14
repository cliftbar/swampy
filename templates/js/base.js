function connectDockerClient(){
    $.ajax({
        type: "POST"
        ,url: "{{ url_for('connectTest') }}"
        ,data: $(clientConnect).serialize()
        ,success: function(data) {
            console.log("success")
        }
    });
}