import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getItems, updateItem } from '../services/api';
import ItemForm from '../components/ItemForm';

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    getItems().then(res => {
      const target = res.data.find(item => item._id === id);
      setItemData(target);
    });
  }, [id]);

  const handleSubmit = async (updatedItem) => {
    await updateItem(id, updatedItem);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Editar Item</h2>
      {itemData ? (
        <ItemForm initialData={itemData} onSubmit={handleSubmit} />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default EditPage;
