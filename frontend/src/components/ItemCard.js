import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item, onDelete }) => (
  <div className="item-card">
    <img
      src={item.imageUrl}
      alt={item.name}
      className="item-image"
      onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
    />
    <h3>{item.name}</h3>
    <p>{item.description}</p>
    <p><strong>Categoria:</strong> {item.category}</p>
    <div className="card-actions">
      <Link to={`/edit/${item._id}`} className="btn edit">Editar</Link>
      <button onClick={() => onDelete(item._id)} className="btn delete">Excluir</button>
    </div>
  </div>
);

export default ItemCard;
