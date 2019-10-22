class HelloController {
  index(req, res) {
    res.json({ message: 'hello wold' })
  }
}

export default new HelloController
