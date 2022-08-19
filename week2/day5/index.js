const books = [
  {
    title: "A arte da Guerra",
    author: "Karen Okasaki",
  },
  {
    title: "O menino do pijama listrado",
    author: "sei lá cara",
  },
  {
    title: "Programação para idiotas",
    author: "Karen Okasaki",
  },
];

const ol = document.querySelector("ol");

books.forEach((book) => {
  let li = document.createElement("li");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  li.classList.add("card");

  if (book.author === "Karen Okasaki") {
    p.style.color = "blue";
  }

  h1.innerText = `Título: ${book.title}`;
  p.innerText = `Autor: ${book.author}`;

  li.appendChild(h1);
  li.appendChild(p);

  ol.appendChild(li);
});
