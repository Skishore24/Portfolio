import React, { useState } from 'react';
import { Activity, Stethoscope, Heart, ShieldAlert, CheckCircle2, AlertOctagon, RefreshCw } from 'lucide-react';

const SYMPTOMS_LIST = [
  { id: 'fever', label: 'High Fever (>38.5°C)' },
  { id: 'cough', label: 'Persistent Dry Cough' },
  { id: 'sob', label: 'Shortness of Breath' },
  { id: 'fatigue', label: 'Acute Muscle Fatigue' },
  { id: 'chest', label: 'Chest Tightness' },
  { id: 'headache', label: 'Severe Frontal Headache' },
  { id: 'throat', label: 'Pharyngeal Soreness' },
];

export default function MedicalDiagnosisDemo() {
  const [selectedSymptoms, setSelectedSymptoms] = useState(['fever', 'cough', 'fatigue']);
  const [heartRate, setHeartRate] = useState(88);
  const [spo2, setSpo2] = useState(96);
  const [temp, setTemp] = useState(100.8);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [result, setResult] = useState({
    primaryCondition: 'Acute Upper Respiratory Tract Infection (Viral)',
    confidence: 94.2,
    triageLevel: 'Urgent Evaluation Recommended',
    triageColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    differentials: [
      { name: 'Influenza Type A/B', prob: '94.2%' },
      { name: 'Community-Acquired Pneumonia', prob: '32.5%' },
      { name: 'Bronchitis Exacerbation', prob: '18.7%' }
    ],
    recommendation: 'Recommend clinical chest auscultation, rapid viral PCR panel test, hydration therapy, and antipyretics. Monitor SpO2 levels every 4 hours.'
  });

  const toggleSymptom = (id) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  const handleEvaluate = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);

      const hasSOB = selectedSymptoms.includes('sob');
      const hasChest = selectedSymptoms.includes('chest');
      const isLowO2 = spo2 < 93;

      if (hasChest || (hasSOB && isLowO2)) {
        setResult({
          primaryCondition: 'Acute Lower Respiratory Distress / Hypoxia Risk',
          confidence: 97.6,
          triageLevel: 'Emergency High Triage Priority',
          triageColor: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
          differentials: [
            { name: 'Pneumonia with Hypoxemia', prob: '97.6%' },
            { name: 'Acute Pulmonary Embolism Risk', prob: '68.2%' },
            { name: 'Severe Asthmatic Bronchospasm', prob: '44.0%' }
          ],
          recommendation: 'Immediate ER / ICU evaluation required. Administer supplemental O2 therapy, arterial blood gas check, and urgent chest CT scan.'
        });
      } else if (selectedSymptoms.length >= 4) {
        setResult({
          primaryCondition: 'Acute Viral Syndrome / Systemic Infection',
          confidence: 91.8,
          triageLevel: 'Moderate Urgent Care Triage',
          triageColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
          differentials: [
            { name: 'Influenza A/B Infection', prob: '91.8%' },
            { name: 'Viral Pharyngitis', prob: '45.1%' },
            { name: 'Acute Sinusitis', prob: '22.4%' }
          ],
          recommendation: 'Schedule urgent care evaluation. Prescribe symptom management, bed rest, and electrolyte replacement.'
        });
      } else {
        setResult({
          primaryCondition: 'Mild Respiratory Tract Irritation',
          confidence: 89.4,
          triageLevel: 'Routine Outpatient Follow-up',
          triageColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
          differentials: [
            { name: 'Mild Rhinovirus / Common Cold', prob: '89.4%' },
            { name: 'Environmental Allergies', prob: '38.0%' }
          ],
          recommendation: 'Rest, warm fluids, OTC antipyretics if needed. Re-evaluate if symptoms persist past 5 days.'
        });
      }
    }, 1200);
  };

  return (
    <div className="space-y-5 text-slate-200">
      <div className="bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-5 backdrop-blur-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold text-lg">
            <Stethoscope className="w-5 h-5" />
            <span>Clinical AI Diagnostic Assistant Simulator</span>
          </div>
          <span className="text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full font-mono">
            Medical NLP Matrix v3.2
          </span>
        </div>

        {/* Symptoms Selector Grid */}
        <div className="space-y-2 mb-4">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Select Patient Symptoms:</label>
          <div className="flex flex-wrap gap-2">
            {SYMPTOMS_LIST.map((sym) => {
              const active = selectedSymptoms.includes(sym.id);
              return (
                <button
                  key={sym.id}
                  onClick={() => toggleSymptom(sym.id)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    active
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-500/10 font-medium'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {active && <span className="mr-1 text-cyan-400">✓</span>}
                  {sym.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Vital Metrics Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Heart Rate (BPM)</span>
              <span className="text-cyan-400 font-mono font-bold">{heartRate}</span>
            </div>
            <input
              type="range"
              min="50"
              max="140"
              value={heartRate}
              onChange={(e) => setHeartRate(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Oxygen Sat. (SpO2 %)</span>
              <span className={spo2 < 94 ? 'text-rose-400 font-mono font-bold' : 'text-emerald-400 font-mono font-bold'}>
                {spo2}%
              </span>
            </div>
            <input
              type="range"
              min="85"
              max="100"
              value={spo2}
              onChange={(e) => setSpo2(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Temp (°F)</span>
              <span className="text-cyan-400 font-mono font-bold">{temp}°F</span>
            </div>
            <input
              type="range"
              min="97.0"
              max="104.0"
              step="0.2"
              value={temp}
              onChange={(e) => setTemp(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
          </div>
        </div>

        {/* Evaluate Action Button */}
        <button
          onClick={handleEvaluate}
          disabled={isEvaluating}
          className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50"
        >
          {isEvaluating ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Analyzing Clinical Symptoms & Vitals...</span>
            </>
          ) : (
            <>
              <Activity className="w-4 h-4" />
              <span>Run AI Clinical Diagnosis & Triage</span>
            </>
          )}
        </button>

        {/* Diagnostic Output Results */}
        {!isEvaluating && result && (
          <div className="mt-5 space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
              <div>
                <span className="text-[10px] uppercase text-slate-400 tracking-wider">Primary Diagnostic Hypothesis:</span>
                <h4 className="text-base font-bold text-slate-100">{result.primaryCondition}</h4>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full border font-semibold ${result.triageColor}`}>
                {result.triageLevel}
              </span>
            </div>

            {/* Differential Probabilities */}
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Differential Probabilities:</span>
              <div className="space-y-1.5 mt-2">
                {result.differentials.map((diff, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs bg-slate-900/60 px-3 py-2 rounded-lg border border-slate-800/80">
                    <span className="text-slate-300 font-medium">{diff.name}</span>
                    <span className="text-cyan-400 font-mono font-bold">{diff.prob}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Plan */}
            <div className="text-xs text-slate-300 bg-cyan-950/20 border border-cyan-500/20 p-3 rounded-lg leading-relaxed">
              <strong className="text-cyan-400 block mb-1">Recommended Care Protocol:</strong>
              {result.recommendation}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
