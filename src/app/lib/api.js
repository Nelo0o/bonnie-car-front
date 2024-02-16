const getVehicleData = async () => {
  const adsUrl = `http://vps-1d44799d.vps.ovh.net:8055/items/vehicle_ad`;
  const filesUrl = 'http://vps-1d44799d.vps.ovh.net:8055/items/vehicle_ad_files';
  
  try {
    const adResponse = await fetch(adsUrl);
    const ads = await adResponse.json();
    console.log(ads)
    const fileDataResponse = await fetch(filesUrl);
    const fileDataJson = await fileDataResponse.json();
    
    const vehicle_ad_files = fileDataJson.data;
    return ads.data.map(ad => {
      ad.images = vehicle_ad_files
         .filter(file => file.vehicle_ad_id === ad.id)
         .map(file => `http://vps-1d44799d.vps.ovh.net:8055/assets/${file.directus_files_id}`);
      return ad;
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getVehicleData;