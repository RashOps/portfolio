"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn("Supabase admin credentials missing. Make sure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.");
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

/**
 * Vérifie que l'utilisateur est bien l'admin
 */
async function checkAuth() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || session.user.email !== process.env.ADMIN_EMAIL) {
    throw new Error("Accès refusé : Action non autorisée.");
  }
}

// ==========================================
// MISSIONS
// ==========================================
export async function addMissionAction(missionData) {
  await checkAuth();
  const { data, error } = await supabaseAdmin.from('missions').insert([missionData]).select();
  if (error) throw new Error(error.message);
  revalidatePath('/mission-log');
  revalidatePath('/admin/dashboard');
  return data[0];
}

export async function updateMissionAction(id, missionData) {
  await checkAuth();
  const { data, error } = await supabaseAdmin.from('missions').update(missionData).eq('id', id).select();
  if (error) throw new Error(error.message);
  revalidatePath('/mission-log');
  revalidatePath('/admin/dashboard');
  return data[0];
}

export async function deleteMissionAction(id) {
  await checkAuth();
  const { error } = await supabaseAdmin.from('missions').delete().eq('id', id);
  if (error) throw new Error(error.message);
  revalidatePath('/mission-log');
  revalidatePath('/admin/dashboard');
  return true;
}

// ==========================================
// PROFILE
// ==========================================
export async function updateProfileAction(profileData) {
  await checkAuth();
  // Fetch existing profile to know if we insert or update
  const { data: existingProfile } = await supabaseAdmin.from('operator_profile').select('id').limit(1).single();
  
  let result;
  if (existingProfile) {
    result = await supabaseAdmin.from('operator_profile').update(profileData).eq('id', existingProfile.id).select();
  } else {
    result = await supabaseAdmin.from('operator_profile').insert([profileData]).select();
  }
  
  if (result.error) throw new Error(result.error.message);
  revalidatePath('/operator-profile');
  revalidatePath('/admin/dashboard');
  return result.data[0];
}

// ==========================================
// EXPERIENCES
// ==========================================
export async function addExperienceAction(expData) {
  await checkAuth();
  const { data, error } = await supabaseAdmin.from('experiences').insert([expData]).select();
  if (error) throw new Error(error.message);
  revalidatePath('/operator-profile');
  revalidatePath('/admin/dashboard');
  return data[0];
}

export async function updateExperienceAction(id, expData) {
  await checkAuth();
  const { data, error } = await supabaseAdmin.from('experiences').update(expData).eq('id', id).select();
  if (error) throw new Error(error.message);
  revalidatePath('/operator-profile');
  revalidatePath('/admin/dashboard');
  return data[0];
}

export async function deleteExperienceAction(id) {
  await checkAuth();
  const { error } = await supabaseAdmin.from('experiences').delete().eq('id', id);
  if (error) throw new Error(error.message);
  revalidatePath('/operator-profile');
  revalidatePath('/admin/dashboard');
  return true;
}

// ==========================================
// TECH STACK
// ==========================================
export async function addTechAction(techData) {
  await checkAuth();
  const { data, error } = await supabaseAdmin.from('tech_stack').insert([techData]).select();
  if (error) throw new Error(error.message);
  revalidatePath('/operator-profile');
  revalidatePath('/admin/dashboard');
  return data[0];
}

export async function updateTechAction(id, techData) {
  await checkAuth();
  const { data, error } = await supabaseAdmin.from('tech_stack').update(techData).eq('id', id).select();
  if (error) throw new Error(error.message);
  revalidatePath('/operator-profile');
  revalidatePath('/admin/dashboard');
  return data[0];
}

export async function deleteTechAction(id) {
  await checkAuth();
  const { error } = await supabaseAdmin.from('tech_stack').delete().eq('id', id);
  if (error) throw new Error(error.message);
  revalidatePath('/operator-profile');
  revalidatePath('/admin/dashboard');
  return true;
}

// ==========================================
// EXPLORATIONS
// ==========================================
export async function addExplorationAction(expData) {
  await checkAuth();
  const { data, error } = await supabaseAdmin.from('explorations').insert([expData]).select();
  if (error) throw new Error(error.message);
  revalidatePath('/side-quests');
  revalidatePath('/admin/dashboard');
  return data[0];
}

export async function updateExplorationAction(id, expData) {
  await checkAuth();
  const { data, error } = await supabaseAdmin.from('explorations').update(expData).eq('id', id).select();
  if (error) throw new Error(error.message);
  revalidatePath('/side-quests');
  revalidatePath('/admin/dashboard');
  return data[0];
}

export async function deleteExplorationAction(id) {
  await checkAuth();
  const { error } = await supabaseAdmin.from('explorations').delete().eq('id', id);
  if (error) throw new Error(error.message);
  revalidatePath('/side-quests');
  revalidatePath('/admin/dashboard');
  return true;
}

// ==========================================
// SKILLS
// ==========================================
export async function addSkillAction(skillData) {
  await checkAuth();
  const { data, error } = await supabaseAdmin.from('skills').insert([skillData]).select();
  if (error) throw new Error(error.message);
  revalidatePath('/operator-profile');
  revalidatePath('/admin/dashboard');
  return data[0];
}

export async function updateSkillAction(id, percentage) {
  await checkAuth();
  const { data, error } = await supabaseAdmin.from('skills').update({ percentage }).eq('id', id).select();
  if (error) throw new Error(error.message);
  revalidatePath('/operator-profile');
  revalidatePath('/admin/dashboard');
  return data[0];
}

export async function deleteSkillAction(id) {
  await checkAuth();
  const { error } = await supabaseAdmin.from('skills').delete().eq('id', id);
  if (error) throw new Error(error.message);
  revalidatePath('/operator-profile');
  revalidatePath('/admin/dashboard');
  return true;
}

// ==========================================
// STORAGE (UPLOAD)
// ==========================================
export async function uploadImageAction(formData) {
  await checkAuth();
  const file = formData.get('file');
  const path = formData.get('path');
  
  if (!file) throw new Error("Aucun fichier fourni.");

  // Convert File to Buffer/ArrayBuffer since we are on the Server
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
  const filePath = `${path}/${fileName}`;

  const { error } = await supabaseAdmin.storage
    .from('portfolio-assets')
    .upload(filePath, buffer, { 
      contentType: file.type,
      cacheControl: '3600', 
      upsert: false 
    });

  if (error) throw new Error(error.message);

  // Récupérer l'URL publique
  const { data } = supabaseAdmin.storage
    .from('portfolio-assets')
    .getPublicUrl(filePath);

  return data.publicUrl;
}
