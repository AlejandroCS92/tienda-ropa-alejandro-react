import React, { useState } from 'react';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Mensaje:', message);
    
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <div className='card text-white' style={{ backgroundColor: "white", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img className='card-img' src="src/assets/pexels-karolina-grabowska-4210850.jpg" alt="" style={{width: '500px', height:'500px'}} />
      </div>
      <div className="container mt-5">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensaje:</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
