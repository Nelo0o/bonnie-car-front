import React from "react";
import "./RecentAd.scss";
import AdCard from "@/app/components/AdCard/AdCard";

const RecentAd = () => {
  return (
     <section className="recent-ad">
       <h2>Nouveautés</h2>
       <div className="recent-ad__wrapper wrapper">
         <AdCard src={"/assets/images/yamaha.png"}
                 alt={"yamaha"}
                 price={"1555"}
                 title={"Yamaha"}
                 model={"DT 125"}
                 cc={"125cc"}
                 km={"12000km"}
                 year={"2022"}
                 ratings={[
                   {label: 'CARROSSERIE', value: 3},
                   {label: 'MÉCANIQUE', value: 5},
                   {label: 'SUIVI ENTRETIEN', value: 4}
                 ]}
         />
         <AdCard src={"/assets/images/yamaha.png"}
                 alt={"yamaha"}
                 price={"1555"}
                 title={"Yamaha"}
                 model={"DT 125"}
                 cc={"125cc"}
                 km={"12000km"}
                 year={"2022"}
                 ratings={[
                   {label: 'CARROSSERIE', value: 3},
                   {label: 'MÉCANIQUE', value: 5},
                   {label: 'SUIVI ENTRETIEN', value: 4}
                 ]}
         />
         <AdCard src={"/assets/images/yamaha.png"}
                 alt={"yamaha"}
                 price={"1555"}
                 title={"Yamaha"}
                 model={"DT 125"}
                 cc={"125cc"}
                 km={"12000km"}
                 year={"2022"}
                 ratings={[
                   {label: 'CARROSSERIE', value: 3},
                   {label: 'MÉCANIQUE', value: 5},
                   {label: 'SUIVI ENTRETIEN', value: 4}
                 ]}
         />
         <AdCard src={"/assets/images/yamaha.png"}
                 alt={"yamaha"}
                 price={"1555"}
                 title={"Yamaha"}
                 model={"DT 125"}
                 cc={"125cc"}
                 km={"12000km"}
                 year={"2022"}
                 ratings={[
                   {label: 'CARROSSERIE', value: 3},
                   {label: 'MÉCANIQUE', value: 5},
                   {label: 'SUIVI ENTRETIEN', value: 4}
                 ]}
         />
         <AdCard src={"/assets/images/yamaha.png"}
                 alt={"yamaha"}
                 price={"1555"}
                 title={"Yamaha"}
                 model={"DT 125"}
                 cc={"125cc"}
                 km={"12000km"}
                 year={"2022"}
                 ratings={[
                   {label: 'CARROSSERIE', value: 3},
                   {label: 'MÉCANIQUE', value: 5},
                   {label: 'SUIVI ENTRETIEN', value: 4}
                 ]}
         />
       </div>
     </section>
  );
}

export default RecentAd;