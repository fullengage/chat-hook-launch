export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author_avatar: string | null
          author_name: string
          category: string
          content: string
          created_at: string
          excerpt: string | null
          featured_image: string | null
          id: string
          meta_description: string | null
          published: boolean
          published_at: string | null
          read_time: number | null
          slug: string
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author_avatar?: string | null
          author_name: string
          category: string
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          meta_description?: string | null
          published?: boolean
          published_at?: string | null
          read_time?: number | null
          slug: string
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author_avatar?: string | null
          author_name?: string
          category?: string
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          meta_description?: string | null
          published?: boolean
          published_at?: string | null
          read_time?: number | null
          slug?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          active: boolean | null
          app: string | null
          bot_message: string | null
          conversation_id: string | null
          created_at: string
          id: number
          message_type: string | null
          phone: string | null
          user_id: string | null
          user_message: string | null
          user_name: string | null
        }
        Insert: {
          active?: boolean | null
          app?: string | null
          bot_message?: string | null
          conversation_id?: string | null
          created_at?: string
          id?: number
          message_type?: string | null
          phone?: string | null
          user_id?: string | null
          user_message?: string | null
          user_name?: string | null
        }
        Update: {
          active?: boolean | null
          app?: string | null
          bot_message?: string | null
          conversation_id?: string | null
          created_at?: string
          id?: number
          message_type?: string | null
          phone?: string | null
          user_id?: string | null
          user_message?: string | null
          user_name?: string | null
        }
        Relationships: []
      }
      chats: {
        Row: {
          app: string | null
          conversation_id: string | null
          created_at: string
          id: number
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          app?: string | null
          conversation_id?: string | null
          created_at?: string
          id?: number
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          app?: string | null
          conversation_id?: string | null
          created_at?: string
          id?: number
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      contatos: {
        Row: {
          avatar_url: string | null
          created_at: string
          empresa_id: string
          id: string
          nome: string | null
          observacoes: string | null
          tags: string[] | null
          telefone: string
          tipo: Database["public"]["Enums"]["tipo_contato"] | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          empresa_id: string
          id?: string
          nome?: string | null
          observacoes?: string | null
          tags?: string[] | null
          telefone: string
          tipo?: Database["public"]["Enums"]["tipo_contato"] | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          empresa_id?: string
          id?: string
          nome?: string | null
          observacoes?: string | null
          tags?: string[] | null
          telefone?: string
          tipo?: Database["public"]["Enums"]["tipo_contato"] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contatos_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      conversas: {
        Row: {
          agente_id: string | null
          assunto: string | null
          contato_id: string
          created_at: string
          empresa_id: string
          id: string
          prioridade: Database["public"]["Enums"]["prioridade_conversa"]
          status: Database["public"]["Enums"]["status_conversa"]
          ultima_atividade: string
          ultima_mensagem: string | null
          updated_at: string
        }
        Insert: {
          agente_id?: string | null
          assunto?: string | null
          contato_id: string
          created_at?: string
          empresa_id: string
          id?: string
          prioridade?: Database["public"]["Enums"]["prioridade_conversa"]
          status?: Database["public"]["Enums"]["status_conversa"]
          ultima_atividade?: string
          ultima_mensagem?: string | null
          updated_at?: string
        }
        Update: {
          agente_id?: string | null
          assunto?: string | null
          contato_id?: string
          created_at?: string
          empresa_id?: string
          id?: string
          prioridade?: Database["public"]["Enums"]["prioridade_conversa"]
          status?: Database["public"]["Enums"]["status_conversa"]
          ultima_atividade?: string
          ultima_mensagem?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversas_agente_id_fkey"
            columns: ["agente_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversas_contato_id_fkey"
            columns: ["contato_id"]
            isOneToOne: false
            referencedRelation: "contatos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversas_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      empresas: {
        Row: {
          ativa: boolean
          configuracoes: Json | null
          created_at: string
          id: string
          logo_url: string | null
          nome: string
          slug: string
          updated_at: string
        }
        Insert: {
          ativa?: boolean
          configuracoes?: Json | null
          created_at?: string
          id?: string
          logo_url?: string | null
          nome: string
          slug: string
          updated_at?: string
        }
        Update: {
          ativa?: boolean
          configuracoes?: Json | null
          created_at?: string
          id?: string
          logo_url?: string | null
          nome?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      mensagens: {
        Row: {
          conteudo: string
          conversa_id: string
          created_at: string
          enviada_por_agente: boolean
          evolution_message_id: string | null
          id: string
          metadata: Json | null
          remetente_id: string | null
          tipo: string
        }
        Insert: {
          conteudo: string
          conversa_id: string
          created_at?: string
          enviada_por_agente?: boolean
          evolution_message_id?: string | null
          id?: string
          metadata?: Json | null
          remetente_id?: string | null
          tipo?: string
        }
        Update: {
          conteudo?: string
          conversa_id?: string
          created_at?: string
          enviada_por_agente?: boolean
          evolution_message_id?: string | null
          id?: string
          metadata?: Json | null
          remetente_id?: string | null
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "mensagens_conversa_id_fkey"
            columns: ["conversa_id"]
            isOneToOne: false
            referencedRelation: "conversas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mensagens_remetente_id_fkey"
            columns: ["remetente_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notas_internas: {
        Row: {
          autor_id: string
          conteudo: string
          conversa_id: string
          created_at: string
          id: string
        }
        Insert: {
          autor_id: string
          conteudo: string
          conversa_id: string
          created_at?: string
          id?: string
        }
        Update: {
          autor_id?: string
          conteudo?: string
          conversa_id?: string
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notas_internas_autor_id_fkey"
            columns: ["autor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notas_internas_conversa_id_fkey"
            columns: ["conversa_id"]
            isOneToOne: false
            referencedRelation: "conversas"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          ativo: boolean
          avatar_url: string | null
          cargo: Database["public"]["Enums"]["cargo_usuario"]
          created_at: string | null
          email: string | null
          empresa_id: string | null
          id: string
          name: string | null
          telefone: string | null
        }
        Insert: {
          ativo?: boolean
          avatar_url?: string | null
          cargo?: Database["public"]["Enums"]["cargo_usuario"]
          created_at?: string | null
          email?: string | null
          empresa_id?: string | null
          id: string
          name?: string | null
          telefone?: string | null
        }
        Update: {
          ativo?: boolean
          avatar_url?: string | null
          cargo?: Database["public"]["Enums"]["cargo_usuario"]
          created_at?: string | null
          email?: string | null
          empresa_id?: string | null
          id?: string
          name?: string | null
          telefone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      get_user_empresa_id: {
        Args: { user_id: string }
        Returns: string
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      is_gerente: {
        Args: { user_id: string }
        Returns: boolean
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: unknown
      }
      match_documents: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      cargo_usuario: "gerente" | "agente"
      prioridade_conversa: "baixa" | "media" | "alta" | "urgente"
      status_conversa: "aberta" | "pendente" | "resolvida" | "pausada"
      tipo_contato: "lead" | "cliente" | "spam" | "outros"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      cargo_usuario: ["gerente", "agente"],
      prioridade_conversa: ["baixa", "media", "alta", "urgente"],
      status_conversa: ["aberta", "pendente", "resolvida", "pausada"],
      tipo_contato: ["lead", "cliente", "spam", "outros"],
    },
  },
} as const
