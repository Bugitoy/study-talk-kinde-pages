"use server";

import { getKindeWidget, getLogoUrl } from "@kinde/infrastructure";
import React from "react";

type WidgetProps = {
  heading: string;
};

const styles: {
  widgetWrapper: React.CSSProperties;
  heading: React.CSSProperties;
  loginForm: React.CSSProperties;
  loginFormWrapper: React.CSSProperties;
  studyTalkLogo: React.CSSProperties;
  studyTalkBranding: React.CSSProperties;
} = {
  widgetWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #FFECD2, #DCEAF7, #FFDECA)",
    minHeight: "100vh",
  },
  loginForm: {
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
    minInlineSize: "2rem",
  },
  loginFormWrapper: {
    display: "flex",
    padding: "2rem",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "32px",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    marginBottom: "1.5rem",
    color: "#184027",
    textAlign: "center",
  },
  studyTalkLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  studyTalkBranding: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#184027",
    marginLeft: "12px",
  },
};

export const Widget: React.FC<WidgetProps> = ({ heading }) => {
  return (
    <article style={styles.widgetWrapper}>
      <div style={styles.loginFormWrapper}>
        <div style={styles.studyTalkLogo}>
          <div style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#FEF3C7",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "12px",
          }}>
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" style={{ color: "#F59E0B" }}>
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span style={styles.studyTalkBranding}>Study-Talk</span>
        </div>

        <div style={styles.loginForm}>
          <h1 style={styles.heading}>{heading}</h1>

          {/* This will render the Kinde authentication widget */}
          {getKindeWidget()}
        </div>
      </div>
    </article>
  );
};