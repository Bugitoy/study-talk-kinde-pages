"use server";

import React from "react";

type DefaultLayoutProps = {
  children: React.ReactNode;
  isRegisterPage?: boolean;
};

const styles: {
  container: React.CSSProperties;
} = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const DefaultLayout = ({
  children,
  isRegisterPage = false,
}: DefaultLayoutProps): React.JSX.Element => (
  <div style={styles.container}>
    {children}
  </div>
);