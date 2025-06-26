# 🖼️ ItemGallery

![GitHub repo size](https://img.shields.io/github/repo-size/Pfssantos1/ItemGallery)
![GitHub stars](https://img.shields.io/github/stars/Pfssantos1/ItemGallery)
![GitHub forks](https://img.shields.io/github/forks/Pfssantos1/ItemGallery)
![License](https://img.shields.io/github/license/Pfssantos1/ItemGallery)

Projeto final da disciplina **Linguagem de Programação para Internet**. Aplicação web full stack que permite gerenciar itens (produtos, livros, filmes etc.) com informações textuais e imagens.

---

## 🚀 Tecnologias Utilizadas

### Frontend
- ⚛️ React
- 🔗 React Router DOM
- 📡 Axios
- 🎨 CSS Modules

### Backend
- 🟢 Node.js
- ⚙️ Express
- 🍃 MongoDB (Mongoose)
- 🌐 CORS

---

## ⚙️ Instalação e Execução

### Pré-requisitos
- Node.js (v18+)
- npm (v9+)
- MongoDB local ou via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Backend

```bash
git clone https://github.com/Pfssantos1/ItemGallery.git
cd ItemGallery/backend
npm install
```

Crie um arquivo `.env`:

```
MONGODB_URI=mongodb+srv://dbduser:suaSenhaAqui@cluster0.sowepgx.mongodb.net/itemgallery?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
```

Execute o servidor:

```bash
node server.js
```

### Frontend

```bash
cd ../frontend
npm install
npm start
```

---

## 📱 Rotas da Aplicação

- `/` → Lista de itens
- `/create` → Cadastro de item
- `/edit/:id` → Edição de item

---

## 📡 API Endpoints

Base URL: `http://localhost:5000/api/items`

- `GET /api/items`
- `POST /api/items`
- `PUT /api/items/:id`
- `DELETE /api/items/:id`

---

## 📂 Estrutura de Pastas

```
ItemGallery/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── App.js
    │   └── index.js
```

---

## 📸 Screenshot

<img src="./frontend/src/assets/screenshot.png" width="600" alt="ItemGallery Screenshot" />

---

## 🤝 Contribuição

```bash
git checkout -b feature/nova-feature
git commit -m 'Adiciona nova feature'
git push origin feature/nova-feature
```

Depois, abra um Pull Request!

---

## 📝 Licença

Distribuído sob a [Licença MIT](LICENSE).

---

### 👨‍🏫 Informações Acadêmicas

Trabalho final — Linguagem de Programação para Internet  
Professor: Dr. Camilo Barreto — UNIUBE  
Desenvolvido por: [Pedro Santos] e [Natanael Jean]  
Entrega: 25/06/2025
