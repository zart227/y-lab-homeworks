'use client'; // Указывает, что это клиентский компонент

import { useState, FormEvent } from 'react';
import styles from '@/styles/AuthForm.module.scss'; // Используем алиас

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      setMessage({ text: 'Login successful', type: 'success' });
    } else {
      setMessage({ text: 'Login failed: ' + data.message, type: 'error' });
    }
  };

  return (
    <div className={styles.authForm}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Login</h2>
      </div>
      <div className={styles.messageContainer}>
        {message && (
          <p className={`${styles.message} ${styles[message.type]}`}>
            {message.text}
          </p>
        )}      
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
};

export default AuthForm;