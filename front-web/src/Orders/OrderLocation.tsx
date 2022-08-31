import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Asyn from 'react-select/async';
import { fetchLocalMapBox } from "./api";
import { OrderLocationData } from "./types";

const InitialPosition = {
  lat: -26.4987687,
  lng: -49.1804772,
};

type Place = {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  };
};

type Props={
  onChangeLocation: (location: OrderLocationData) => void;
}

function OrderLocation({onChangeLocation} : Props) {

  const [adress, setAdress] = useState<Place>({ position: InitialPosition});

  const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
    const response = await fetchLocalMapBox(inputValue);
    const places = response.data.features.map((item: any) => {
      return ({
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0]
        },
      });
    });

    callback(places);
  };

  const handleChangeSelect = (place: Place) =>{
    setAdress(place);
    onChangeLocation({
      address: place.label!,
      latitude: place.position.lat,
      longitude: place.position.lng,
    });
  };

  return(
    <>
      <div className="order-location-container">
        <div className="order-location-content">
          <h3 className="order-location-title">
            Selecione onde o pedido for entregue:
          </h3>
          <div className="filter-container">
          <Asyn
            // @ts-ignore
            loadOptions={loadOptions}
            placeholder="Digite um endereço para entregar o pedido"
            className="filter"
            onChange={(value) => handleChangeSelect(value as Place)}
          />
          </div>

          <MapContainer
            center={adress.position}
            zoom={15}
            key = {adress.position.lat}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={adress.position}>
              <Popup>
                {adress.label}
              </Popup>
            </Marker>
          </MapContainer>

        </div>
      </div>
    </>
  );
}

export default OrderLocation;
