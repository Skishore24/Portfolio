import React, { useState } from 'react';
import { Folder, FileText, Upload, Download, Search, Lock, Unlock, ShieldCheck, CheckCircle2, Trash2 } from 'lucide-react';

const INITIAL_FILES = [
  { id: 1, name: 'Plant_Disease_CNN_Model_Report.pdf', size: '2.4 MB', type: 'Document', date: '2026-02-14', secure: true },
  { id: 2, name: 'MCET_AI_DataScience_Curriculum.docx', size: '1.1 MB', type: 'Document', date: '2026-02-10', secure: false },
  { id: 3, name: 'Leaf_Pathology_Dataset_Metadata.json', size: '450 KB', type: 'Dataset', date: '2026-01-28', secure: true },
  { id: 4, name: 'FullStack_WebDev_Netsaurs_Internship_Summary.pdf', size: '3.8 MB', type: 'Project Report', date: '2025-06-30', secure: false },
  { id: 5, name: 'Custom_LLM_RAG_Architecture_Notes.txt', size: '120 KB', type: 'Code / Notes', date: '2026-03-01', secure: true },
];

export default function FileManagerDemo() {
  const [files, setFiles] = useState(INITIAL_FILES);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const filteredFiles = files.filter(f =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSimulateUpload = () => {
    setIsUploading(true);
    setUploadSuccess(false);
    setTimeout(() => {
      const newFile = {
        id: Date.now(),
        name: `MCET_Lab_Assignment_${files.length + 1}.pdf`,
        size: '1.5 MB',
        type: 'Document',
        date: new Date().toISOString().split('T')[0],
        secure: true
      };
      setFiles([newFile, ...files]);
      setIsUploading(false);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }, 1200);
  };

  const handleDeleteFile = (id) => {
    setFiles(files.filter(f => f.id !== id));
  };

  return (
    <div className="space-y-4 text-slate-200">
      <div className="bg-slate-900/90 border border-blue-500/20 rounded-2xl p-5 backdrop-blur-md">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-2 text-blue-400 font-semibold text-lg">
            <Folder className="w-5 h-5" />
            <span>MCET Campus File Manager Simulator</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAuthenticated(!isAuthenticated)}
              className={`text-xs px-3 py-1 rounded-full border font-mono flex items-center gap-1.5 transition-all ${
                isAuthenticated
                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                  : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
              }`}
            >
              {isAuthenticated ? <ShieldCheck className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
              <span>{isAuthenticated ? 'Authenticated User' : 'Logged Out'}</span>
            </button>
          </div>
        </div>

        {/* Toolbar & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search files by name or type..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

          <button
            onClick={handleSimulateUpload}
            disabled={isUploading || !isAuthenticated}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-40 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <Upload className="w-4 h-4" />
            <span>{isUploading ? 'Uploading File...' : 'Upload File'}</span>
          </button>
        </div>

        {/* Toast Notification */}
        {uploadSuccess && (
          <div className="p-3 mb-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>File uploaded successfully to MCET secure cloud storage!</span>
          </div>
        )}

        {/* File Table / List */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
          <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-slate-900/60 border-b border-slate-800 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            <div className="col-span-6">File Name</div>
            <div className="col-span-2 text-center">Type</div>
            <div className="col-span-2 text-center">Size</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          <div className="divide-y divide-slate-800/60 max-h-[220px] overflow-y-auto">
            {filteredFiles.length > 0 ? (
              filteredFiles.map((file) => (
                <div key={file.id} className="grid grid-cols-12 gap-2 px-4 py-3 items-center text-xs hover:bg-slate-900/40 transition-colors">
                  <div className="col-span-6 flex items-center gap-2.5 truncate">
                    <FileText className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-slate-200 font-medium truncate">{file.name}</span>
                    {file.secure && (
                      <span className="text-[10px] bg-slate-800 text-cyan-400 px-1.5 py-0.5 rounded font-mono shrink-0">
                        Encrypted
                      </span>
                    )}
                  </div>
                  <div className="col-span-2 text-center text-slate-400 text-[11px]">{file.type}</div>
                  <div className="col-span-2 text-center text-slate-400 font-mono text-[11px]">{file.size}</div>
                  <div className="col-span-2 flex items-center justify-end gap-1.5">
                    <button
                      onClick={() => alert(`Simulated Download of ${file.name}`)}
                      className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/40 text-blue-400 transition-colors"
                      title="Download File"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    {isAuthenticated && (
                      <button
                        onClick={() => handleDeleteFile(file.id)}
                        className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-rose-500/40 text-rose-400 transition-colors"
                        title="Delete File"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-xs text-slate-500">
                No matching campus files found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
