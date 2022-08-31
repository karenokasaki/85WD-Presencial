import CardPost from "../CardPost";
import { useState } from "react";

function Posts({ posts }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  console.log(search);

  return (
    <>
      <p>Onde vai ficar todos os nossos posts</p>

      <input
        type="text"
        value={search}
        placeholder="pesquise por about"
        onChange={handleChange}
      />

      <div>
        {posts

          .filter((post) => {
            return (
              post.about.toLowerCase().includes(search.toLowerCase()) ||
              post.nickname.toLowerCase().includes(search.toLowerCase())
            );
          })

          .map((post) => {
            return <CardPost post={post} key={post.message} />;
          })}
      </div>
    </>
  );
}

export default Posts;
