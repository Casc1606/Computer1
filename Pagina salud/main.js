window.onload = () => {

    document.getElementById("id_mandalo").onclick = () => {
        console.log(document.getElementById("id_nombre").value);
        console.log(document.getElementById("id_apellido").value);
        console.log(document.getElementById("id_correo").value);
        console.log(document.getElementById("id_numero").value);
        console.log(document.getElementById("id_nacionalidad").value);
        console.log(document.getElementById("id_ocupacion").value);

        document.getElementById("id_nombre").value;

        function funcionclass () {

        }

        var datos = {
            id_nombre: document.getElementById("id_nombre").value,
            id_apellido: document.getElementById("id_apellido").value,
            id_correo: document.getElementById("id_correo").value,
            id_numero: document.getElementById("id_numero").value,
            id_nacionalidad: document.getElementById("id_nacionalidad").value,
            id_ocupacion: document.getElementById("id_ocupacion").value,
        }

        funcioncamilo(datos)
    };
    
    function funcioncamilo(datos) {
        var table = document.getElementById("id_tbody");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = datos.id_nombre;
        cell2.innerHTML = datos.id_apellido;
        cell3.innerHTML = datos.id_correo;
        cell4.innerHTML = datos.id_numero;
        cell5.innerHTML = datos.id_nacionalidad;
        cell6.innerHTML = datos.id_ocupacion;
    }


    document.getElementById("id_autocompletar").onclick = () => {
        mifuncion()
    };

    function mifuncion() {
        document.getElementById("id_nombre").value = "Camilo";
        document.getElementById("id_apellido").value = "Salamanca";
        document.getElementById("id_correo").value = "casc@hotdog.com";
        document.getElementById("id_numero").value = "3223223223";
        document.getElementById("id_nacionalidad").value = "Colombiano";
        document.getElementById("id_ocupacion").value = "Chef";
    }

    // document.getElementById("id_nombre").value

}