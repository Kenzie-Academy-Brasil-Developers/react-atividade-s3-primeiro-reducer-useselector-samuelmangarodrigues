import { useSelector } from "react-redux";
import "./style.css";
const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);
  return (
    <>
      <h1>Frutas</h1>
      <div className="Cont">
        {fruits.map((fruit) => (
          <div className="Container">
            <p key={fruit.id}>{fruit.nome}</p>
            <img className="Imgs" src={fruit.img} alt={fruit.nome} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FruitsPage;
