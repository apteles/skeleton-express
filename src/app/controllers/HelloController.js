class HelloController {
  index(req, res) {
    res.jso({ message: 'hello wold' })
  }
}

export default new HelloController
