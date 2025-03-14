const posts = require("../data/post_array");

/*Index dovrà restituire la lista dei post in formato JSON
Show dovrà restituire un singolo post in formato JSON
Destroy dovrà eliminare un singolo post dalla lista, 
stampare nel terminale (console.log) la lista aggiornata,
e rispondere con uno stato 204 e nessun contenuto.*/

function index(req, res) {
  res.json(posts);
}

function show(req, res) {
  const postSlug = req.params.slug;
  const post = posts.find((post) => post.slug === postSlug);

  if (!post) {
    res.status(404);
    return res.json({
      error: "404 Not Found",
    });
  }
  res.json(post);
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
  const postSlug = req.params.slug;
  const post = posts.find((post) => post.slug === postSlug);
  console.log(post);

  if (!post) {
    res.status(404);
    return res.json({
      error: "404 Not Found",
    });
  }
  posts.splice(posts.indexOf(post), 1);

  res.json({ message: `Post with slug ${postSlug} deleted` });
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
