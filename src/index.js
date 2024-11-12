import app from './server.js'
import { connect } from './database.js' // Importa la función de conexión

// Conéctate a la base de datos y luego inicia el servidor
connect().then(() => {
  app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
  })
}).catch((err) => {
  console.error('Failed to connect to the database', err)
})
