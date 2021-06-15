function imc(){
    let p1 = parseFloat(document.formImc.peso.value);
    let alt1 = parseFloat(document.formImc.altura.value);
    let resultado = p1 /(alt1 * alt1);
    if (resultado <= 18.5 ){
        
    }
    return document.getElementById("Res").innerHTML = resultado.toFixed(2);
}





