import { useState } from "react";

function List() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    /*     if (showList === true) {
      setShowList(false);
    } else {
      setShowList(true);
    } */

    setShowList(!showList);
  }

  console.log(showList);
  return (
    <div>
      <button onClick={handleClick}>
        {showList ? "Esconder Lista" : "Mostrar Lista"}
      </button>

      {showList && (
        <ul>
          <li>Café</li>
          <li>Sushi</li>
          <li>Macarrão</li>
          <li>Bolacinha</li>
        </ul>
      )}
    </div>
  );
}

export default List;
