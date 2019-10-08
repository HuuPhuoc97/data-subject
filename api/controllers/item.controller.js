const Item = require("./../../models/item.model");

module.exports.index = async (req, res, next) => {
  var items = await Item.find();
  res.json(items);
};

module.exports.create = async (req, res, next) => {
  var items = await Item.create(req.body);
  res.json(items);
};

module.exports.get = async (req, res, next) => {
  const _id = req.params.id;
  const item = await Item.findById({ _id });
  res.json(item);
};

module.exports.delete = async (req, res, next ) => {
    const _id = req.params.id;
    const item = await Item.remove({_id});  
    res.json(item);
}

module.exports.update = async (req, res, next ) => {
    const _id = req.params.id;
    const item = await Item.findOneAndUpdate({_id},req.body);  
    res.json(item);
}