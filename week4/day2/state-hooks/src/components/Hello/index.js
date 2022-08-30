import "./Hello.css";

function Hello({ children, color }) {
  return (
    <>
      <div style={{ backgroundColor: color }} className="box">
        {" "}
        INLINE STYLE
        <h1>Olá, {children}! Bom dia!</h1>
      </div>
    </>
  );
}

export default Hello;
