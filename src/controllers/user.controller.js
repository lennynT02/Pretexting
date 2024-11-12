import Usuario from '../models/User.js'

const registro = async (req, res) => {
  const info = {
    ip: req.headers['x-forwarded-for'] || req.ip,
    explorador: req.headers['user-agent']
  }

  const user = new Usuario(info)

  try {
    await user.save()
    res.status(200).json({ msg: 'Gracias' })
  } catch (error) {
    res.status(500).json({ msg: 'Error al guardar la información del usuario', error })
  }
}

export { registro }
