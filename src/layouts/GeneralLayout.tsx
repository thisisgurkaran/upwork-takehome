import React, { Suspense } from "react";
import { Header } from "../components";
const GeneralLayout: React.FC = ({ children }) => {
  return (
    <Suspense fallback={null}>
      <Header />
      {children}
    </Suspense>
  );
};

export default GeneralLayout;
