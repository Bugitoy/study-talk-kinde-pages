"use server";

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
  authButton: React.CSSProperties;
  authButtonGoogle: React.CSSProperties;
  authButtonEmail: React.CSSProperties;
  divider: React.CSSProperties;
  dividerText: React.CSSProperties;
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
  authButton: {
    width: "100%",
    padding: "12px 16px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
    backgroundColor: "white",
    color: "#374151",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "all 0.2s ease",
  },
  authButtonGoogle: {
    backgroundColor: "#4285F4",
    color: "white",
    border: "none",
  },
  authButtonEmail: {
    backgroundColor: "#10B981",
    color: "white",
    border: "none",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0",
  },
  dividerText: {
    padding: "0 16px",
    color: "#6B7280",
    fontSize: "14px",
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

          {/* Google Authentication */}
          <a href="{{kinde.auth.google}}" style={{...styles.authButton, ...styles.authButtonGoogle}}>
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ marginRight: "8px" }}>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </a>

          {/* Divider */}
          <div style={styles.divider}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#E5E7EB" }}></div>
            <span style={styles.dividerText}>or</span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#E5E7EB" }}></div>
          </div>

          {/* Email/Password Authentication */}
          <a href="{{kinde.auth.email}}" style={{...styles.authButton, ...styles.authButtonEmail}}>
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ marginRight: "8px" }}>
              <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Continue with Email
          </a>

          {/* Password Authentication */}
          <a href="{{kinde.auth.password}}" style={styles.authButton}>
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ marginRight: "8px" }}>
              <path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/>
            </svg>
            Continue with Password
          </a>
        </div>
      </div>
    </article>
  );
};