const { readFileSync, writeFileSync } = require('fs');

const read = () => {
    const citas = JSON.parse(readFileSync('citas.json', 'utf8'));

    console.log('\n***** Las citas son estas: *****');
    console.log(citas);
    console.log('\n');

    return citas;
};

const create = (args) => {
    const [id, Nombre_del_animal, Edad, Tipo_de_animal, Color_del_animal, Enfermedad] = args

    const citas = read();

    const new_user = {
        id: parseInt(id),
        Nombre_del_animal,
        Edad,
        Tipo_de_animal,
        Color_del_animal,
        Enfermedad
    };

    citas.push(new_user);

    writeFileSync('citas.json', JSON.stringify(citas));

    console.log('\n***** Se agregaron estos datos del animal *****');
    console.log(new_user);
    console.log('\n');
};

const remove = (args) => {
    const [id] = args;

    const citas =read();
    const citas_a_eliminar = citas.find(file=> file.id == id)

    const new_citas = citas.filter((file) => file.id != id);

    writeFileSync('citas.json', JSON.stringify(new_citas));

    console.log('\n***** Se elimino el animal seleccionado *****');
    console.log(citas_a_eliminar);
    console.log('\n');
    read()
};

const update = (args) => {
    const [id, clave, valor] = args;


    const citas =read();
    const citas_a_actualizar = citas.find(file=> file.id == id)
    const citas_actuales = citas.map(file => file.id == id ?{id, ...citas_a_actualizar, [clave]: valor} : file)

    writeFileSync('citas.json', JSON.stringify(citas_actuales));

    console.log('\n***** Animal actualizado *****');
    console.log(citas_a_actualizar);
    console.log('\n');
    read()
};

module.exports = {
    read,
    create,
    remove,
    update
};