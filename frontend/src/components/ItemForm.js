// src/components/ItemForm.js
import React, { useState } from 'react';

const ItemForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState({
    name:     initialData?.name     || '',
    description: initialData?.description || '',
    category: initialData?.category || '',
    imageFile: null
  });
  const [preview, setPreview] = useState(initialData?.imageUrl || '');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
  };

  const handleFile = e => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData(f => ({ ...f, imageFile: file }));
    // gera preview
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // monta FormData
    const fd = new FormData();
    fd.append('name', formData.name);
    fd.append('description', formData.description);
    fd.append('category', formData.category);
    if (formData.imageFile) {
      fd.append('image', formData.imageFile);
    }
    onSubmit(fd);
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      {/* campos de texto */}
      <div className="form-group">
        <label>Nome:</label>
        <input name="name" value={formData.name} onChange={handleChange} required />
      </div>
      {/* ... descrição e categoria iguais ... */}
      
      {/* input de arquivo */}
      <div className="form-group">
        <label>Imagem:</label>
        <input type="file" accept="image/*" onChange={handleFile} required />
        {preview && (
          <img src={preview} alt="Prévia" className="preview" />
        )}
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <button type="button" className="btn back" onClick={() => window.history.back()}>
          Voltar
        </button>
        <button type="submit" className="btn submit">Salvar</button>
      </div>
    </form>
  );
};

export default ItemForm;
