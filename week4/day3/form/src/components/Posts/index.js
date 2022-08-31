import CardPost from "../CardPost";
import { useState } from "react";

function Posts({ posts, setPosts }) {
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

      <div className="containerCards">
        {posts
          .filter((post) => {
            return (
              post.about.toLowerCase().includes(search.toLowerCase()) ||
              post.nickname.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((post) => {
            return (
              <CardPost
                key={post.message}
                post={post}
                posts={posts}
                setPosts={setPosts}
              />
            );
          })}
      </div>
    </>
  );
}

export default Posts;
