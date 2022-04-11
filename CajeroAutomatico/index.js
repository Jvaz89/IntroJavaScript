var cuentas = [
    { nombre: "Mali", saldo: 200, password: '1234' },
    { nombre: "Gera", saldo: 290, password: '4321' },
    { nombre: "Maui", saldo: 67, password: '1111' }
];
var indice = -1;

var htmlInicio = '<button onclick="login()">Iniciar sesión</button>'
+'<button onclick="crearCuenta()" class="btn btn-success" style="width: 100%; margin-top: 20px;">Crear cuenta</button>';

var htmlOperaciones = '<p>Elija la operación a realizar:</p>'+
'<button onclick="consultarDisponible()" class="btn btn-success"style="width: 100%; margin-top: 20px;">Consultar saldo</button>'+
'<button onclick="ingresar()"class="btn btn-success"style="width: 100%; margin-top: 20px;">Ingresar monto</button>'+
'<button onclick="retirar()"class="btn btn-success"style="width: 100%; margin-top: 20px;">Retirar monto</button>'+
'<button onclick="salir()"class="btn btn-success"style="width: 100%; margin-top: 20px;">Salir</button>';

var htmlRespuesta = '<p id="texto"></p><button onclick="operaciones()" class="btn btn-success"style="width: 100%; margin-top: 20px;">Volver</button>';

function operaciones() {
    document.getElementById("cajero").innerHTML = htmlOperaciones;
};
function login() { 


    var nombreCuenta;
    for (var i = 0; i < cuentas.length; i++) {
        
        if (i===0) {
            nombreCuenta=prompt("Ingrese su nombre de usuario:");
        };
        
        if (nombreCuenta === null) {
            
            break;
        } else if (nombreCuenta === cuentas[i].nombre) {
            // Si existe el usuario, guardar el indiceCuenta, verificar contraseña y romper el loop de fuera
            
            var indiceCuenta = i;
          
            var pwCuenta;
            while (pwCuenta !== cuentas[indiceCuenta].password) {
                pwCuenta = prompt('Accediendo a la cuenta de "' + cuentas[indiceCuenta].nombre + '". Ingrese su contraseña:');
                if (pwCuenta === null) {
                    indiceCuenta === -1;
                    break;
                } else if (pwCuenta === cuentas[indiceCuenta].password) {
                    operaciones();
                  
                    indice = indiceCuenta;
                } else {
                    alert("La contraseña no es correcta. Intente nuevamente.");
                };
            };

            break;
        } else if (i === cuentas.length-1) {
            
            alert("No se ha encontrado un usuario con este nombre. Intente nuevamente.");
            i=-1;
        };
    };
};
function crearCuenta() { 
    var existe = true;
    while (existe !== false) {
        var ccNombre = prompt("Ingrese el nombre de usuario que desea utilizar:");
        if (ccNombre !== null) {
            // Verificar si existe la cuenta
            for (var i = 0; i < cuentas.length; i++) {
                if (ccNombre === cuentas[i].nombre) {
                    existe = true;
                    alert("Este nombre de usuario ya existe.");
                    break;
                } else {
                    existe = false;
                };
            };
            // Seguir solo si no existe
            if (existe === false) {
                var ccPassword = prompt("Ingrese una contraseña:");
                if (ccPassword !== null) {
                    var ccSaldo=NaN;
                    while (isNaN(ccSaldo)===true) {
                        ccSaldo = prompt("Ingrese su saldo inicial:");
                        if (ccSaldo !== null) {
                            ccSaldo = Number(ccSaldo);
                            if (isNaN(ccSaldo)===true) {
                                alert("El valor ingresado no es numérico. Intente nuevamente.");
                            } else if (ccSaldo === null) {
                                break;
                            } else if (ccSaldo < 10) {
                                alert("El valor ingresado es menor que el monto mínimo. El monto mínimo que una cuenta debe tener en todo momento es de $10."); 
                                ccSaldo = NaN;                               
                            } else if (ccSaldo > 990) {
                                alert("El valor ingresado es mayor que el monto máximo. El monto máximo que una cuenta puede tener es de $990");
                                ccSaldo = NaN;                              
                            } else {
                                cuentas.push({ nombre: ccNombre, saldo: ccSaldo, password: ccPassword });
                                alert('Se ha guardado tu cuenta. Tu nombre de usuario es "'+ccNombre+'". Tu contraseña es "'+ccPassword+'". Tu saldo inicial es de $'+ccSaldo+'.')
                            };
                        } else {
                            break;
                        };
                    };
                };
            };
        } else {
            break;
        };
    };
};
function consultarDisponible() {
    var textToShow = ("El saldo disponible en la cuenta de "+"<b>"+cuentas[indice].nombre+"</b>"+" es de: <b>$"+cuentas[indice].saldo+"</b>");
    document.getElementById("cajero").innerHTML = htmlRespuesta
    document.getElementById("texto").innerHTML = textToShow;
};
function ingresar() {
    var saldoActual = cuentas[indice].saldo;
    while (saldoActual === cuentas[indice].saldo) {
        var strMonto = prompt("Monto a ingresar:");
        var monto = Number(strMonto);
        if (strMonto === null) {
            break;
        } else if ((isNaN(monto)===true)||(monto <= 0)) {
            alert("Por favor, ingrese un monto válido.");
        } else {
            var nuevoSaldo = monto + saldoActual
            if (nuevoSaldo>990) {
                alert("Su saldo actual es de $"+saldoActual+", al ingresar $"+monto+ " se superaría el máximo de $990. La operación no es permitida.");
            } else {
                var textToShow = ("El monto ingresado es de <b>$"+monto+"</b>. Su nuevo saldo es de <b>$"+nuevoSaldo+"</b>.");
                cuentas[indice].saldo =  nuevoSaldo;
                document.getElementById("cajero").innerHTML = htmlRespuesta;
                document.getElementById("texto").innerHTML = textToShow
            };
        };
    };
};
function retirar() {
    var saldoActual = cuentas[indice].saldo;
    while (saldoActual === cuentas[indice].saldo) {
        var strMonto = prompt("Monto a ingresar:");
        var monto = Number(strMonto);
        if (strMonto === null) {
            break;
        } else if ((isNaN(monto)===true)||(monto <= 0)) {
            alert("Por favor, ingrese un monto válido.");
        } else {
            var nuevoSaldo = saldoActual - monto;
            if (nuevoSaldo<10) {
                alert("Su saldo actual es de $"+saldoActual+". Al retirar $"+monto+ " la cuenta tendría menos de  $10. La operación no es permitida.");
            } else {
                var textToShow = ("El monto ingresado es de <b>$"+monto+"</b>. Su nuevo saldo es de <b>$"+nuevoSaldo+"</b>.");
                cuentas[indice].saldo =  nuevoSaldo;
                document.getElementById("cajero").innerHTML = htmlRespuesta;
                document.getElementById("texto").innerHTML = textToShow;
            };
        };
    };
};
function salir() {
    indice = -1;
    document.getElementById("cajero").innerHTML = htmlInicio;
};
