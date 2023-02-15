const express = require('express');
const Equipos = require('../models/equipos');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        //Le pondremos arrayPokemonDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayPokemon que tenemos EN LA VISTA
        const arrayEquiposDB = await Equipos.find();
        console.log(arrayEquiposDB);
        res.render("equipos", { 
            arrayEquipos: arrayEquiposDB
        })
    } catch (error) {
        console.error(error)
    }
})

router.get('/crearEntrenador', (req, res) => {
    res.render('crearEntrenador'); //nueva vista que llamaremos Crear
 })

 
router.post('/', async (req, res) => {
    const body = req.body //Gracias al body parser, de esta forma
    //podremos recuperar todo lo que viene del body
    console.log(body) //Para comprobarlo por pantalla
    try {
        const arrayEquiposDB = new Equipos(body) //Creamos un nuevo Pokemon, gracias al modelo
        await arrayEquiposDB.save() //Lo guardamos con .save(), gracias a Mongoose
        res.redirect('/equipos') //Volvemos al listado
    } catch (error) {
        console.log('error', error)
    }
})

router.get('/:id', async(req, res) => { //El id vendrá por el GET (barra de direcciones)
    const id = req.params.id //Recordemos que en la plantilla "pokemon.ejs" le pusimos
    //a este campo pokemon.id, por eso lo llamados con params.id
    try {
        const equiposDB = await Equipos.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Pokemon” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(equiposDB) //Para probarlo por consola
        res.render('detallesEquipos', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            equipos: equiposDB,
            error: false
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('detallesEquipos', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Equipo no encontrado!'
        })
    }
})


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {
        //En la documentación de Mongoose podremos encontrar la
        //siguiente función para eliminar
        const equiposDB = await Equipos.findByIdAndDelete({ _id: id });
        console.log(equiposDB)
        // https://stackoverflow.com/questions/27202075/expressjs-res-redirect-not-working-as-expected
        // res.redirect('/pokemon') //Esto daría un error, tal y como podemos ver arriba
        if (!equiposDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar el Equipo.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Equipo eliminado.'
            })
        } 
    } catch (error) {
        console.log(error)
    }
})


router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log('body', body)
    try {
        const equiposDB = await Equipos.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(equiposDB)
        res.json({
            estado: true,
            mensaje: 'Equipo editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar el Equipo'
        })
    }
})



 
module.exports = router;