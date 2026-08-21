import type React from "react";

const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCUplB9izldwtwhHXAB2DFI8z-RmuQClvAWZs8YkGipXbpfNLIAwoqGWNH7lwtiPmv7w20QtGD-RNxYgXqh8jYMgLbgaDg6l8QwRnwpjSpU6WJEsiYf_Dw1jt5vTH0KIcD0xu75ndg73IHkcC-a5xig7ZQ3Z-9Xd7te2I3qLJ5H8UhhkINy7JY2plESn8MD7yq1Ij6Jp8jM7uxUbhBF7_EK3gw2IRx5z0e55IfUHk10CrJRZ0zpDTDC7TU3_cLpF_d9K4YhtGlwIq83";

export const SiteBranding: React.FC = () => (
  <div className="fixed top-6 left-6 z-50">
    <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center p-1 glossy-pill overflow-hidden">
      <img alt="Logo" className="w-full h-full object-cover rounded-full" src={LOGO_SRC} />
    </div>
  </div>
);
