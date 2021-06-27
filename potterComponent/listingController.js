const fs = require('fs');

const file = `${__dirname}/charecter.json`;
const charecters = JSON.parse(fs.readFileSync(file));

const charecterLister = async (req, res) => {
  const intermidiate = charecters.map((ch) => {
    let selectedValues = {
      name: ch.name,
      key: ch.key,
      photo: ch.photo,
    };
    return selectedValues;
  });
  try {
    res.status(200).json({
      success: true,
      charecters: intermidiate,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'an internal error occured',
    });
  }
};

const singleCharecter = async (req, res) => {
  try {
    const key = req.params.name;
    const detail = charecters.filter((ch) => ch.key === key);
    res.status(200).json({
      success: true,
      detail,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'an internal error occured',
    });
  }
  // const required = charecters.name
};
const controllers = {
  charecterLister,
  singleCharecter,
};
module.exports = controllers;
