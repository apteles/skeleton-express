class HelloController {
  index(req, res) {
    res.jsn({ message: 'hello wold' })
  }
}

export default new HelloController
