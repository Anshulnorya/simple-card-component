import "./styles.css";
import Card from "./component/Card";
import Sdata from "./component/Sdata";

function demo(val) {
  return (
    <>
      <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
      />
    </>
  );
}
export default function App() {
  return <>{Sdata.map(demo)}</>;
}
