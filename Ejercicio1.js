 let producto = [];

 function agregar(codigo,descripción,tipo,precioc,preciov,stock){
    producto.push({codigo,descripción,tipo,precioc,preciov,stock});
 };

 function leer(){
    producto.forEach(function(codigo,descripción,tipo,precioc,preciov,stock){
    });
    console.log(producto);
 };

 function modStock(){
    let i = 0;
    let cod = prompt("Ingrese el código del producto al se modificará su stock: ");
    let stockn = prompt("Ingrese el nuevo stock del producto: ");
    for(let i=0;i<producto.length;i++){
        if(producto[i].codigo==cod){
            producto[i].stock=stockn;
            i=i+1;
        }
    }
 };

 function mostrar(){
    for(let i=0;i<producto.length;i++){
        if(producto[i].stock==0){
            document.write("Los productos que tienen un stock 0 son: ",producto[i].codigo);
        }
    }
 };

 function registrov(){ 
    cont=0;
    producto.forEach(function(obj){obj.ventas=0;});
    producto.forEach(function(obj){obj.cantidad=0;})
    let cod=prompt("Ingrese el codigo del articulo vendido: ");
    let n=prompt("Ingrese la cantidad de articulos vendidos: ");
    for(let i=0;i<producto.length;i++){
        if(producto[i].codigo==cod){
            cont=cont+1;
            producto[i].ventas=cont;
            producto[i].cantidad=n;
            producto[i].stock=producto[i].stock-n;
        }
    }
 };

 function promedio(){
    let prom=0, monto=0, cont=0;
    for(let i=0;i<producto.length;i++){
        if(producto[i].ventas!=0){
            cont=cont+producto[i].ventas;
            monto=monto+producto[i].preciov*producto[i].cantidad;
        }
    }
    return monto/cont;
 };
 let bandera=true;
 while(bandera){
    console.log("1. Agregar producto");
    console.log("2. Mostrar productos");
    console.log("3. Modificar stock");
    console.log("4. Registrar ventas  y reducir stock");
    console.log("5. Mostrar promedio de ventas realizadas");
    console.log("6. Mostrar producto con stock 0");
    console.log("7. Salir del sistema");
    let op= prompt("Ingrese una opcion: ");
    console.log(op);
    switch (op) { 
        case '1':
            console.log("Agregando los parametros de la funcion'codigo,descripción,tipo,precioc,preciov,stock'.");
            let codigo= prompt("codigo: ");
            let descripción= prompt("descripcion: ");
            let tipo= prompt("tipo: ");
            let precioc= prompt("precioc: ");
            let preciov= prompt("preciov: ");
            let stock= prompt("stock: ");
            agregar(codigo,descripción,tipo,precioc,preciov,stock);
            break;
        case '2':
            leer();
            break;
        case '3':
            modStock();
            break;
        case '4':
            registrov();
            break;
        case '5':
            producto();
            break;
        case '6':
            promedio();
            break;
        case '7':
            bandera=false;
            break;
        default:
            console.log("Elección inválida");
    }
};




 