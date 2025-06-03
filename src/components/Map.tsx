
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState(localStorage.getItem('mapboxToken') || '');
  const [tokenInput, setTokenInput] = useState('');

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [88.317, 22.448], // Kolkata coordinates
      zoom: 12,
    });

    // Add a marker at the location
    new mapboxgl.Marker({
      color: '#8b5cf6'
    })
    .setLngLat([88.317, 22.448])
    .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap(mapboxToken);
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = () => {
    if (tokenInput.trim()) {
      setMapboxToken(tokenInput);
      localStorage.setItem('mapboxToken', tokenInput);
    }
  };

  if (!mapboxToken) {
    return (
      <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
        <h3 className="text-lg font-semibold text-white mb-4">Add Mapbox Token to View Map</h3>
        <p className="text-gray-300 text-sm mb-4">
          To display the map, please enter your Mapbox public token. Get one at{" "}
          <a 
            href="https://mapbox.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            mapbox.com
          </a>
        </p>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter your Mapbox public token"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400"
          />
          <Button 
            onClick={handleTokenSubmit}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Add Token
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 rounded-xl overflow-hidden border border-purple-500/20">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
