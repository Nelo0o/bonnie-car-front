/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import "./VehicleFilter.scss";

const VehicleFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    marque: "",
    marque: "",
    prixMin: "",
    prixMax: "",
    typeEnergie: "",
    annee: "",
    kilometrage: "",
    couleur: "",
    localisation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <div className="vfilter_container">
      <div className="vfilter_title">Filtres</div>
      <form onSubmit={handleSubmit} className="vfilter_form">
        <div className="vfilter_input_group">
          <label htmlFor="marque">Marque / Modèle</label>
          <input
            type="text"
            id="marque"
            name="marque"
            value={filters.marque}
            onChange={handleChange}
            placeholder="Marque"
          />
          <input
            type="text"
            id="modele"
            name="modele"
            value={filters.modele}
            onChange={handleChange}
            placeholder="Modèle"
          />
        </div>

        <div className="price_mm_container">
          <label htmlFor="prixMin">Prix</label>
          <input
            placeholder="Min"
            type="number"
            id="prixMin"
            name="prixMin"
            value={filters.prixMin}
            onChange={handleChange}
          />

          <input
            placeholder="Max"
            type="number"
            id="prixMax"
            name="prixMax"
            value={filters.prixMax}
            onChange={handleChange}
          />
        </div>
        <div className="vfilter_title">Caractéristiques</div>
        <div className="price_mm_container">
          <label htmlFor="prixMin">Année</label>
          <input
            placeholder="Min"
            type="number"
            id="annee"
            name="annee"
            value={filters.annee}
            onChange={handleChange}
          />

          <input
            placeholder="Max"
            type="number"
            id="prixMax"
            name="prixMax"
            value={filters.prixMax}
            onChange={handleChange}
          />
        </div>
        <div className="price_mm_container">
          <label htmlFor="prixMin">Kilométrage</label>
          <input
            placeholder="Min"
            type="number"
            id="kmMin"
            name="kmMin"
            value={filters.kmMin}
            onChange={handleChange}
          />

          <input
            placeholder="Max"
            type="number"
            id="kmMax"
            name="kmMax"
            value={filters.kmMax}
            onChange={handleChange}
          />
        </div>

        <div className="vfilter_input_group">
          <div className="en_co_container">
            <label htmlFor="energie">Type d'énergie</label>
            <select
              type="text"
              id="energie"
              name="energie"
              value={filters.energie}
              onChange={handleChange}
            >
              <option value="">Essence</option>
            </select>
          </div>
          <div className="vfilter_input_group">
            <div className="en_co_container">
              <label htmlFor="couleur">Couleur</label>
              <select
                type="text"
                id="couleur"
                name="couleur"
                value={filters.couleur}
                onChange={handleChange}
              >
                <option value="">Noir</option>
              </select>
            </div>
          </div>
        </div>
        <div className="vfilter_input_group">
          <label htmlFor="localisation">Localisation</label>
          <input
            placeholder="🗺️ code postal"
            type="text"
            id="localisation"
            name="localisation"
            value={filters.localisation}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Filtrer</button>
      </form>
    </div>
  );
};

export default VehicleFilter;
