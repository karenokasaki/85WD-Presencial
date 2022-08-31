function CardPost({ post }) {
  return (
    <div style={{ border: "1px solid red" }}>
      <p>{post.about}</p>
      <p>{post.lvlDif}</p>
      <p>{post.nickname}</p>
      <p>{post.message}</p>
    </div>
  );
}

export default CardPost;
