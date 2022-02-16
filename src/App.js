import React from "react";
import BarChart from "./BarChart";
import * as d3 from "d3";
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    d3.json("/chart-data.json").then((d) => {
      setData(d);
      setLoading(false);
    });
    return () => undefined;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading && <div>loading</div>}
        {!loading && <BarChart data={data} />}
      </header>
    </div>
  );
}

export default App;