"use client";

import React, { useState } from "react";

const RegisterPage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    birthDate: "",
  });

  const validate = () => {
    const newErrors = { fullName: "", phone: "", email: "", birthDate: "" };

    const nameParts = fullName.trim().split(" ").filter(Boolean);
    if (nameParts.length < 2) {
      newErrors.fullName = "חובה להזין שם ושם משפחה";
    } else if (nameParts.some((word) => /^[0-9]/.test(word))) {
      newErrors.fullName = "אף מילה לא יכולה להתחיל במספר";
    }

    if (!/^\d*$/.test(phone)) {
      newErrors.phone = "טלפון יכול להכיל רק מספרים";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "כתובת מייל לא חוקית";
    }

    if (birthDate) {
      const birth = new Date(birthDate);
      const today = new Date();
      const age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        if (age - 1 < 18) newErrors.birthDate = "חייב להיות מעל גיל 18";
      } else if (age < 18) {
        newErrors.birthDate = "חייב להיות מעל גיל 18";
      }
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((e) => e === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("נרשמת בהצלחה!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>טופס רישום</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: "15px" }}>
          <label>שם מלא:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            onBlur={validate}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.fullName && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {errors.fullName}
            </div>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>טלפון:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={validate}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.phone && (
            <div style={{ color: "red", fontSize: "12px" }}>{errors.phone}</div>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>אימייל:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validate}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.email && (
            <div style={{ color: "red", fontSize: "12px" }}>{errors.email}</div>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>תאריך לידה:</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            onBlur={validate}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.birthDate && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {errors.birthDate}
            </div>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: "#3e6432",
            color: "#f4eedf",
            border: "none",
          }}
        >
          רישום
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
