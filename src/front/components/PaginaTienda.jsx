import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PaginaTienda.css";

export const PaginaTienda = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [tienda, setTienda] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchTienda = async () => {
      try {
        const response = await fetch(backendUrl + `/api/tienda/${id}`);
        if (!response.ok) throw new Error("Error al cargar la tienda");
        const data = await response.json();
        setTienda(data.tienda);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    };

    fetchTienda();
  }, [id]);

  if (loading) {
    return (
      <div className="pagina-tienda-loading">
        <div className="spinner"></div>
        <p>Cargando tienda...</p>
      </div>
    );
  }

  return (
    <div className="pagina-tienda">
      <section className="tienda-hero">
        <img
          src={tienda?.logo_url}
          alt={tienda?.nombre_tienda}
          className="tienda-imagen"
        />
        <div className="tienda-info">
          <h1>{tienda?.nombre_tienda}</h1>
          <p>{tienda?.descripcion_tienda}</p>
        </div>
      </section>

      <section className="tienda-productos">
        <h2>Productos destacados</h2>
        <div className="productos-grid">
          {tienda?.productos.map((p) => (
            <div key={p.id} className="producto-card card d-flex flex-column">
              <img className="card-img-top " src={p.imagenes} alt={p.nombre_producto} />
              <div className="mt-auto">
                <h3>{p.nombre_producto}</h3>
                <p>${p.precio.toFixed(2)}</p>
                <button className="comprar-btn" onClick={() => navigate("/single/" + p.id)}>Detalles</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};



