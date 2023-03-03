import React from "react";
import Card from "./Card";
import Data from "./Data";

const App = () => {
  return (
    <>
      <h1 className="heading"> WATCH TOP IMDb SERIES FOR FREE</h1>

      {Data.map((val) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
    </>
  );
};

export default App;
