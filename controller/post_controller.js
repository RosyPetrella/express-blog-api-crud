function index(req, res) {
  res.json(posts);
}

function show(req, res) {
  res.send(`Show post with id: ${req.params.id}`);
}

function store(req, res) {
  res.send(`Create a new post`);
}

function update(req, res) {
  res.send(`Update post with id: ${req.params.id}`);
}

function modify(req, res) {
  res.send(`Modify post with id: ${req.params.id}`);
}

function destroy(req, res) {
  res.send(`Delete post with id: ${req.params.id}`);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
