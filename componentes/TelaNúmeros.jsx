import React from "react";

const EmergencyScreen = () => {
  const emergencyContacts = [
    { name: "Delegacia da Mulher", phone: "+552121340200" },
    { name: "Polícia", phone: "+5521190" },
    { name: "Bombeiros", phone: "+5521193" },
    { name: "Ambulância", phone: "+5521192" },
  ];

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Emergência</h1>
      <div style={styles.buttonContainer}>
        {emergencyContacts.map((contact, index) => (
          <button
            key={index}
            style={styles.button}
            onClick={() => handleCall(contact.phone)}
          >
            {contact.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    maxWidth: "300px",
  },
  button: {
    padding: "15px",
    fontSize: "16px",
    backgroundColor: "#800080", // Purple color corrected
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
  },
};

export default EmergencyScreen;
