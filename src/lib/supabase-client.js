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
  },

  async addMission(missionData) {
    const { data, error } = await supabase
      .from('missions')
      .insert([missionData])
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async updateMission(id, missionData) {
    const { data, error } = await supabase
      .from('missions')
      .update(missionData)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async deleteMission(id) {
    const { error } = await supabase
      .from('missions')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
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
  },

  async addSkill(skillData) {
    const { data, error } = await supabase
      .from('skills')
      .insert([skillData])
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async updateSkill(id, percentage) {
    const { data, error } = await supabase
      .from('skills')
      .update({ percentage })
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async deleteSkill(id) {
    const { error } = await supabase
      .from('skills')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
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
  },

  async updateProfile(profileData) {
    const existingProfile = await this.getProfile();
    
    let result;
    if (existingProfile) {
      result = await supabase
        .from('operator_profile')
        .update(profileData)
        .eq('id', existingProfile.id)
        .select();
    } else {
      result = await supabase
        .from('operator_profile')
        .insert([profileData])
        .select();
    }
    
    if (result.error) throw result.error;
    return result.data[0];
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
  },
  async addExperience(expData) {
    const { data, error } = await supabase.from('experiences').insert([expData]).select();
    if (error) throw error;
    return data[0];
  },
  async updateExperience(id, expData) {
    const { data, error } = await supabase.from('experiences').update(expData).eq('id', id).select();
    if (error) throw error;
    return data[0];
  },
  async deleteExperience(id) {
    const { error } = await supabase.from('experiences').delete().eq('id', id);
    if (error) throw error;
    return true;
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
  },
  async addTech(techData) {
    const { data, error } = await supabase.from('tech_stack').insert([techData]).select();
    if (error) throw error;
    return data[0];
  },
  async updateTech(id, techData) {
    const { data, error } = await supabase.from('tech_stack').update(techData).eq('id', id).select();
    if (error) throw error;
    return data[0];
  },
  async deleteTech(id) {
    const { error } = await supabase.from('tech_stack').delete().eq('id', id);
    if (error) throw error;
    return true;
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
  },
  async addExploration(expData) {
    const { data, error } = await supabase.from('explorations').insert([expData]).select();
    if (error) throw error;
    return data[0];
  },
  async updateExploration(id, expData) {
    const { data, error } = await supabase.from('explorations').update(expData).eq('id', id).select();
    if (error) throw error;
    return data[0];
  },
  async deleteExploration(id) {
    const { error } = await supabase.from('explorations').delete().eq('id', id);
    if (error) throw error;
    return true;
  }
};

/**
 * Service pour gérer l'Upload d'images (Supabase Storage)
 */
export const storageService = {
  async uploadImage(file, path) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { error } = await supabase.storage
      .from('portfolio-assets')
      .upload(filePath, file, { cacheControl: '3600', upsert: false });

    if (error) throw error;

    // Récupérer l'URL publique
    const { data } = supabase.storage
      .from('portfolio-assets')
      .getPublicUrl(filePath);

    return data.publicUrl;
  }
};
