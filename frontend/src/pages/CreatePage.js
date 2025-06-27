import React, { useState } from 'react';
import { useNavigate }      from 'react-router-dom';
import { createItem }       from '../services/api';
import ItemForm             from '../components/ItemForm';
import heroImg              from '../assets/hero.svg';  
import './CreatePage.css';

const CreatePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  const handleSubmit = async item => {
    setLoading(true);
    setError(null);
    console.log('📤 [CreatePage] enviando:', item);

    try {
      const res = await createItem(item);
      console.log('✅ [API] status:', res.status);
      navigate('/', { replace: true });
    } catch (err) {
      console.error('❌ [API] falhou:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-page">
      <div className="create-hero">
        <img src={heroImg} alt="Ilustração de criação" />
      </div>

      <button
        className="btn back"
        onClick={() => navigate(-1)}
      >
        Voltar à lista
      </button>

      <h2>Criar Novo Item</h2>

      {error && (
        <p className="error-msg">
          Ocorreu um erro ao salvar. Tente novamente.
        </p>
      )}

      {loading ? (
        <p className="loading">Salvando item…</p>
      ) : (
        <ItemForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default CreatePage;
