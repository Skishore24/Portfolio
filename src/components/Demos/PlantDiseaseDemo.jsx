import React, { useState } from 'react';
import { Leaf, Scan, AlertTriangle, CheckCircle, RefreshCw, Activity, ShieldCheck } from 'lucide-react';

const SAMPLE_PLANTS = [
  {
    id: 'tomato-blight',
    name: 'Tomato Plant',
    leafLabel: 'Tomato Leaf Sample (Blighted)',
    disease: 'Tomato Late Blight (Phytophthora infestans)',
    status: 'Infected',
    severity: 'Severe (85%)',
    confidence: '98.7%',
    symptoms: [
      'Dark brown water-soaked lesions on lower leaves',
      'White fungal sporulation on leaf underside in moist conditions',
      'Rapid wilting of terminal shoots'
    ],
    remedy: 'Apply Copper Fungicide or Chlorothalonil every 7 days. Remove and destroy infected foliage immediately to prevent spore transmission.',
    organicAlternative: 'Spray Neem oil solution (2 tbsp/gallon water) mixed with mild liquid soap.'
  },
  {
    id: 'apple-scab',
    name: 'Apple Tree',
    leafLabel: 'Apple Leaf Sample (Scab lesion)',
    disease: 'Apple Scab (Venturia inaequalis)',
    status: 'Infected',
    severity: 'Moderate (45%)',
    confidence: '96.4%',
    symptoms: [
      'Olive-green to brown velvety spots on foliage',
      'Deformed leaf margins and premature leaf drop',
      'Fruit lesions developing corky skin texture'
    ],
    remedy: 'Apply Sulfur-based organic fungicide at tight cluster stage. Ensure adequate orchard canopy pruning for rapid leaf drying.',
    organicAlternative: 'Potassium bicarbonate spray (3 tbsp/gallon) combined with horticultural oil.'
  },
  {
    id: 'corn-rust',
    name: 'Maize / Corn',
    leafLabel: 'Corn Leaf Sample (Rust pustules)',
    disease: 'Common Corn Rust (Puccinia sorghi)',
    status: 'Infected',
    severity: 'Mild (25%)',
    confidence: '97.9%',
    symptoms: [
      'Small golden-brown cinnamon pustules scattered on upper & lower leaf surfaces',
      'Pustules rupture releasing powdery urediniospores',
      'Slight chlorotic halo surrounding lesions'
    ],
    remedy: 'Plant resistant corn hybrids. If infection exceeds 10% lower leaves before tasseling, apply triazole or strobilurin fungicides.',
    organicAlternative: 'Maintain soil potassium balance and avoid over-nitrogen fertilization.'
  },
  {
    id: 'healthy-wheat',
    name: 'Wheat Crop',
    leafLabel: 'Wheat Canopy Sample',
    disease: 'Healthy Leaf - No Pathology Detected',
    status: 'Healthy',
    severity: 'None (0%)',
    confidence: '99.2%',
    symptoms: [
      'Vibrant uniform green pigmentation',
      'Intact leaf cuticles without fungal or bacterial necrosis',
      'Optimal photosynthetic area index'
    ],
    remedy: 'No chemical treatment required. Continue standard balanced irrigation and crop monitoring schedules.',
    organicAlternative: 'Maintain soil microbe health with compost tea applications.'
  }
];

export default function PlantDiseaseDemo() {
  const [selectedPlant, setSelectedPlant] = useState(SAMPLE_PLANTS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(true);

  const handleScan = (plant) => {
    setSelectedPlant(plant);
    setIsScanning(true);
    setScanComplete(false);
    
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 1500);
  };

  return (
    <div className="space-y-6 text-slate-200">
      <div className="bg-slate-900/80 border border-emerald-500/20 rounded-2xl p-5 backdrop-blur-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-lg">
            <Leaf className="w-5 h-5" />
            <span>Interactive Crop Leaf Diagnosis Simulator</span>
          </div>
          <span className="text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-mono">
            PyTorch Vision v2.4 Engine
          </span>
        </div>

        <p className="text-xs text-slate-400 mb-4">
          Select a crop sample below to trigger the real-time AI leaf scanner beam & diagnostic pathology engine:
        </p>

        {/* Sample Selection Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
          {SAMPLE_PLANTS.map((plant) => (
            <button
              key={plant.id}
              onClick={() => handleScan(plant)}
              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                selectedPlant.id === plant.id
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300 shadow-lg shadow-emerald-500/10'
                  : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="font-semibold text-sm mb-1">{plant.name}</div>
              <div className="text-[10px] opacity-75 truncate">{plant.disease}</div>
            </button>
          ))}
        </div>

        {/* Scanner Canvas / Visual Area */}
        <div className="relative overflow-hidden bg-slate-950 border border-slate-800 rounded-xl p-6 min-h-[220px] flex flex-col items-center justify-center">
          {/* Scanning Beam Animation */}
          {isScanning && (
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10B981] animate-pulse absolute top-0 left-0 right-0 translate-y-0 duration-1000 transition-transform"></div>
              <div className="absolute inset-0 bg-emerald-500/5 backdrop-blur-[1px]"></div>
              <div className="flex flex-col items-center justify-center h-full gap-2">
                <Scan className="w-10 h-10 text-emerald-400 animate-spin" />
                <span className="text-xs font-mono text-emerald-400 tracking-wider">Extracting Leaf Pathology Features...</span>
              </div>
            </div>
          )}

          {scanComplete && !isScanning && (
            <div className="w-full space-y-4">
              <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
                <div>
                  <h4 className="text-base font-bold text-slate-100">{selectedPlant.disease}</h4>
                  <p className="text-xs text-slate-400">{selectedPlant.leafLabel}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-medium flex items-center gap-1 ${
                    selectedPlant.status === 'Healthy'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                  }`}>
                    {selectedPlant.status === 'Healthy' ? <CheckCircle className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                    {selectedPlant.status}
                  </span>
                  <span className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2.5 py-1 rounded-full font-mono">
                    Conf: {selectedPlant.confidence}
                  </span>
                </div>
              </div>

              {/* Symptoms */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Observed Diagnostic Symptoms:</span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                  {selectedPlant.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 bg-slate-900/60 p-2 rounded-lg border border-slate-800/60">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment Recommendation */}
              <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-3 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Recommended Treatment Protocol:</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{selectedPlant.remedy}</p>
                <div className="text-[11px] text-emerald-300/80 pt-1 border-t border-emerald-500/10">
                  <strong className="text-emerald-400">Organic Alternative:</strong> {selectedPlant.organicAlternative}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
