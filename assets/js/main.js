let sitio = {
    nombre: "ecamp",
};

let manejador = {
    get: function (target, propiedad) {
        console.log(`GET ${propiedad}`);
        return Reflect.get(target, propiedad);
    },
    set: function (target, propiedad, valor) {
        console.log(`SET ${propiedad}=${valor}`);
        return Reflect.set(target, propiedad, valor);
    },
};

let proxy = new Proxy(sitio, manejador);


proxy.nombre = "ECAMP";
let nombre = proxy.nombre;
console.log(nombre);
console.log(sitio)
