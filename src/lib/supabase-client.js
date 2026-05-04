import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase credentials missing. Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in .env.local");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Service pour gérer les Missions du Portfolio
 */
export const missionService = {
  async getMissions() {
    const { data, error } = await supabase
      .from('missions')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error("Erreur getMissions:", error);
      return [];
    }
    return data;
  }
};

/**
 * Service pour gérer les Compétences (Skills) du Portfolio
 */
export const skillService = {
  async getSkills() {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('category', { ascending: true })
      .order('percentage', { ascending: false });
    
    if (error) {
      console.error("Erreur getSkills:", error);
      return [];
    }
    return data;
  }
};

/**
 * Service pour gérer le Profil Opérateur
 */
export const profileService = {
  async getProfile() {
    const { data, error } = await supabase
      .from('operator_profile')
      .select('*')
      .limit(1)
      .single();
    
    if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned" which is fine initially
      console.error("Erreur getProfile:", error);
      return null;
    }
    return data;
  }
};

/**
 * Service pour gérer le Parcours (Expériences)
 */
export const experienceService = {
  async getExperiences() {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  }
};

/**
 * Service pour gérer la Stack Technique
 */
export const techStackService = {
  async getTechStack() {
    const { data, error } = await supabase.from('tech_stack').select('*').order('category', { ascending: true });
    if (error) throw error;
    return data;
  }
};

/**
 * Service pour gérer les Explorations (Side-quests)
 */
export const explorationService = {
  async getExplorations() {
    const { data, error } = await supabase.from('explorations').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  }
};


