import User from "../modal/Schemas";
export const getAlluser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(404111).json({ message: "No user found" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existinguser;
  try {
    existinguser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existinguser) {
    return res.status(400).json({ message: "user Already exist" });
  }
  const user = new User({
    name,
    email,
    password,
  });
  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ user });
  // export default getAlluser;
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  let exist1;
  try {
    exist1 = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (exist1) {
    let pass;
    try {
      pass = await User.findOne({ password });
    } catch (err) {
      return console.log(err);
    }
    if (!pass) {
      return res.status(400).json({ message: "password Invalid" });
    }
      return res.status(200).json({ message: "Login Success fully" });
  }

  return res.status(400).json({ message: "User Not exist" });
  // export default getAlluser;
};
