"use client";

import "leaflet/dist/leaflet.css";

import Image from "next/image";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const officeLocation: [number, number] = [32.4443, 74.115];

const customIcon = L.divIcon({
  html: `
    <div class="map-marker">
      <svg xmlns="http://www.w3.org/2000/svg"
           width="40"
           height="40"
           viewBox="0 0 24 24"
           fill="#A0D14F"
           stroke="#070B12"
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    </div>
  `,
  className: "",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function OfficeMap() {
  return (
    <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-20">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-['JetBrains_Mono'] text-[16px] tracking-[3.2px] text-[#A0D14F] uppercase">
              Global Infrastructure
            </p>

            <h2 className="mt-4 font-['Space_Grotesk'] text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-bold tracking-[-2px] text-[#DFE2ED]">
              Visit Our Office
            </h2>
          </div>

          <a
            href={`https://www.google.com/maps?q=${officeLocation[0]},${officeLocation[1]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['JetBrains_Mono'] text-[14px] tracking-[2px] text-[#0057FF] uppercase transition-colors hover:text-[#A0D14F]"
          >
            Open in Google Maps →
          </a>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-[12px] border border-white/10">
          <MapContainer
            center={officeLocation}
            zoom={15}
            scrollWheelZoom={false}
            style={{
              width: "100%",
              height: "650px",
            }}
          >
            {/* Map */}
            <TileLayer
              attribution="&copy; OpenStreetMap contributors &copy; CARTO"
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              subdomains={["a", "b", "c", "d"]}
            />{" "}
            <div className="absolute inset-0 z-[400] bg-[#070B12]/45 mix-blend-multiply" />
            <Marker position={officeLocation} icon={customIcon}>
              <Popup>
                <div className="font-sans">
                  <strong>DigiGrowtherz</strong>
                  <br />
                  Street No. 3,
                  <br />
                  Mohallah Jinnah Colony,
                  <br />
                  Wazirabad, Pakistan
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
