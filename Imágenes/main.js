window.onload = () => {
    document.getElementById("buton_enviar").onclick = () => {
        console.log(document.getElementById("inp_nombre").value);
        console.log(document.getElementById("inp_apellido").value);

    };

    document.getElementById("btn_completar").onclick = () => {
        mifuncion()
    };

    function mifuncion() {
        document.getElementById("inp_nombre").value = "Daverson";
        document.getElementById("inp_apellido").value = "Parra";
    }

    // document.getElementById("inp_nombre").value
}