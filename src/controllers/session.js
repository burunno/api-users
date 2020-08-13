import jwt from 'jsonwebtoken';
import authConf from '../config/auth';
import User from '../models/User';

class SessionController {
  async create(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    const { _id, name, password } = user;

    if (password !== req.body.password) {
      return res.status(400).json({ error: 'Senha incorreta' });
    }

    return res.json({
      user: {
        _id,
        name,
        email,
      },
      token: jwt.sign({ _id }, authConf.jwt.secret, {
        expiresIn: authConf.jwt.expiresIn,
      }),
    });
  }
}

export default SessionController;
