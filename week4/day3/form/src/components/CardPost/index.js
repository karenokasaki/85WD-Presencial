import { Button, Card, CardHeader, ListGroup, ListGroupItem } from "reactstrap";

function CardPost({ post, posts, setPosts }) {
  function handleDelete(msg) {
    //deletar um post

    let filterPosts = posts.filter((post) => {
      return post.message !== msg;
    });

    setPosts(filterPosts);
  }

  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <CardHeader style={{ color: post.onLimit ? "red" : "green" }}>
        {post.about}
      </CardHeader>

      <ListGroup>
        <ListGroupItem>Difucldade: {post.lvlDif}</ListGroupItem>
        <ListGroupItem>{post.nickname}</ListGroupItem>
        <ListGroupItem>{post.message}</ListGroupItem>
      </ListGroup>
      <Button color="dark" size="sm" onClick={() => handleDelete(post.message)}>
        Deletar!
      </Button>
    </Card>
  );
}

export default CardPost;
