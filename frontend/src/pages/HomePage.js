import React, { useState, useEffect } from 'react';
import { Link }                    from 'react-router-dom';
import { getItems, deleteItem }    from '../services/api';
import ItemCard                    from '../components/ItemCard';
import heroSVG                     from '../assets/hero.svg';
import './HomePage.css';            // importe o CSS novo

const HomePage = () => {
  const [items, setItems]       = useState([]);
  const [search, setSearch]     = useState('');
  const [category, setCategory] = useState('');
  const [sortAsc, setSortAsc]   = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await getItems();
    setItems(res.data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  const filtered = items
    .filter(i =>
      i.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === '' || i.category === category)
    )
    .sort((a, b) => sortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
    );

  const categories = [...new Set(items.map(i => i.category))];

  return (
    <div className="homepage-grid">
      
      <section className="home-hero">
        <img src={heroSVG} alt="Hero" className="hero-img"/>
        <div className="hero-text">
          <h1>Bem-vindo ao ItemGallery</h1>
          <p>Cadastre, edite e gerencie seus itens de forma simples e eficiente.</p>
          <Link to="/create" className="btn create">+ Novo Item</Link>
        </div>
      </section>

      <aside className="filters">
        <h3>Filtros</h3>
        <input
          className="search-input"
          type="text"
          placeholder="🔍 Buscar por nome..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="filter-select"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">Todas</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button
          className="btn secondary"
          onClick={() => setSortAsc(!sortAsc)}
        >
          Ordenar {sortAsc ? '↓' : '↑'}
        </button>
      </aside>

      <main className="items">
        <div className="items-grid">
          {filtered.map(item => (
            <ItemCard key={item._id} item={item} onDelete={handleDelete}/>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
