import User from '../models/User';

class UserController {
  async create(req, res) {
    const { email } = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const data = await User.create(req.body);

    return res.status(201).json(data);
  }
}

export default UserController;
