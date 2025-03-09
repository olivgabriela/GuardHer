import React, { useState } from "react"; 

const SafetyEvaluationScreen = () => {
  const [answers, setAnswers] = useState({
    policePatrol: "",
    hospitalsNearby: "",
    wellLitStreets: "",
    abuseInArea: "",
    safeArea: "",
  });

  const [address, setAddress] = useState("");

  const handleChange = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Endereço:", address);
    console.log("Respostas enviadas:", answers);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Informações de Segurança do Endereço</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.addressContainer}>
          <label style={styles.label}>Endereço:</label>
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            style={styles.addressInput}
            placeholder="Digite o endereço"
          />
        </div>

        <div style={styles.questionContainer}>
          <Question
            question="Há policiamento por perto?"
            value={answers.policePatrol}
            onChange={(value) => handleChange("policePatrol", value)}
          />
          <Question
            question="Há hospitais por perto?"
            value={answers.hospitalsNearby}
            onChange={(value) => handleChange("hospitalsNearby", value)}
          />
          <Question
            question="As ruas são bem iluminadas?"
            value={answers.wellLitStreets}
            onChange={(value) => handleChange("wellLitStreets", value)}
          />
          <Question
            question="Já sofreu algum tipo de abuso nessa área?"
            value={answers.abuseInArea}
            onChange={(value) => handleChange("abuseInArea", value)}
          />
          <Question
            question="Você considera esta uma área segura?"
            value={answers.safeArea}
            onChange={(value) => handleChange("safeArea", value)}
          />
        </div>

        <button type="submit" style={styles.submitButton}>
          Enviar respostas
        </button>
      </form>
    </div>
  );
};

const Question = ({ question, value, onChange }) => {
  return (
    <div style={styles.questionText}>
      <p>{question}</p>
      <div style={styles.radioGroup}>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            name={question}
            value="Sim"
            checked={value === "Sim"}
            onChange={() => onChange("Sim")}
            style={value === "Sim" ? styles.selectedRadio : {}}
          />
          Sim
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            name={question}
            value="Não"
            checked={value === "Não"}
            onChange={() => onChange("Não")}
            style={value === "Não" ? styles.selectedRadio : {}}
          />
          Não
        </label>
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
    padding: "20px",
    backgroundColor: "#f0f0f0",
    height: "100vh",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
    textAlign: "center",
  },
  addressContainer: {
    marginBottom: "20px",
    width: "100%",
    maxWidth: "400px",
  },
  label: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  addressInput: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
  },
  questionContainer: {
    marginBottom: "20px",
  },
  questionText: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  radioGroup: {
    display: "flex",
    gap: "10px",
  },
  radioLabel: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  selectedRadio: {
    backgroundColor: "#800080", // roxo
    borderRadius: "5px",
    padding: "5px",
    color: "#fff",
    outline: "none",
  },
  submitButton: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
};

export default SafetyEvaluationScreen; 
