import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";
import Row4 from "./components/Row4";
import Row5 from "./components/Row5";
import Row6 from "./components/Row6";
import Row7 from "./components/Row7";
import Lanthanides from "./components/Lanthanides";
import Actinides from "./components/Actinides";

export default function App() {
  return (
    <>
    <div>
      <h1>Periodic Table of Elements</h1>

      <table border="1">
        <tbody>
          <Row1 />
          <Row2 />
          <Row3 />
          <Row4 />
          <Row5 />
          <Row6 />
          <Row7 />
        </tbody>
      </table>

      <br /><br />

      <Lanthanides />

      <br /><br />

      <Actinides />
    </div>
    </>
  );
}
