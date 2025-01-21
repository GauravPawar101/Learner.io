// Login/Signup done

import { useState, React } from 'react';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const [mode, setMode] = useState('login');
  return (
    <div>
      <LoginForm mode={mode} />
      
    </div>
  )
}
