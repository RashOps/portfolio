"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { 
  missionService, 
  skillService, 
  profileService, 
  experienceService, 
  techStackService, 
  explorationService 
} from "@/lib/supabase-client";
import {
  addMissionAction, updateMissionAction, deleteMissionAction,
  updateProfileAction,
  addExperienceAction, updateExperienceAction, deleteExperienceAction,
  addTechAction, updateTechAction, deleteTechAction,
  addExplorationAction, updateExplorationAction, deleteExplorationAction,
  addSkillAction, updateSkillAction, deleteSkillAction,
  uploadImageAction, uploadCVAction
} from "@/lib/actions";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  
  // Data States
  const [missions, setMissions] = useState([]);
  const [skills, setSkills] = useState([]);
  const [profile, setProfile] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [explorations, setExplorations] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [activeTab, setActiveTab] = useState("missions");

  // Loading States for forms
  const [isUploading, setIsUploading] = useState(false);

  // Form States (Missions)
  const [isAddingMission, setIsAddingMission] = useState(false);
  const [editingMissionId, setEditingMissionId] = useState(null);
  const [missionForm, setMissionForm] = useState({
    title: "", description: "", tech_stack: "", url: "", github_url: "", image_url: "", status: "Active", category: "Fullstack", filterGroup: "Tous",
    client_name: "", role: "", key_metrics: "", content: "", is_featured: false, start_date: "", end_date: ""
  });

  // Form States (Profile)
  const [profileForm, setProfileForm] = useState({
    name: "", status: "", location: "", specialization: "", formation_text: "", objectives_text: "",
    versatility_dynamic: true, versatility_manual: 86,
    show_tech_stack: true, show_experiences: true, cv_url: ""
  });

  // Form States (Experiences)
  const [isAddingExp, setIsAddingExp] = useState(false);
  const [editingExpId, setEditingExpId] = useState(null);
  const [expForm, setExpForm] = useState({
    title: "", company: "", start_date: "", end_date: "", description: "", type: "Pro",
    icon: "work", color_theme: "primary", tags_input: ""
  });

  // Form States (Tech Stack)
  const [isAddingTech, setIsAddingTech] = useState(false);
  const [editingTechId, setEditingTechId] = useState(null);
  const [techForm, setTechForm] = useState({
    name: "", icon_url: "", category: "Languages", show_in_radar: true
  });

  // Form States (Explorations)
  const [isAddingExploration, setIsAddingExploration] = useState(false);
  const [editingExplorationId, setEditingExplorationId] = useState(null);
  const [explorationForm, setExplorationForm] = useState({
    title: "", description: "", status: "En cours", image_url: "", url: ""
  });

  // Form States (Skills)
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [editingSkillId, setEditingSkillId] = useState(null);
  const [skillForm, setSkillForm] = useState({
    name: "", category: "Engineering", percentage: 50, display_location: "both"
  });

  useEffect(() => {
    if (status === "authenticated") {
      fetchData();
    }
  }, [status]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [
        fetchedMissions, fetchedSkills, fetchedProfile, 
        fetchedExperiences, fetchedTech, fetchedExplorations
      ] = await Promise.all([
        missionService.getMissions(),
        skillService.getSkills(),
        profileService.getProfile(),
        experienceService.getExperiences(),
        techStackService.getTechStack(),
        explorationService.getExplorations()
      ]);
      
      setMissions(fetchedMissions || []);
      setSkills(fetchedSkills || []);
      if (fetchedProfile) {
        setProfile(fetchedProfile);
        setProfileForm(fetchedProfile);
      }
      setExperiences(fetchedExperiences || []);
      setTechStack(fetchedTech || []);
      setExplorations(fetchedExplorations || []);
    } catch (err) {
      console.error("Erreur chargement:", err);
    }
    setIsLoading(false);
    setIsSyncing(false);
  };

  const handleSync = () => {
    setIsSyncing(true);
    fetchData();
  };

  const handleSignOut = () => signOut({ callbackUrl: "/admin/login" });

  const handleImageUpload = async (e, formSetter, formState) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('path', 'uploads');
      const url = await uploadImageAction(formData);
      formSetter({ ...formState, image_url: url });
      alert("Image uploadée avec succès !");
    } catch (err) {
      alert("Erreur upload: " + err.message);
    }
    setIsUploading(false);
  };

  const handleCVUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const url = await uploadCVAction(formData);
      setProfileForm({ ...profileForm, cv_url: url });
      alert("CV uploadé et écrasé avec succès !");
      fetchData();
    } catch (err) {
      alert("Erreur upload CV: " + err.message);
    }
    setIsUploading(false);
  };

  // --- Handlers : Missions ---
  const handleAddMission = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...missionForm,
        tech_stack: Array.isArray(missionForm.tech_stack) ? missionForm.tech_stack : missionForm.tech_stack.split(',').map(s => s.trim())
      };
      if (editingMissionId) {
        await updateMissionAction(editingMissionId, formattedData);
      } else {
        await addMissionAction(formattedData);
      }
      setIsAddingMission(false);
      setEditingMissionId(null);
      setMissionForm({ title: "", description: "", tech_stack: "", url: "", github_url: "", image_url: "", status: "Active", category: "Fullstack", filterGroup: "Tous", client_name: "", role: "", key_metrics: "", content: "", is_featured: false, start_date: "", end_date: "" });
      fetchData();
    } catch (err) { alert("Erreur : " + err.message); }
  };
  const handleEditMission = (mission) => {
    setMissionForm({ 
      ...mission, 
      tech_stack: mission.tech_stack ? mission.tech_stack.join(', ') : "",
      url: mission.url || "",
      github_url: mission.github_url || "",
      image_url: mission.image_url || "",
      description: mission.description || "",
      title: mission.title || "",
      client_name: mission.client_name || "",
      role: mission.role || "",
      key_metrics: mission.key_metrics || "",
      content: mission.content || "",
      is_featured: mission.is_featured || false,
      start_date: mission.start_date || "",
      end_date: mission.end_date || ""
    });
    setEditingMissionId(mission.id);
    setIsAddingMission(true);
  };
  const handleDeleteMission = async (id) => {
    if (confirm("Supprimer cette mission ?")) { await deleteMissionAction(id); fetchData(); }
  };

  // --- Handlers : Profile ---
  const handleSaveProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfileAction(profileForm);
      alert("Profil sauvegardé !");
      fetchData();
    } catch (err) { alert("Erreur : " + err.message); }
  };

  // --- Handlers : Experiences ---
  const handleAddExp = async (e) => {
    e.preventDefault();
    try {
      // Process tags
      const tagsArray = expForm.tags_input 
        ? expForm.tags_input.split(',').map(t => t.trim()).filter(t => t !== "")
        : [];
        
      const payload = {
        title: expForm.title,
        company: expForm.company,
        start_date: expForm.start_date,
        end_date: expForm.end_date,
        description: expForm.description,
        type: expForm.type,
        icon: expForm.icon,
        color_theme: expForm.color_theme,
        tags: tagsArray
      };

      if (editingExpId) {
        await updateExperienceAction(editingExpId, payload);
      } else {
        await addExperienceAction(payload);
      }
      setIsAddingExp(false);
      setEditingExpId(null);
      setExpForm({ title: "", company: "", start_date: "", end_date: "", description: "", type: "Pro", icon: "work", color_theme: "primary", tags_input: "" });
      fetchData();
    } catch (err) { alert("Erreur : " + err.message); }
  };
  const handleEditExp = (exp) => {
    setExpForm({
      ...exp,
      tags_input: exp.tags ? exp.tags.join(', ') : "",
      icon: exp.icon || "work",
      color_theme: exp.color_theme || "primary"
    });
    setEditingExpId(exp.id);
    setIsAddingExp(true);
  };
  const handleDeleteExp = async (id) => {
    if (confirm("Supprimer cette expérience ?")) { await deleteExperienceAction(id); fetchData(); }
  };

  // --- Handlers : Tech Stack ---
  const handleAddTech = async (e) => {
    e.preventDefault();
    try {
      if (editingTechId) {
        await updateTechAction(editingTechId, techForm);
      } else {
        await addTechAction(techForm);
      }
      setIsAddingTech(false);
      setEditingTechId(null);
      setTechForm({ name: "", icon_url: "", category: "Languages", show_in_radar: true });
      fetchData();
    } catch (err) { alert("Erreur : " + err.message); }
  };
  const handleEditTech = (tech) => {
    setTechForm({
      ...tech,
      icon_url: tech.icon_url || "",
      show_in_radar: tech.show_in_radar !== false
    });
    setEditingTechId(tech.id);
    setIsAddingTech(true);
  };
  const handleDeleteTech = async (id) => {
    if (confirm("Supprimer cette techno ?")) { await deleteTechAction(id); fetchData(); }
  };

  // --- Handlers : Explorations ---
  const handleAddExploration = async (e) => {
    e.preventDefault();
    try {
      if (editingExplorationId) {
        await updateExplorationAction(editingExplorationId, explorationForm);
      } else {
        await addExplorationAction(explorationForm);
      }
      setIsAddingExploration(false);
      setEditingExplorationId(null);
      setExplorationForm({ title: "", description: "", status: "En cours", image_url: "", url: "" });
      fetchData();
    } catch (err) { alert("Erreur : " + err.message); }
  };
  const handleEditExploration = (exp) => {
    setExplorationForm({
      ...exp,
      url: exp.url || "",
      image_url: exp.image_url || "",
      description: exp.description || ""
    });
    setEditingExplorationId(exp.id);
    setIsAddingExploration(true);
  };
  const handleDeleteExploration = async (id) => {
    if (confirm("Supprimer cette exploration ?")) { await deleteExplorationAction(id); fetchData(); }
  };

  // --- Handlers : Skills ---
  const handleAddSkill = async (e) => {
    e.preventDefault();
    try {
      if (editingSkillId) {
        await updateSkillAction(editingSkillId, skillForm);
      } else {
        await addSkillAction(skillForm);
      }
      setIsAddingSkill(false);
      setEditingSkillId(null);
      setSkillForm({ name: "", category: "Engineering", percentage: 50, display_location: "both" });
      fetchData();
    } catch (err) { alert("Erreur : " + err.message); }
  };
  const handleEditSkill = (skill) => {
    setSkillForm(skill);
    setEditingSkillId(skill.id);
    setIsAddingSkill(true);
  };
  const handleDeleteSkill = async (id) => {
    if (confirm("Supprimer cette compétence ?")) { await deleteSkillAction(id); fetchData(); }
  };

  if (status === "loading" || isLoading) return <div className="min-h-screen bg-background flex items-center justify-center text-primary animate-pulse">Chargement de l'interface...</div>;

  const TABS = [
    { id: "missions", label: "Missions Phares" },
    { id: "profile", label: "Identité & Profil" },
    { id: "parcours", label: "Parcours (Exp)" },
    { id: "tech_stack", label: "Stack Technique" },
    { id: "explorations", label: "Explorations" },
    { id: "skills", label: "Skills (Jauges)" }
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30 p-4 md:p-8">
      {/* HEADER */}
      <header className="max-w-6xl mx-auto glass rounded-2xl p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 border border-white/5">
        <div>
          <h1 className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
            Portfolio CMS Engine
            <button onClick={handleSync} disabled={isSyncing} className={`p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors ${isSyncing ? "animate-spin opacity-50" : ""}`} title="Synchroniser avec la base de données">
              <span className="material-symbols-outlined text-sm">sync</span>
            </button>
          </h1>
          <p className="text-xs text-on-surface-variant">Connecté en tant que: <span className="text-white">{session?.user?.email}</span></p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors">Voir le site</Link>
          <button onClick={handleSignOut} className="bg-red-500/10 text-red-400 hover:bg-red-500/20 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors">Déconnexion</button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* SIDEBAR NAVIGATION */}
        <div className="md:col-span-3 space-y-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === tab.id 
                  ? "bg-primary text-background shadow-[0_0_15px_rgba(167,139,250,0.3)]" 
                  : "glass text-on-surface-variant hover:text-white hover:bg-white/5 border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* WORKSPACE */}
        <div className="md:col-span-9">
          
          {/* --- TAB: MISSIONS --- */}
          {activeTab === "missions" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-headline font-bold">Missions Phares</h2>
                <button onClick={() => {
                  setEditingMissionId(null);
                  setMissionForm({ title: "", description: "", tech_stack: "", url: "", github_url: "", image_url: "", status: "Active", category: "Fullstack", filterGroup: "Tous", client_name: "", role: "", key_metrics: "", content: "", is_featured: false, start_date: "", end_date: "" });
                  setIsAddingMission(!isAddingMission);
                }} className="bg-primary text-background px-4 py-2 rounded-lg text-xs font-bold uppercase">
                  {isAddingMission ? "Annuler" : "+ Ajouter"}
                </button>
              </div>

              {isAddingMission && (
                <div className="glass rounded-2xl p-6 mb-8 border border-primary/30">
                  <form onSubmit={handleAddMission} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input required type="text" placeholder="Titre (ex: FinSight RAG)" className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full" value={missionForm.title} onChange={e => setMissionForm({...missionForm, title: e.target.value})} />
                      <input required type="text" placeholder="Statut (ex: Déployé)" className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full" value={missionForm.status} onChange={e => setMissionForm({...missionForm, status: e.target.value})} />
                      <input required type="text" placeholder="Catégorie (ex: Generative AI)" className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full" value={missionForm.category} onChange={e => setMissionForm({...missionForm, category: e.target.value})} />
                      <select required className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full" value={missionForm.filterGroup} onChange={e => setMissionForm({...missionForm, filterGroup: e.target.value})}>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Data Engineering">Data Engineering</option>
                        <option value="Fullstack">Fullstack</option>
                        <option value="Tous">Tous</option>
                      </select>
                      
                      <input type="text" placeholder="Client / Entreprise (optionnel)" className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full" value={missionForm.client_name} onChange={e => setMissionForm({...missionForm, client_name: e.target.value})} />
                      <input type="text" placeholder="Rôle (optionnel, ex: Lead Data Engineer)" className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full" value={missionForm.role} onChange={e => setMissionForm({...missionForm, role: e.target.value})} />
                      
                      <input type="text" placeholder="Date début (ex: Juin 2025)" className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full" value={missionForm.start_date} onChange={e => setMissionForm({...missionForm, start_date: e.target.value})} />
                      <input type="text" placeholder="Date fin (ex: Sept 2025)" className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full" value={missionForm.end_date} onChange={e => setMissionForm({...missionForm, end_date: e.target.value})} />
                      
                      <input type="text" placeholder="Métriques d'impact (ex: Précision 98% | Latence -40%)" className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full md:col-span-2" value={missionForm.key_metrics} onChange={e => setMissionForm({...missionForm, key_metrics: e.target.value})} />

                      <input required type="text" placeholder="Technologies (virgule)" className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full" value={missionForm.tech_stack} onChange={e => setMissionForm({...missionForm, tech_stack: e.target.value})} />
                      <input type="text" placeholder="URL Démo ou /route interne (optionnel)" className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full" value={missionForm.url} onChange={e => setMissionForm({...missionForm, url: e.target.value})} />
                      
                      <input type="url" placeholder="URL GitHub (optionnel)" className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full" value={missionForm.github_url} onChange={e => setMissionForm({...missionForm, github_url: e.target.value})} />
                      <div className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full flex items-center gap-3">
                        <input type="checkbox" id="is_featured" className="w-4 h-4 accent-primary" checked={missionForm.is_featured} onChange={e => setMissionForm({...missionForm, is_featured: e.target.checked})} />
                        <label htmlFor="is_featured" className="text-on-surface-variant font-bold cursor-pointer">Mettre en avant (Featured ⭐)</label>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container p-4 rounded-lg flex items-center justify-between">
                      <div className="text-sm text-on-surface-variant">Image Cover (Optionnel):</div>
                      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setMissionForm, missionForm)} className="text-sm" disabled={isUploading}/>
                      {missionForm.image_url && <span className="text-xs text-green-400">✅ Uploaded</span>}
                    </div>
                    
                    <textarea required placeholder="Description courte (utilisée pour la carte)..." className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full h-20" value={missionForm.description} onChange={e => setMissionForm({...missionForm, description: e.target.value})}></textarea>
                    
                    <textarea placeholder="Contenu détaillé (Markdown) pour une future page dédiée (Optionnel)..." className="bg-surface-container rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full h-40 font-mono text-xs" value={missionForm.content} onChange={e => setMissionForm({...missionForm, content: e.target.value})}></textarea>
                    
                    <button type="submit" className="w-full bg-primary text-background font-bold py-3 rounded-lg" disabled={isUploading}>{editingMissionId ? "Mettre à jour" : "Sauvegarder"}</button>
                  </form>
                </div>
              )}

              <div className="space-y-4">
                {missions.map(mission => (
                  <div key={mission.id} className="glass rounded-xl p-5 flex justify-between items-center hover:border-white/20">
                    <div>
                      <h3 className="font-bold text-white flex items-center gap-2">
                        {mission.is_featured && <span className="text-yellow-400 material-symbols-outlined text-sm">star</span>}
                        {mission.title} 
                        <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded uppercase">{mission.status}</span>
                      </h3>
                      <p className="text-xs text-on-surface-variant">{mission.category} | {mission.filterGroup} {mission.client_name && `• ${mission.client_name}`}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEditMission(mission)} className="text-blue-400 bg-blue-400/10 p-2 rounded-lg hover:bg-blue-400/20"><span className="material-symbols-outlined text-sm">edit</span></button>
                      <button onClick={() => handleDeleteMission(mission.id)} className="text-red-400 bg-red-400/10 p-2 rounded-lg hover:bg-red-400/20"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* --- TAB: PROFILE --- */}
          {activeTab === "profile" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-xl font-headline font-bold mb-6">Identité & Profil Global</h2>
              <form onSubmit={handleSaveProfile} className="glass rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required type="text" placeholder="Nom Complet" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={profileForm.name} onChange={e => setProfileForm({...profileForm, name: e.target.value})} />
                  <input required type="text" placeholder="Statut (ex: Data Engineer)" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={profileForm.status} onChange={e => setProfileForm({...profileForm, status: e.target.value})} />
                  <input required type="text" placeholder="Localisation" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={profileForm.location} onChange={e => setProfileForm({...profileForm, location: e.target.value})} />
                  <input required type="text" placeholder="Spécialisation" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={profileForm.specialization} onChange={e => setProfileForm({...profileForm, specialization: e.target.value})} />
                </div>
                
                <div className="glass rounded-xl p-4 border border-white/5 space-y-4">
                  <h3 className="font-bold text-sm text-primary">Configuration : Indice de Polyvalence (SkillTree)</h3>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-bold text-on-surface-variant">
                      <input type="checkbox" className="w-4 h-4 accent-primary" checked={profileForm.versatility_dynamic !== false} onChange={e => setProfileForm({...profileForm, versatility_dynamic: e.target.checked})} />
                      Calcul Dynamique (Basé sur la moyenne des Skills)
                    </label>
                  </div>
                  {profileForm.versatility_dynamic === false && (
                    <div>
                      <label className="text-xs text-on-surface-variant block mb-1">Valeur Manuelle de l'indice (ex: 86)</label>
                      <input type="number" min="0" max="100" className="bg-surface-container rounded-lg px-4 py-2 text-sm w-32 focus:ring-1 focus:ring-primary" value={profileForm.versatility_manual || 86} onChange={e => setProfileForm({...profileForm, versatility_manual: parseInt(e.target.value)})} />
                    </div>
                  )}
                </div>
                <div className="glass rounded-xl p-4 border border-white/5 space-y-4 mt-4">
                  <h3 className="font-bold text-sm text-secondary">Modularité de la page Profil</h3>
                  <div className="flex items-center gap-6 flex-wrap">
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-bold text-on-surface-variant">
                      <input type="checkbox" className="w-4 h-4 accent-secondary" checked={profileForm.show_tech_stack !== false} onChange={e => setProfileForm({...profileForm, show_tech_stack: e.target.checked})} />
                      Afficher la section "Stack Technique"
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-bold text-on-surface-variant">
                      <input type="checkbox" className="w-4 h-4 accent-tertiary" checked={profileForm.show_experiences !== false} onChange={e => setProfileForm({...profileForm, show_experiences: e.target.checked})} />
                      Afficher la section "Parcours & Expériences"
                    </label>
                  </div>
                </div>

                <div className="glass rounded-xl p-4 border border-white/5 space-y-4 mt-4">
                  <h3 className="font-bold text-sm text-tertiary flex items-center justify-between">
                    Curriculum Vitae (PDF)
                    {profileForm.cv_url && <a href={profileForm.cv_url} target="_blank" className="text-xs text-blue-400 hover:underline">Voir le CV actuel</a>}
                  </h3>
                  <div className="flex items-center gap-4">
                    <input type="file" accept="application/pdf" onChange={handleCVUpload} className="text-sm bg-surface-container rounded-lg p-2 w-full" disabled={isUploading}/>
                    {isUploading && <span className="text-xs text-on-surface-variant animate-pulse">Upload...</span>}
                  </div>
                  <p className="text-xs text-on-surface-variant/70 italic">En uplaodant un nouveau CV, l'ancien sera automatiquement écrasé (upsert) pour ne pas encombrer le serveur.</p>
                </div>

                <textarea placeholder="Texte de Formation" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full h-24 mt-4" value={profileForm.formation_text} onChange={e => setProfileForm({...profileForm, formation_text: e.target.value})}></textarea>
                <textarea placeholder="Objectifs / Valeurs" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full h-24 mt-4" value={profileForm.objectives_text} onChange={e => setProfileForm({...profileForm, objectives_text: e.target.value})}></textarea>
                <button type="submit" className="w-full bg-primary text-background font-bold py-3 rounded-lg">Mettre à jour le profil</button>
              </form>
            </motion.div>
          )}

          {/* --- TAB: PARCOURS --- */}
          {activeTab === "parcours" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-headline font-bold">Parcours & Expériences</h2>
                <button onClick={() => {
                  setEditingExpId(null);
                  setExpForm({ title: "", company: "", start_date: "", end_date: "", description: "", type: "Pro", icon: "work", color_theme: "primary", tags_input: "" });
                  setIsAddingExp(!isAddingExp);
                }} className="bg-primary text-background px-4 py-2 rounded-lg text-xs font-bold uppercase">{isAddingExp ? "Annuler" : "+ Ajouter"}</button>
              </div>

              {isAddingExp && (
                <div className="glass rounded-2xl p-6 mb-8 border border-primary/30">
                  <form onSubmit={handleAddExp} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input required type="text" placeholder="Titre (ex: Data Engineer)" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={expForm.title} onChange={e => setExpForm({...expForm, title: e.target.value})} />
                      <input required type="text" placeholder="Entreprise / École" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={expForm.company} onChange={e => setExpForm({...expForm, company: e.target.value})} />
                      <input required type="text" placeholder="Date début (ex: Sept 2024)" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={expForm.start_date} onChange={e => setExpForm({...expForm, start_date: e.target.value})} />
                      <input type="text" placeholder="Date fin (ex: Présent)" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={expForm.end_date} onChange={e => setExpForm({...expForm, end_date: e.target.value})} />
                      <select className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={expForm.type} onChange={e => setExpForm({...expForm, type: e.target.value})}>
                        <option value="Pro">Professionnel</option>
                        <option value="Academique">Académique</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <select className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={expForm.icon} onChange={e => setExpForm({...expForm, icon: e.target.value})}>
                        <optgroup label="Général">
                          <option value="work">Malette (Travail)</option>
                          <option value="business_center">Business</option>
                          <option value="school">Diplôme / École</option>
                          <option value="rocket_launch">Fusée (Master/Pivot)</option>
                        </optgroup>
                        <optgroup label="Spécialités">
                          <option value="auto_awesome">Magie (Transformation/IA)</option>
                          <option value="campaign">Communication / Mégaphone</option>
                          <option value="analytics">Analyse Data / Graph</option>
                          <option value="settings_input_component">Data Engineering (Connecteurs)</option>
                          <option value="inventory_2">Stocks / Supply Chain</option>
                          <option value="code">Code / Dev</option>
                          <option value="terminal">Terminal / DevOps</option>
                        </optgroup>
                      </select>
                      <select className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={expForm.color_theme} onChange={e => setExpForm({...expForm, color_theme: e.target.value})}>
                        <option value="primary">Primaire (Ambré)</option>
                        <option value="secondary">Secondaire (Bleu Clair)</option>
                        <option value="tertiary">Tertiaire (Mauve/Rose)</option>
                        <option value="white">Neutre (Gris/Blanc)</option>
                      </select>
                    </div>
                    <input type="text" placeholder="Tags (séparés par des virgules, ex: Data Science, Business)" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={expForm.tags_input} onChange={e => setExpForm({...expForm, tags_input: e.target.value})} />
                    <textarea placeholder="Description" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full h-24" value={expForm.description} onChange={e => setExpForm({...expForm, description: e.target.value})}></textarea>
                    <button type="submit" className="w-full bg-primary text-background font-bold py-3 rounded-lg">{editingExpId ? "Mettre à jour" : "Sauvegarder"}</button>
                  </form>
                </div>
              )}

              <div className="space-y-4">
                {experiences.map(exp => (
                  <div key={exp.id} className="glass rounded-xl p-5 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-white">{exp.title} <span className="text-xs text-primary">@ {exp.company}</span></h3>
                      <p className="text-xs text-on-surface-variant">{exp.start_date} - {exp.end_date} | {exp.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEditExp(exp)} className="text-blue-400 bg-blue-400/10 p-2 rounded-lg hover:bg-blue-400/20"><span className="material-symbols-outlined text-sm">edit</span></button>
                      <button onClick={() => handleDeleteExp(exp.id)} className="text-red-400 bg-red-400/10 p-2 rounded-lg hover:bg-red-400/20"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* --- TAB: TECH STACK --- */}
          {activeTab === "tech_stack" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-headline font-bold">Stack Technique</h2>
                <button onClick={() => {
                  setEditingTechId(null);
                  setTechForm({ name: "", icon_url: "", category: "Languages" });
                  setIsAddingTech(!isAddingTech);
                }} className="bg-primary text-background px-4 py-2 rounded-lg text-xs font-bold uppercase">{isAddingTech ? "Annuler" : "+ Ajouter"}</button>
              </div>

              {isAddingTech && (
                <div className="glass rounded-2xl p-6 mb-8 border border-primary/30">
                  <form onSubmit={handleAddTech} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input required type="text" placeholder="Nom (ex: Python)" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={techForm.name} onChange={e => setTechForm({...techForm, name: e.target.value})} />
                      <select className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={techForm.category} onChange={e => setTechForm({...techForm, category: e.target.value})}>
                        <option value="Languages">Languages</option>
                        <option value="Frameworks">Frameworks / Dev & Ops</option>
                        <option value="Databases & Tools">Databases & Tools</option>
                        <option value="Dataviz & BI">Dataviz & BI</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-4 bg-surface-container rounded-lg px-4 py-3">
                      <input type="checkbox" id="show_in_radar" className="w-4 h-4 accent-primary" checked={techForm.show_in_radar !== false} onChange={e => setTechForm({...techForm, show_in_radar: e.target.checked})} />
                      <label htmlFor="show_in_radar" className="text-sm font-bold text-on-surface-variant cursor-pointer">Afficher dans le Radar Technologique (SkillTree)</label>
                    </div>
                    <div className="bg-surface-container p-4 rounded-lg flex items-center justify-between">
                      <div className="text-sm text-on-surface-variant">Icone (Optionnel):</div>
                      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setTechForm, techForm)} className="text-sm" disabled={isUploading}/>
                    </div>
                    <button type="submit" className="w-full bg-primary text-background font-bold py-3 rounded-lg" disabled={isUploading}>{editingTechId ? "Mettre à jour" : "Sauvegarder"}</button>
                  </form>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techStack.map(tech => (
                  <div key={tech.id} className="glass rounded-xl p-4 flex flex-col items-center justify-center relative group">
                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => handleEditTech(tech)} className="text-blue-400 hover:bg-blue-400/10 p-1 rounded-lg"><span className="material-symbols-outlined text-xs">edit</span></button>
                      <button onClick={() => handleDeleteTech(tech.id)} className="text-red-400 hover:bg-red-400/10 p-1 rounded-lg"><span className="material-symbols-outlined text-xs">delete</span></button>
                    </div>
                    {tech.icon_url ? <img src={tech.icon_url} alt={tech.name} className="w-8 h-8 mb-2" /> : <div className="w-8 h-8 bg-white/10 rounded-full mb-2"></div>}
                    <span className="text-xs font-bold">{tech.name}</span>
                    <span className="text-[10px] text-on-surface-variant">{tech.category}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* --- TAB: EXPLORATIONS --- */}
          {activeTab === "explorations" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-headline font-bold">Explorations (Side-Quests)</h2>
                <button onClick={() => {
                  setEditingExplorationId(null);
                  setExplorationForm({ title: "", description: "", status: "En cours", image_url: "", url: "" });
                  setIsAddingExploration(!isAddingExploration);
                }} className="bg-primary text-background px-4 py-2 rounded-lg text-xs font-bold uppercase">{isAddingExploration ? "Annuler" : "+ Ajouter"}</button>
              </div>

              {isAddingExploration && (
                <div className="glass rounded-2xl p-6 mb-8 border border-primary/30">
                  <form onSubmit={handleAddExploration} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input required type="text" placeholder="Titre (ex: Trading Algo)" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={explorationForm.title} onChange={e => setExplorationForm({...explorationForm, title: e.target.value})} />
                      <select className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={explorationForm.status} onChange={e => setExplorationForm({...explorationForm, status: e.target.value})}>
                        <option value="En cours">En cours</option>
                        <option value="Terminé">Terminé</option>
                        <option value="Bientôt">Bientôt</option>
                      </select>
                      <input type="url" placeholder="URL (optionnel)" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={explorationForm.url} onChange={e => setExplorationForm({...explorationForm, url: e.target.value})} />
                    </div>
                    <div className="bg-surface-container p-4 rounded-lg flex items-center justify-between">
                      <div className="text-sm text-on-surface-variant">Image Cover:</div>
                      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setExplorationForm, explorationForm)} className="text-sm" disabled={isUploading}/>
                    </div>
                    <textarea required placeholder="Description..." className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full h-24" value={explorationForm.description} onChange={e => setExplorationForm({...explorationForm, description: e.target.value})}></textarea>
                    <button type="submit" className="w-full bg-primary text-background font-bold py-3 rounded-lg" disabled={isUploading}>{editingExplorationId ? "Mettre à jour" : "Sauvegarder"}</button>
                  </form>
                </div>
              )}

              <div className="space-y-4">
                {explorations.map(exp => (
                  <div key={exp.id} className="glass rounded-xl p-5 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-white">{exp.title} <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded uppercase">{exp.status}</span></h3>
                      <p className="text-xs text-on-surface-variant line-clamp-1">{exp.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEditExploration(exp)} className="text-blue-400 bg-blue-400/10 p-2 rounded-lg hover:bg-blue-400/20"><span className="material-symbols-outlined text-sm">edit</span></button>
                      <button onClick={() => handleDeleteExploration(exp.id)} className="text-red-400 bg-red-400/10 p-2 rounded-lg hover:bg-red-400/20"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* --- TAB: SKILLS --- */}
          {activeTab === "skills" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-headline font-bold">Jauges de Compétences (Skills)</h2>
                <button onClick={() => {
                  setEditingSkillId(null);
                  setSkillForm({ name: "", category: "Engineering", percentage: 50 });
                  setIsAddingSkill(!isAddingSkill);
                }} className="bg-primary text-background px-4 py-2 rounded-lg text-xs font-bold uppercase">{isAddingSkill ? "Annuler" : "+ Ajouter"}</button>
              </div>

              {isAddingSkill && (
                <div className="glass rounded-2xl p-6 mb-8 border border-primary/30">
                  <form onSubmit={handleAddSkill} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input required type="text" placeholder="Nom de la compétence" className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={skillForm.name} onChange={e => setSkillForm({...skillForm, name: e.target.value})} />
                      <select className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full" value={skillForm.category} onChange={e => setSkillForm({...skillForm, category: e.target.value})}>
                        <option value="Engineering">Engineering</option>
                        <option value="Science">Data Science & IA</option>
                        <option value="Biz">Biz / Management</option>
                        <option value="Languages">Langages (Python, SQL...)</option>
                      </select>
                      <select className="bg-surface-container rounded-lg px-4 py-3 text-sm w-full md:col-span-2" value={skillForm.display_location} onChange={e => setSkillForm({...skillForm, display_location: e.target.value})}>
                        <option value="both">Afficher partout (Operator Profile & SkillTree)</option>
                        <option value="profile">Afficher UNIQUEMENT sur l'Operator Profile</option>
                        <option value="skill-tree">Afficher UNIQUEMENT sur le SkillTree</option>
                      </select>
                      <div className="md:col-span-2">
                        <label className="text-sm text-on-surface-variant block mb-2">Maîtrise : {skillForm.percentage}%</label>
                        <input type="range" min="0" max="100" value={skillForm.percentage} className="w-full accent-primary" onChange={e => setSkillForm({...skillForm, percentage: parseInt(e.target.value)})} />
                      </div>
                    </div>
                    <button type="submit" className="w-full bg-primary text-background font-bold py-3 rounded-lg">{editingSkillId ? "Mettre à jour" : "Sauvegarder la compétence"}</button>
                  </form>
                </div>
              )}

              <div className="space-y-4">
                {skills.map(skill => (
                  <div key={skill.id} className="glass rounded-xl p-5 flex flex-col gap-3 relative group">
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <button onClick={() => handleEditSkill(skill)} className="text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 p-2 rounded-lg"><span className="material-symbols-outlined text-sm">edit</span></button>
                      <button onClick={() => handleDeleteSkill(skill.id)} className="text-red-400 bg-red-400/10 hover:bg-red-400/20 p-2 rounded-lg"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                    <div className="flex justify-between items-center pr-12">
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-on-surface-variant opacity-60 block mb-1">{skill.category}</span>
                        <span className="font-bold text-sm text-white">{skill.name}</span>
                      </div>
                      <span className="text-primary font-headline font-bold">{skill.percentage}%</span>
                    </div>
                    <input type="range" min="0" max="100" defaultValue={skill.percentage} className="w-full accent-primary pointer-events-none" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </main>
    </div>
  );
}
