import React from "react";

const DataContext = React.createContext({
  items: [],
  amount: 0,
  addItem: () => {},
  deleteitem: () => {},
});

export default DataContext
;