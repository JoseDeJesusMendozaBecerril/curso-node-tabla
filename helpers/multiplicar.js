const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5 , listar = false , hasta = 10) => {
    let salida ='';
    let consola='';
    for (let index = 1; index <= hasta; index++) {
        salida += `${base} `+ 'x' + ` ${index} ` + '=' +` ${base*index}\n`;
        consola += `${base} `+ colors.green('x') + ` ${index} ` + colors.blue(' = ') +` ${base*index}\n`;  
    }

    if(listar){
        console.log(consola);
    }

    
    /*
    fs.writeFile( `tabla-${base}.txt`,salida, (err) =>{
        if(err) throw err;
        console.log(`Archivo tabla ${base} creado`);    
    } );
    
    */
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
    return (colors.green(`tabla-${base}.txt`));
    


}

module.exports =  {
    crearArchivo
}