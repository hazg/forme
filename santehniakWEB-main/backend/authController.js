const Order = require('./models/Order');
const Product = require('./models/Product');
class authController {
  async setProduct(req, res) {
    try {
      const { id, category, subcategory, type, title, images, cost, brend, description, } = req.body
      const product = new Product({
        _id: id,
        category,
        subcategory,
        type,
        title,
        images,
        cost,
        brend,
        description,
      });
      await product.save()
      return res.json({ message: `The product saved` })
    } catch (e) {
      console.error;
    }
  }
  async getProducts(req, res) {
    try {
      const products = await Product.find()
      return res.json(products)
    } catch (e) {
      console.error;
    }
  }
  async findProducts(req, res) {
    try {
      const {
        category,
        subcategory,
        type,
        title,
        images,
        cost,
        brend,
        description,
      } = req.body
      const products = await Product.find({
        ...(category ? { category } : {}),
        ...(subcategory ? { subcategory } : {}),
        ...(type ? { type } : {}),
        ...(title ? { title } : {}),
        ...(images ? { images } : {}),
        ...(cost ? { cost } : {}),
        ...(brend ? { brend: { $in: brend } } : {}),
        ...(description ? { description } : {}),
      })
      return res.json(products)
    } catch (e) {
      console.error;
    }
  }
  async getOneProducts(req, res) {
    try {
      const id = req.query.id
      const products = await Product.find({
        _id: id
      })
      return res.json(products)
    } catch (e) {
      console.error;
    }
  }
  async sendOrder(req, res) {
    try {
      const { items, cost, radio, telephone, name, email, radioDelivery, adress, house, apartaments, entrance, message, isLifting, isAnyName } = req.body
      const order = new Order({
        date: Date.now(),
        items,
        cost,
        radio,
        telephone,
        name,
        email,
        radioDelivery,
        adress,
        house,
        apartaments,
        entrance,
        message,
        isLifting,
        isAnyName
      });
      await order.save()
      return res.json({ message: 'order saved' })
    } catch (e) {
      console.error;
    }
  }
  async getOrders(req, res) {
    try {
      const orders = await Order.find({})
      return res.json(orders)
    } catch (e) {
      console.error;
    }
  }
}
module.exports = new authController();
