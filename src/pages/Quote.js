import React from 'react';

const Quote = () => (
  <main style={styles.container}>
    <h1>Request a Quotation</h1>
    <form style={styles.form}>
      <label>
        Name:<br />
        <input type="text" name="name" style={styles.input} />
      </label>
      <br /><br />
      <label>
        Email:<br />
        <input type="email" name="email" style={styles.input} />
      </label>
      <br /><br />
      <label>
        Select Package:<br />
        <select name="package" style={styles.input}>
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
          <option value="elite">Elite</option>
        </select>
      </label>
      <br /><br />
      <button type="submit" style={styles.button}>Send Quotation</button>
    </form>
  </main>
);

const styles = {
  container: {
    maxWidth: 400,
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: "'Arial', sans-serif",
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    padding: 8,
    fontSize: 16,
    marginTop: 4,
    borderRadius: 4,
    border: '1px solid #ccc',
  },
  button: {
    marginTop: 20,
    padding: '12px 20px',
    fontSize: 16,
    color: 'white',
    backgroundColor: '#ff5a5f',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
};

export default Quote;
