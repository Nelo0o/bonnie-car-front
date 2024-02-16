'use client'

import React, {useState, useEffect} from "react";
import "./RecentAd.scss";
import AdCard from "@/app/components/AdCard/AdCard";
import getVehicleData from "@/app/lib/api";
import Link from "next/link";
import Button from "@/app/components/Button/Button";

const RecentAd = () => {
  const [vehicleData, setVehicleData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getVehicleData();
      setVehicleData(data);
    };
    fetchData();
  }, []);
  
  if (!vehicleData) {
    return <div>Loading...</div>;
  }
  
  const vehicle = vehicleData[0];
  
  return (
     <section className="recent-ad">
       <h2>Nouveautés</h2>
       <div className="recent-ad__wrapper wrapper">
         {vehicleData.slice(0,5).map(vehicle => (
              <AdCard key={vehicle.id}
                      src={vehicle.images[0]}
                      alt={vehicle.title}
                      price={vehicle.price.toString()}
                      title={vehicle.title}
                      model={vehicle.model}
                      cc={vehicle.cc_hp + 'cc'}
                      km={vehicle.kilometers.toString() + 'km'}
                      year={vehicle.year.toString()}
                      ratings={[
                        {label: 'CARROSSERIE', value: 3},
                        {label: 'MÉCANIQUE', value: 5},
                        {label: 'SUIVI ENTRETIEN', value: 4}
                      ]}
              />
         ))}
       </div>
       <Link href="/collection">
         <Button buttonText="Voir plus"/>
       </Link>
     </section>
  );
}

export default RecentAd;