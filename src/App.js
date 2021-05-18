import "./css/App.css";
import { useState, useEffect } from "react";

import * as productVariants from "./mockData/productVariant.json";

import { length, width } from "./utils/index";

import Dropdown from "./components/Dropdown";

const App = () => {
  const products = productVariants.default;
  const [len, setLen] = useState(length(products)[0].value);
  const [wid, setWid] = useState(width(products)[0].value);
  const [productId, setProductId] = useState("");

  useEffect(() => {
    const id = products?.productVariants?.variants?.find(
      (data) =>
        data.attributes[0].value === len && data.attributes[1].value === wid
    );
    setProductId(id.omniItemId);
  }, [len, wid]);
  return (
    <div className="App">
      <div className="Dropdown-container">
        <div style={{ margin: 20 }}>
          <Dropdown
            id="length"
            label="Common Shade Length (Inches)"
            options={length(products)}
            data={len}
            setData={setLen}
          />
        </div>
        <div style={{ margin: 20 }}>
          <Dropdown
            id="width"
            label="Common Shade Width (Inches)"
            options={width(products)}
            data={wid}
            setData={setWid}
          />
        </div>
        {productId && <div>The Product id is: {productId}</div>}
      </div>
    </div>
  );
};
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default App;
