export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      activities: {
        Row: {
          account_id: string | null
          activity_date: string
          contact_id: string
          created_at: string
          description: string | null
          id: string
          next_action: string | null
          next_action_date: string | null
          outcome: string | null
          pipeline_stage_id: string | null
          type: string
          updated_at: string
        }
        Insert: {
          account_id?: string | null
          activity_date?: string
          contact_id: string
          created_at?: string
          description?: string | null
          id?: string
          next_action?: string | null
          next_action_date?: string | null
          outcome?: string | null
          pipeline_stage_id?: string | null
          type: string
          updated_at?: string
        }
        Update: {
          account_id?: string | null
          activity_date?: string
          contact_id?: string
          created_at?: string
          description?: string | null
          id?: string
          next_action?: string | null
          next_action_date?: string | null
          outcome?: string | null
          pipeline_stage_id?: string | null
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "activities_pipeline_stage_id_fkey"
            columns: ["pipeline_stage_id"]
            isOneToOne: false
            referencedRelation: "stages"
            referencedColumns: ["id"]
          },
        ]
      }
      alerts: {
        Row: {
          alert_type: string
          created_at: string
          days_inactive: number
          entity_id: string
          entity_name: string
          id: string
          last_activity_date: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          alert_type: string
          created_at?: string
          days_inactive: number
          entity_id: string
          entity_name: string
          id?: string
          last_activity_date?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          alert_type?: string
          created_at?: string
          days_inactive?: number
          entity_id?: string
          entity_name?: string
          id?: string
          last_activity_date?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      campaigns: {
        Row: {
          created_at: string | null
          description: string | null
          end_date: string | null
          id: string
          name: string
          offer: string | null
          sale: string | null
          start_date: string | null
          strategy: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name: string
          offer?: string | null
          sale?: string | null
          start_date?: string | null
          strategy?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name?: string
          offer?: string | null
          sale?: string | null
          start_date?: string | null
          strategy?: string | null
          user_id?: string
        }
        Relationships: []
      }
      chathook_trial_leads: {
        Row: {
          company_size: string | null
          created_at: string | null
          email: string
          id: string
          name: string
          page: string | null
          source: string | null
          user_agent: string | null
          webhook_status: number | null
          whatsapp: string
        }
        Insert: {
          company_size?: string | null
          created_at?: string | null
          email: string
          id?: string
          name: string
          page?: string | null
          source?: string | null
          user_agent?: string | null
          webhook_status?: number | null
          whatsapp: string
        }
        Update: {
          company_size?: string | null
          created_at?: string | null
          email?: string
          id?: string
          name?: string
          page?: string | null
          source?: string | null
          user_agent?: string | null
          webhook_status?: number | null
          whatsapp?: string
        }
        Relationships: []
      }
      client_team_history: {
        Row: {
          changed_at: string | null
          changed_by: string | null
          client_id: string
          id: string
          motivo: string | null
          new_team: string | null
          old_team: string | null
        }
        Insert: {
          changed_at?: string | null
          changed_by?: string | null
          client_id: string
          id?: string
          motivo?: string | null
          new_team?: string | null
          old_team?: string | null
        }
        Update: {
          changed_at?: string | null
          changed_by?: string | null
          client_id?: string
          id?: string
          motivo?: string | null
          new_team?: string | null
          old_team?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_team_history_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_team_history_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "inactive_clients_available"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "client_team_history_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_alertas_comerciais"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "client_team_history_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_alertas"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "client_team_history_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_churn_risk"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_team_history_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_top_clientes"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "client_team_history_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_vendas_consolidadas"
            referencedColumns: ["client_id"]
          },
        ]
      }
      clients: {
        Row: {
          account_holder: string | null
          accounting_account: string | null
          add_delivery_fee_to_bill: boolean | null
          address: string | null
          address_region: string | null
          address_sub_region: string | null
          alerts: string | null
          automatic_invoice: boolean | null
          average_term_days: number | null
          bairro: string | null
          bank_account: string | null
          bank_agency: string | null
          bank_number: string | null
          business_group: string | null
          calculates_icms: boolean | null
          capital_social: string | null
          cep: string | null
          cidade: string | null
          client_id: string | null
          client_type: string | null
          CNAE: string | null
          "CNAE-Principal": string | null
          cnpj: string | null
          company_name: string | null
          company_size: string | null
          contact_name: string | null
          contatos: string | null
          conversion_date: string | null
          converted_from_lead_id: string | null
          cost_center: string | null
          cotacao_moeda: string | null
          cpf: string | null
          created_at: string | null
          credit_docs_quantity: number | null
          credit_limit: number | null
          credit_status: string | null
          credit_validity: string | null
          curve_class: string | null
          daily_interest_percentage: number | null
          data_abertura: string | null
          data_consulta: string | null
          email: string | null
          endereco: string | null
          estado: string | null
          exempt_icms: boolean | null
          final_consumer: boolean | null
          fine_percentage: number | null
          freight_knowledge: string | null
          freight_preselection: boolean | null
          grant_suframa_discount: boolean | null
          hide_installment_on_bill: boolean | null
          icms_deferral: boolean | null
          icms_reduction_percentage: number | null
          icms_st_reduction_percentage: number | null
          id: string
          inscricao_estadual: string | null
          inscricao_municipal: string | null
          ipi_in_icms_base: boolean | null
          ipi_na_bc_icms: string | null
          is_active: boolean | null
          last_contact_date: string | null
          legal_basis: string | null
          lote_produto: string | null
          mix_de_produtos: string | null
          name: string | null
          nao_participar_controle_premiacao: string | null
          nf_transfer_path: string | null
          nome_equipe: string | null
          nome_fantasia: string | null
          not_protest_delivery_bill: boolean | null
          observations: string | null
          opening_date: string | null
          operation_nature: string | null
          payment_form: string | null
          person_type: string | null
          phone: string | null
          pix_key: string | null
          potencial_compra: string | null
          potencial_score: number | null
          potential_level: string | null
          potential_level_int: number | null
          preferred_carrier: string | null
          presence_indicator: string | null
          price_list: string | null
          price_table_id: string | null
          razao_social: string | null
          registration_status_date: string | null
          report_id: string | null
          representatives: string | null
          rg: string | null
          rk: number | null
          sale_with_ipi: boolean | null
          service_taxation: string | null
          site: string | null
          situacao_cadastral: string | null
          somar_taxa_entrega_boleto: string | null
          st_rate_percentage: number | null
          state_inscriptions: Json | null
          suframa_inscription: string | null
          tax_regime: string | null
          tax_substitution: boolean | null
          team: string | null
          tipo_cliente: string | null
          ultima_compra: string | null
          user_id: string | null
          user_name: string | null
          valor: number | null
          valor_backup: number | null
          vencimento_minimo: string | null
        }
        Insert: {
          account_holder?: string | null
          accounting_account?: string | null
          add_delivery_fee_to_bill?: boolean | null
          address?: string | null
          address_region?: string | null
          address_sub_region?: string | null
          alerts?: string | null
          automatic_invoice?: boolean | null
          average_term_days?: number | null
          bairro?: string | null
          bank_account?: string | null
          bank_agency?: string | null
          bank_number?: string | null
          business_group?: string | null
          calculates_icms?: boolean | null
          capital_social?: string | null
          cep?: string | null
          cidade?: string | null
          client_id?: string | null
          client_type?: string | null
          CNAE?: string | null
          "CNAE-Principal"?: string | null
          cnpj?: string | null
          company_name?: string | null
          company_size?: string | null
          contact_name?: string | null
          contatos?: string | null
          conversion_date?: string | null
          converted_from_lead_id?: string | null
          cost_center?: string | null
          cotacao_moeda?: string | null
          cpf?: string | null
          created_at?: string | null
          credit_docs_quantity?: number | null
          credit_limit?: number | null
          credit_status?: string | null
          credit_validity?: string | null
          curve_class?: string | null
          daily_interest_percentage?: number | null
          data_abertura?: string | null
          data_consulta?: string | null
          email?: string | null
          endereco?: string | null
          estado?: string | null
          exempt_icms?: boolean | null
          final_consumer?: boolean | null
          fine_percentage?: number | null
          freight_knowledge?: string | null
          freight_preselection?: boolean | null
          grant_suframa_discount?: boolean | null
          hide_installment_on_bill?: boolean | null
          icms_deferral?: boolean | null
          icms_reduction_percentage?: number | null
          icms_st_reduction_percentage?: number | null
          id?: string
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          ipi_in_icms_base?: boolean | null
          ipi_na_bc_icms?: string | null
          is_active?: boolean | null
          last_contact_date?: string | null
          legal_basis?: string | null
          lote_produto?: string | null
          mix_de_produtos?: string | null
          name?: string | null
          nao_participar_controle_premiacao?: string | null
          nf_transfer_path?: string | null
          nome_equipe?: string | null
          nome_fantasia?: string | null
          not_protest_delivery_bill?: boolean | null
          observations?: string | null
          opening_date?: string | null
          operation_nature?: string | null
          payment_form?: string | null
          person_type?: string | null
          phone?: string | null
          pix_key?: string | null
          potencial_compra?: string | null
          potencial_score?: number | null
          potential_level?: string | null
          potential_level_int?: number | null
          preferred_carrier?: string | null
          presence_indicator?: string | null
          price_list?: string | null
          price_table_id?: string | null
          razao_social?: string | null
          registration_status_date?: string | null
          report_id?: string | null
          representatives?: string | null
          rg?: string | null
          rk?: number | null
          sale_with_ipi?: boolean | null
          service_taxation?: string | null
          site?: string | null
          situacao_cadastral?: string | null
          somar_taxa_entrega_boleto?: string | null
          st_rate_percentage?: number | null
          state_inscriptions?: Json | null
          suframa_inscription?: string | null
          tax_regime?: string | null
          tax_substitution?: boolean | null
          team?: string | null
          tipo_cliente?: string | null
          ultima_compra?: string | null
          user_id?: string | null
          user_name?: string | null
          valor?: number | null
          valor_backup?: number | null
          vencimento_minimo?: string | null
        }
        Update: {
          account_holder?: string | null
          accounting_account?: string | null
          add_delivery_fee_to_bill?: boolean | null
          address?: string | null
          address_region?: string | null
          address_sub_region?: string | null
          alerts?: string | null
          automatic_invoice?: boolean | null
          average_term_days?: number | null
          bairro?: string | null
          bank_account?: string | null
          bank_agency?: string | null
          bank_number?: string | null
          business_group?: string | null
          calculates_icms?: boolean | null
          capital_social?: string | null
          cep?: string | null
          cidade?: string | null
          client_id?: string | null
          client_type?: string | null
          CNAE?: string | null
          "CNAE-Principal"?: string | null
          cnpj?: string | null
          company_name?: string | null
          company_size?: string | null
          contact_name?: string | null
          contatos?: string | null
          conversion_date?: string | null
          converted_from_lead_id?: string | null
          cost_center?: string | null
          cotacao_moeda?: string | null
          cpf?: string | null
          created_at?: string | null
          credit_docs_quantity?: number | null
          credit_limit?: number | null
          credit_status?: string | null
          credit_validity?: string | null
          curve_class?: string | null
          daily_interest_percentage?: number | null
          data_abertura?: string | null
          data_consulta?: string | null
          email?: string | null
          endereco?: string | null
          estado?: string | null
          exempt_icms?: boolean | null
          final_consumer?: boolean | null
          fine_percentage?: number | null
          freight_knowledge?: string | null
          freight_preselection?: boolean | null
          grant_suframa_discount?: boolean | null
          hide_installment_on_bill?: boolean | null
          icms_deferral?: boolean | null
          icms_reduction_percentage?: number | null
          icms_st_reduction_percentage?: number | null
          id?: string
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          ipi_in_icms_base?: boolean | null
          ipi_na_bc_icms?: string | null
          is_active?: boolean | null
          last_contact_date?: string | null
          legal_basis?: string | null
          lote_produto?: string | null
          mix_de_produtos?: string | null
          name?: string | null
          nao_participar_controle_premiacao?: string | null
          nf_transfer_path?: string | null
          nome_equipe?: string | null
          nome_fantasia?: string | null
          not_protest_delivery_bill?: boolean | null
          observations?: string | null
          opening_date?: string | null
          operation_nature?: string | null
          payment_form?: string | null
          person_type?: string | null
          phone?: string | null
          pix_key?: string | null
          potencial_compra?: string | null
          potencial_score?: number | null
          potential_level?: string | null
          potential_level_int?: number | null
          preferred_carrier?: string | null
          presence_indicator?: string | null
          price_list?: string | null
          price_table_id?: string | null
          razao_social?: string | null
          registration_status_date?: string | null
          report_id?: string | null
          representatives?: string | null
          rg?: string | null
          rk?: number | null
          sale_with_ipi?: boolean | null
          service_taxation?: string | null
          site?: string | null
          situacao_cadastral?: string | null
          somar_taxa_entrega_boleto?: string | null
          st_rate_percentage?: number | null
          state_inscriptions?: Json | null
          suframa_inscription?: string | null
          tax_regime?: string | null
          tax_substitution?: boolean | null
          team?: string | null
          tipo_cliente?: string | null
          ultima_compra?: string | null
          user_id?: string | null
          user_name?: string | null
          valor?: number | null
          valor_backup?: number | null
          vencimento_minimo?: string | null
        }
        Relationships: []
      }
      clients_duplicates_bkp: {
        Row: {
          account_holder: string | null
          accounting_account: string | null
          add_delivery_fee_to_bill: boolean | null
          address: string | null
          address_region: string | null
          address_sub_region: string | null
          alerts: string | null
          automatic_invoice: boolean | null
          average_term_days: number | null
          bairro: string | null
          bank_account: string | null
          bank_agency: string | null
          bank_number: string | null
          business_group: string | null
          calculates_icms: boolean | null
          capital_social: string | null
          cep: string | null
          cidade: string | null
          client_id: string | null
          client_type: string | null
          CNAE: string | null
          "CNAE-Principal": string | null
          cnpj: string | null
          company_name: string | null
          company_size: string | null
          contact_name: string | null
          contatos: string | null
          conversion_date: string | null
          converted_from_lead_id: string | null
          cost_center: string | null
          cotacao_moeda: string | null
          cpf: string | null
          created_at: string | null
          credit_docs_quantity: number | null
          credit_limit: number | null
          credit_status: string | null
          credit_validity: string | null
          curve_class: string | null
          daily_interest_percentage: number | null
          data_abertura: string | null
          data_consulta: string | null
          email: string | null
          endereco: string | null
          estado: string | null
          exempt_icms: boolean | null
          final_consumer: boolean | null
          fine_percentage: number | null
          freight_knowledge: string | null
          freight_preselection: boolean | null
          grant_suframa_discount: boolean | null
          hide_installment_on_bill: boolean | null
          icms_deferral: boolean | null
          icms_reduction_percentage: number | null
          icms_st_reduction_percentage: number | null
          id: string
          inscricao_estadual: string | null
          inscricao_municipal: string | null
          ipi_in_icms_base: boolean | null
          ipi_na_bc_icms: string | null
          is_active: boolean | null
          last_contact_date: string | null
          legal_basis: string | null
          lote_produto: string | null
          mix_de_produtos: string | null
          name: string | null
          nao_participar_controle_premiacao: string | null
          nf_transfer_path: string | null
          nome_equipe: string | null
          nome_fantasia: string | null
          not_protest_delivery_bill: boolean | null
          observations: string | null
          opening_date: string | null
          operation_nature: string | null
          payment_form: string | null
          person_type: string | null
          phone: string | null
          pix_key: string | null
          potencial_compra: string | null
          potencial_score: number | null
          potential_level: string | null
          potential_level_int: number | null
          preferred_carrier: string | null
          presence_indicator: string | null
          price_list: string | null
          price_table_id: string | null
          razao_social: string | null
          registration_status_date: string | null
          report_id: string | null
          representatives: string | null
          rg: string | null
          rk: number | null
          sale_with_ipi: boolean | null
          service_taxation: string | null
          site: string | null
          situacao_cadastral: string | null
          somar_taxa_entrega_boleto: string | null
          st_rate_percentage: number | null
          state_inscriptions: Json | null
          suframa_inscription: string | null
          tax_regime: string | null
          tax_substitution: boolean | null
          team: string | null
          tipo_cliente: string | null
          user_id: string | null
          user_name: string | null
          valor: number | null
          vencimento_minimo: string | null
        }
        Insert: {
          account_holder?: string | null
          accounting_account?: string | null
          add_delivery_fee_to_bill?: boolean | null
          address?: string | null
          address_region?: string | null
          address_sub_region?: string | null
          alerts?: string | null
          automatic_invoice?: boolean | null
          average_term_days?: number | null
          bairro?: string | null
          bank_account?: string | null
          bank_agency?: string | null
          bank_number?: string | null
          business_group?: string | null
          calculates_icms?: boolean | null
          capital_social?: string | null
          cep?: string | null
          cidade?: string | null
          client_id?: string | null
          client_type?: string | null
          CNAE?: string | null
          "CNAE-Principal"?: string | null
          cnpj?: string | null
          company_name?: string | null
          company_size?: string | null
          contact_name?: string | null
          contatos?: string | null
          conversion_date?: string | null
          converted_from_lead_id?: string | null
          cost_center?: string | null
          cotacao_moeda?: string | null
          cpf?: string | null
          created_at?: string | null
          credit_docs_quantity?: number | null
          credit_limit?: number | null
          credit_status?: string | null
          credit_validity?: string | null
          curve_class?: string | null
          daily_interest_percentage?: number | null
          data_abertura?: string | null
          data_consulta?: string | null
          email?: string | null
          endereco?: string | null
          estado?: string | null
          exempt_icms?: boolean | null
          final_consumer?: boolean | null
          fine_percentage?: number | null
          freight_knowledge?: string | null
          freight_preselection?: boolean | null
          grant_suframa_discount?: boolean | null
          hide_installment_on_bill?: boolean | null
          icms_deferral?: boolean | null
          icms_reduction_percentage?: number | null
          icms_st_reduction_percentage?: number | null
          id?: string
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          ipi_in_icms_base?: boolean | null
          ipi_na_bc_icms?: string | null
          is_active?: boolean | null
          last_contact_date?: string | null
          legal_basis?: string | null
          lote_produto?: string | null
          mix_de_produtos?: string | null
          name?: string | null
          nao_participar_controle_premiacao?: string | null
          nf_transfer_path?: string | null
          nome_equipe?: string | null
          nome_fantasia?: string | null
          not_protest_delivery_bill?: boolean | null
          observations?: string | null
          opening_date?: string | null
          operation_nature?: string | null
          payment_form?: string | null
          person_type?: string | null
          phone?: string | null
          pix_key?: string | null
          potencial_compra?: string | null
          potencial_score?: number | null
          potential_level?: string | null
          potential_level_int?: number | null
          preferred_carrier?: string | null
          presence_indicator?: string | null
          price_list?: string | null
          price_table_id?: string | null
          razao_social?: string | null
          registration_status_date?: string | null
          report_id?: string | null
          representatives?: string | null
          rg?: string | null
          rk?: number | null
          sale_with_ipi?: boolean | null
          service_taxation?: string | null
          site?: string | null
          situacao_cadastral?: string | null
          somar_taxa_entrega_boleto?: string | null
          st_rate_percentage?: number | null
          state_inscriptions?: Json | null
          suframa_inscription?: string | null
          tax_regime?: string | null
          tax_substitution?: boolean | null
          team?: string | null
          tipo_cliente?: string | null
          user_id?: string | null
          user_name?: string | null
          valor?: number | null
          vencimento_minimo?: string | null
        }
        Update: {
          account_holder?: string | null
          accounting_account?: string | null
          add_delivery_fee_to_bill?: boolean | null
          address?: string | null
          address_region?: string | null
          address_sub_region?: string | null
          alerts?: string | null
          automatic_invoice?: boolean | null
          average_term_days?: number | null
          bairro?: string | null
          bank_account?: string | null
          bank_agency?: string | null
          bank_number?: string | null
          business_group?: string | null
          calculates_icms?: boolean | null
          capital_social?: string | null
          cep?: string | null
          cidade?: string | null
          client_id?: string | null
          client_type?: string | null
          CNAE?: string | null
          "CNAE-Principal"?: string | null
          cnpj?: string | null
          company_name?: string | null
          company_size?: string | null
          contact_name?: string | null
          contatos?: string | null
          conversion_date?: string | null
          converted_from_lead_id?: string | null
          cost_center?: string | null
          cotacao_moeda?: string | null
          cpf?: string | null
          created_at?: string | null
          credit_docs_quantity?: number | null
          credit_limit?: number | null
          credit_status?: string | null
          credit_validity?: string | null
          curve_class?: string | null
          daily_interest_percentage?: number | null
          data_abertura?: string | null
          data_consulta?: string | null
          email?: string | null
          endereco?: string | null
          estado?: string | null
          exempt_icms?: boolean | null
          final_consumer?: boolean | null
          fine_percentage?: number | null
          freight_knowledge?: string | null
          freight_preselection?: boolean | null
          grant_suframa_discount?: boolean | null
          hide_installment_on_bill?: boolean | null
          icms_deferral?: boolean | null
          icms_reduction_percentage?: number | null
          icms_st_reduction_percentage?: number | null
          id?: string
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          ipi_in_icms_base?: boolean | null
          ipi_na_bc_icms?: string | null
          is_active?: boolean | null
          last_contact_date?: string | null
          legal_basis?: string | null
          lote_produto?: string | null
          mix_de_produtos?: string | null
          name?: string | null
          nao_participar_controle_premiacao?: string | null
          nf_transfer_path?: string | null
          nome_equipe?: string | null
          nome_fantasia?: string | null
          not_protest_delivery_bill?: boolean | null
          observations?: string | null
          opening_date?: string | null
          operation_nature?: string | null
          payment_form?: string | null
          person_type?: string | null
          phone?: string | null
          pix_key?: string | null
          potencial_compra?: string | null
          potencial_score?: number | null
          potential_level?: string | null
          potential_level_int?: number | null
          preferred_carrier?: string | null
          presence_indicator?: string | null
          price_list?: string | null
          price_table_id?: string | null
          razao_social?: string | null
          registration_status_date?: string | null
          report_id?: string | null
          representatives?: string | null
          rg?: string | null
          rk?: number | null
          sale_with_ipi?: boolean | null
          service_taxation?: string | null
          site?: string | null
          situacao_cadastral?: string | null
          somar_taxa_entrega_boleto?: string | null
          st_rate_percentage?: number | null
          state_inscriptions?: Json | null
          suframa_inscription?: string | null
          tax_regime?: string | null
          tax_substitution?: boolean | null
          team?: string | null
          tipo_cliente?: string | null
          user_id?: string | null
          user_name?: string | null
          valor?: number | null
          vencimento_minimo?: string | null
        }
        Relationships: []
      }
      commission_rules: {
        Row: {
          commission_rate: number
          created_at: string | null
          id: string
          max_value: number | null
          min_value: number
          report_id: string
          updated_at: string | null
        }
        Insert: {
          commission_rate: number
          created_at?: string | null
          id?: string
          max_value?: number | null
          min_value?: number
          report_id: string
          updated_at?: string | null
        }
        Update: {
          commission_rate?: number
          created_at?: string | null
          id?: string
          max_value?: number | null
          min_value?: number
          report_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          active: boolean | null
          app: string | null
          cliente_name: string | null
          created_at: string
          email: string | null
          id: number
          lat: string | null
          location: string | null
          long: string | null
          phone: string | null
        }
        Insert: {
          active?: boolean | null
          app?: string | null
          cliente_name?: string | null
          created_at?: string
          email?: string | null
          id?: number
          lat?: string | null
          location?: string | null
          long?: string | null
          phone?: string | null
        }
        Update: {
          active?: boolean | null
          app?: string | null
          cliente_name?: string | null
          created_at?: string
          email?: string | null
          id?: number
          lat?: string | null
          location?: string | null
          long?: string | null
          phone?: string | null
        }
        Relationships: []
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
      donation_items: {
        Row: {
          category: string
          checked: boolean | null
          created_at: string | null
          id: string
          name: string
          quantity: string
          received: string | null
        }
        Insert: {
          category: string
          checked?: boolean | null
          created_at?: string | null
          id?: string
          name: string
          quantity: string
          received?: string | null
        }
        Update: {
          category?: string
          checked?: boolean | null
          created_at?: string | null
          id?: string
          name?: string
          quantity?: string
          received?: string | null
        }
        Relationships: []
      }
      event_registrations: {
        Row: {
          address: string
          assigned_angel: string | null
          birth_date: string
          city: string
          created_at: string | null
          email: string
          emergency_phone: string
          full_name: string
          gender: string
          id: string
          indicated_by: string | null
          kit_option: string | null
          parish: string
          payment_amount: number | null
          payment_receipt_url: string | null
          payment_status: string | null
          phone: string
          staying_on_site: boolean | null
          tshirt_size: string | null
          tshirt_size_2: string | null
        }
        Insert: {
          address: string
          assigned_angel?: string | null
          birth_date: string
          city: string
          created_at?: string | null
          email: string
          emergency_phone: string
          full_name: string
          gender: string
          id?: string
          indicated_by?: string | null
          kit_option?: string | null
          parish: string
          payment_amount?: number | null
          payment_receipt_url?: string | null
          payment_status?: string | null
          phone: string
          staying_on_site?: boolean | null
          tshirt_size?: string | null
          tshirt_size_2?: string | null
        }
        Update: {
          address?: string
          assigned_angel?: string | null
          birth_date?: string
          city?: string
          created_at?: string | null
          email?: string
          emergency_phone?: string
          full_name?: string
          gender?: string
          id?: string
          indicated_by?: string | null
          kit_option?: string | null
          parish?: string
          payment_amount?: number | null
          payment_receipt_url?: string | null
          payment_status?: string | null
          phone?: string
          staying_on_site?: boolean | null
          tshirt_size?: string | null
          tshirt_size_2?: string | null
        }
        Relationships: []
      }
      gallery_images: {
        Row: {
          aspect_ratio: string | null
          created_at: string | null
          id: string
          is_film_strip: boolean | null
          is_polaroid: boolean | null
          label: string | null
          position_left: string | null
          position_right: string | null
          position_top: string | null
          rotate: number | null
          url: string
          width_class: string | null
          z_index: number | null
        }
        Insert: {
          aspect_ratio?: string | null
          created_at?: string | null
          id?: string
          is_film_strip?: boolean | null
          is_polaroid?: boolean | null
          label?: string | null
          position_left?: string | null
          position_right?: string | null
          position_top?: string | null
          rotate?: number | null
          url: string
          width_class?: string | null
          z_index?: number | null
        }
        Update: {
          aspect_ratio?: string | null
          created_at?: string | null
          id?: string
          is_film_strip?: boolean | null
          is_polaroid?: boolean | null
          label?: string | null
          position_left?: string | null
          position_right?: string | null
          position_top?: string | null
          rotate?: number | null
          url?: string
          width_class?: string | null
          z_index?: number | null
        }
        Relationships: []
      }
      kanban_columns: {
        Row: {
          color: string
          created_at: string
          id: string
          is_default: boolean
          name: string
          position: number
          slug: string
          updated_at: string
        }
        Insert: {
          color?: string
          created_at?: string
          id?: string
          is_default?: boolean
          name: string
          position?: number
          slug: string
          updated_at?: string
        }
        Update: {
          color?: string
          created_at?: string
          id?: string
          is_default?: boolean
          name?: string
          position?: number
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          account_holder: string | null
          accounting_account: string | null
          add_delivery_fee_to_bill: boolean | null
          address: string | null
          address_region: string | null
          address_sub_region: string | null
          alerts: string | null
          assertividade: string | null
          atividade_economica: string | null
          atividades_secundarias: string | null
          automatic_invoice: boolean | null
          average_term_days: number | null
          bairro: string | null
          bank_account: string | null
          bank_agency: string | null
          bank_number: string | null
          business_group: string | null
          calculates_icms: boolean | null
          capital_social: string | null
          celulares: string | null
          cep: string | null
          cidade: string | null
          client_id: string | null
          client_type: string | null
          CNAE: string | null
          "CNAE-Principal": string | null
          cnpj: string | null
          cnpj_norm: string | null
          cod_atividade_economica: string | null
          cod_atividades_secundarias: string | null
          cod_ncms_primarios: string | null
          colaboradores_cargos: string | null
          colaboradores_linkedin: string | null
          company_name: string | null
          company_size: string | null
          complemento: string | null
          contact_name: string | null
          contatos: string | null
          cost_center: string | null
          cotacao_moeda: string | null
          cpf: string | null
          created_at: string | null
          credit_docs_quantity: number | null
          credit_limit: string | null
          credit_status: string | null
          credit_validity: string | null
          crescimento_da_empresa: string | null
          curve_class: string | null
          daily_interest_percentage: number | null
          data_abertura: string | null
          data_consulta: string | null
          data_de_abertura: string | null
          decisores_cargos: string | null
          decisores_linkedin: string | null
          dividas_cnpj_com_a_previdencia: string | null
          dividas_cnpj_com_o_fgts: string | null
          dividas_cnpj_socios_com_a_previdencia: string | null
          dividas_cnpj_socios_com_o_fgts: string | null
          dividas_gerais_cnpj_com_a_uniao: string | null
          dividas_gerais_cnpj_socios_com_a_uniao: string | null
          email: string | null
          email_pat: string | null
          email_receita_federal: string | null
          emails_publicos: string | null
          emails_validados_de_colaboradores: string | null
          emails_validados_de_decisores: string | null
          emails_validados_de_departamentos: string | null
          emails_validados_de_socios: string | null
          endereco: string | null
          enquadramento_de_porte: string | null
          estado: string | null
          exempt_icms: boolean | null
          exportacao: string | null
          facebook: string | null
          faturamento_presumido_para_este_cnpj: string | null
          faturamento_presumido_para_matriz_cnpjs: string | null
          ferramentas: string | null
          final_consumer: boolean | null
          fine_percentage: number | null
          fixos: string | null
          freight_knowledge: string | null
          freight_preselection: boolean | null
          funcionarios_presumido_para_este_cnpj: string | null
          funcionarios_presumido_para_matriz_cnpj: string | null
          grant_suframa_discount: boolean | null
          hide_installment_on_bill: boolean | null
          icms_deferral: boolean | null
          icms_reduction_percentage: number | null
          icms_st_reduction_percentage: number | null
          id: string | null
          id_pk: number
          importacao: string | null
          inscricao_estadual: string | null
          inscricao_municipal: string | null
          instagram: string | null
          ipi_in_icms_base: boolean | null
          ipi_na_bc_icms: string | null
          is_active: boolean | null
          last_contact_date: string | null
          legal_basis: string | null
          link_da_empresa: string | null
          linkedin: string | null
          logradouro: string | null
          lote_produto: string | null
          melhor_celular: string | null
          melhor_site: string | null
          melhor_telefone: string | null
          mesorregiao: string | null
          microrregiao: string | null
          mix_de_produtos: string | null
          name: string | null
          nao_participar_controle_premiacao: string | null
          natureza_juridica: string | null
          ncms_primarios: string | null
          nf_transfer_path: string | null
          nivel_de_atividade: string | null
          nome_da_empresa: string | null
          nome_equipe: string | null
          nome_fantasia: string | null
          not_protest_delivery_bill: boolean | null
          notas: string | null
          numero: string | null
          observations: string | null
          opening_date: string | null
          operation_nature: string | null
          outras: string | null
          pat_funcionarios: string | null
          pat_funcionarios_integer: number | null
          pat_telefone: string | null
          payment_form: string | null
          percentual_dividas_cnpj_sobre_faturamento_anual: string | null
          percentual_dividas_cnpj_socios_sobre_faturamento_anual: string | null
          person_type: string | null
          phone: string | null
          pix_key: string | null
          porte_estimado: string | null
          potencial_compra: string | null
          potencial_score: string | null
          potential_level: string | null
          potential_level_int: number | null
          preferred_carrier: string | null
          presence_indicator: string | null
          price_list: string | null
          price_table_id: string | null
          qtd_filiais: number | null
          raw_payload: Json | null
          razao_social: string | null
          recebimentos_do_governo_federal: string | null
          regime_tributario: string | null
          registration_status_date: string | null
          report_id: string | null
          representatives: string | null
          rg: string | null
          rk: number | null
          sale_with_ipi: boolean | null
          segundo_melhor_site: string | null
          segundo_melhor_telefone: string | null
          service_taxation: string | null
          setor_amigavel: string | null
          site: string | null
          sites: string | null
          situacao_cadastral: string | null
          socios_e_administradores: string | null
          somar_taxa_entrega_boleto: string | null
          st_rate_percentage: number | null
          state_inscriptions: Json | null
          status: string | null
          suframa_inscription: string | null
          tags: string | null
          tax_regime: string | null
          tax_substitution: boolean | null
          team: string | null
          tecnologias: string | null
          telefones_de_alta_assertividade: string | null
          telefones_de_baixa_assertividade: string | null
          telefones_de_media_assertividade: string | null
          telefones_filiais: string | null
          telefones_matriz: string | null
          tipo_cliente: string | null
          tipo_unidade: string | null
          total_dividas_cnpj_com_a_uniao: string | null
          total_dividas_cnpj_socios_com_a_uniao: string | null
          twitter: string | null
          uf: string | null
          user_id: string | null
          user_name: string | null
          valor: string | null
          vencimento_minimo: string | null
          whatsapp: string | null
          youtube: string | null
        }
        Insert: {
          account_holder?: string | null
          accounting_account?: string | null
          add_delivery_fee_to_bill?: boolean | null
          address?: string | null
          address_region?: string | null
          address_sub_region?: string | null
          alerts?: string | null
          assertividade?: string | null
          atividade_economica?: string | null
          atividades_secundarias?: string | null
          automatic_invoice?: boolean | null
          average_term_days?: number | null
          bairro?: string | null
          bank_account?: string | null
          bank_agency?: string | null
          bank_number?: string | null
          business_group?: string | null
          calculates_icms?: boolean | null
          capital_social?: string | null
          celulares?: string | null
          cep?: string | null
          cidade?: string | null
          client_id?: string | null
          client_type?: string | null
          CNAE?: string | null
          "CNAE-Principal"?: string | null
          cnpj?: string | null
          cnpj_norm?: string | null
          cod_atividade_economica?: string | null
          cod_atividades_secundarias?: string | null
          cod_ncms_primarios?: string | null
          colaboradores_cargos?: string | null
          colaboradores_linkedin?: string | null
          company_name?: string | null
          company_size?: string | null
          complemento?: string | null
          contact_name?: string | null
          contatos?: string | null
          cost_center?: string | null
          cotacao_moeda?: string | null
          cpf?: string | null
          created_at?: string | null
          credit_docs_quantity?: number | null
          credit_limit?: string | null
          credit_status?: string | null
          credit_validity?: string | null
          crescimento_da_empresa?: string | null
          curve_class?: string | null
          daily_interest_percentage?: number | null
          data_abertura?: string | null
          data_consulta?: string | null
          data_de_abertura?: string | null
          decisores_cargos?: string | null
          decisores_linkedin?: string | null
          dividas_cnpj_com_a_previdencia?: string | null
          dividas_cnpj_com_o_fgts?: string | null
          dividas_cnpj_socios_com_a_previdencia?: string | null
          dividas_cnpj_socios_com_o_fgts?: string | null
          dividas_gerais_cnpj_com_a_uniao?: string | null
          dividas_gerais_cnpj_socios_com_a_uniao?: string | null
          email?: string | null
          email_pat?: string | null
          email_receita_federal?: string | null
          emails_publicos?: string | null
          emails_validados_de_colaboradores?: string | null
          emails_validados_de_decisores?: string | null
          emails_validados_de_departamentos?: string | null
          emails_validados_de_socios?: string | null
          endereco?: string | null
          enquadramento_de_porte?: string | null
          estado?: string | null
          exempt_icms?: boolean | null
          exportacao?: string | null
          facebook?: string | null
          faturamento_presumido_para_este_cnpj?: string | null
          faturamento_presumido_para_matriz_cnpjs?: string | null
          ferramentas?: string | null
          final_consumer?: boolean | null
          fine_percentage?: number | null
          fixos?: string | null
          freight_knowledge?: string | null
          freight_preselection?: boolean | null
          funcionarios_presumido_para_este_cnpj?: string | null
          funcionarios_presumido_para_matriz_cnpj?: string | null
          grant_suframa_discount?: boolean | null
          hide_installment_on_bill?: boolean | null
          icms_deferral?: boolean | null
          icms_reduction_percentage?: number | null
          icms_st_reduction_percentage?: number | null
          id?: string | null
          id_pk?: number
          importacao?: string | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          instagram?: string | null
          ipi_in_icms_base?: boolean | null
          ipi_na_bc_icms?: string | null
          is_active?: boolean | null
          last_contact_date?: string | null
          legal_basis?: string | null
          link_da_empresa?: string | null
          linkedin?: string | null
          logradouro?: string | null
          lote_produto?: string | null
          melhor_celular?: string | null
          melhor_site?: string | null
          melhor_telefone?: string | null
          mesorregiao?: string | null
          microrregiao?: string | null
          mix_de_produtos?: string | null
          name?: string | null
          nao_participar_controle_premiacao?: string | null
          natureza_juridica?: string | null
          ncms_primarios?: string | null
          nf_transfer_path?: string | null
          nivel_de_atividade?: string | null
          nome_da_empresa?: string | null
          nome_equipe?: string | null
          nome_fantasia?: string | null
          not_protest_delivery_bill?: boolean | null
          notas?: string | null
          numero?: string | null
          observations?: string | null
          opening_date?: string | null
          operation_nature?: string | null
          outras?: string | null
          pat_funcionarios?: string | null
          pat_funcionarios_integer?: number | null
          pat_telefone?: string | null
          payment_form?: string | null
          percentual_dividas_cnpj_sobre_faturamento_anual?: string | null
          percentual_dividas_cnpj_socios_sobre_faturamento_anual?: string | null
          person_type?: string | null
          phone?: string | null
          pix_key?: string | null
          porte_estimado?: string | null
          potencial_compra?: string | null
          potencial_score?: string | null
          potential_level?: string | null
          potential_level_int?: number | null
          preferred_carrier?: string | null
          presence_indicator?: string | null
          price_list?: string | null
          price_table_id?: string | null
          qtd_filiais?: number | null
          raw_payload?: Json | null
          razao_social?: string | null
          recebimentos_do_governo_federal?: string | null
          regime_tributario?: string | null
          registration_status_date?: string | null
          report_id?: string | null
          representatives?: string | null
          rg?: string | null
          rk?: number | null
          sale_with_ipi?: boolean | null
          segundo_melhor_site?: string | null
          segundo_melhor_telefone?: string | null
          service_taxation?: string | null
          setor_amigavel?: string | null
          site?: string | null
          sites?: string | null
          situacao_cadastral?: string | null
          socios_e_administradores?: string | null
          somar_taxa_entrega_boleto?: string | null
          st_rate_percentage?: number | null
          state_inscriptions?: Json | null
          status?: string | null
          suframa_inscription?: string | null
          tags?: string | null
          tax_regime?: string | null
          tax_substitution?: boolean | null
          team?: string | null
          tecnologias?: string | null
          telefones_de_alta_assertividade?: string | null
          telefones_de_baixa_assertividade?: string | null
          telefones_de_media_assertividade?: string | null
          telefones_filiais?: string | null
          telefones_matriz?: string | null
          tipo_cliente?: string | null
          tipo_unidade?: string | null
          total_dividas_cnpj_com_a_uniao?: string | null
          total_dividas_cnpj_socios_com_a_uniao?: string | null
          twitter?: string | null
          uf?: string | null
          user_id?: string | null
          user_name?: string | null
          valor?: string | null
          vencimento_minimo?: string | null
          whatsapp?: string | null
          youtube?: string | null
        }
        Update: {
          account_holder?: string | null
          accounting_account?: string | null
          add_delivery_fee_to_bill?: boolean | null
          address?: string | null
          address_region?: string | null
          address_sub_region?: string | null
          alerts?: string | null
          assertividade?: string | null
          atividade_economica?: string | null
          atividades_secundarias?: string | null
          automatic_invoice?: boolean | null
          average_term_days?: number | null
          bairro?: string | null
          bank_account?: string | null
          bank_agency?: string | null
          bank_number?: string | null
          business_group?: string | null
          calculates_icms?: boolean | null
          capital_social?: string | null
          celulares?: string | null
          cep?: string | null
          cidade?: string | null
          client_id?: string | null
          client_type?: string | null
          CNAE?: string | null
          "CNAE-Principal"?: string | null
          cnpj?: string | null
          cnpj_norm?: string | null
          cod_atividade_economica?: string | null
          cod_atividades_secundarias?: string | null
          cod_ncms_primarios?: string | null
          colaboradores_cargos?: string | null
          colaboradores_linkedin?: string | null
          company_name?: string | null
          company_size?: string | null
          complemento?: string | null
          contact_name?: string | null
          contatos?: string | null
          cost_center?: string | null
          cotacao_moeda?: string | null
          cpf?: string | null
          created_at?: string | null
          credit_docs_quantity?: number | null
          credit_limit?: string | null
          credit_status?: string | null
          credit_validity?: string | null
          crescimento_da_empresa?: string | null
          curve_class?: string | null
          daily_interest_percentage?: number | null
          data_abertura?: string | null
          data_consulta?: string | null
          data_de_abertura?: string | null
          decisores_cargos?: string | null
          decisores_linkedin?: string | null
          dividas_cnpj_com_a_previdencia?: string | null
          dividas_cnpj_com_o_fgts?: string | null
          dividas_cnpj_socios_com_a_previdencia?: string | null
          dividas_cnpj_socios_com_o_fgts?: string | null
          dividas_gerais_cnpj_com_a_uniao?: string | null
          dividas_gerais_cnpj_socios_com_a_uniao?: string | null
          email?: string | null
          email_pat?: string | null
          email_receita_federal?: string | null
          emails_publicos?: string | null
          emails_validados_de_colaboradores?: string | null
          emails_validados_de_decisores?: string | null
          emails_validados_de_departamentos?: string | null
          emails_validados_de_socios?: string | null
          endereco?: string | null
          enquadramento_de_porte?: string | null
          estado?: string | null
          exempt_icms?: boolean | null
          exportacao?: string | null
          facebook?: string | null
          faturamento_presumido_para_este_cnpj?: string | null
          faturamento_presumido_para_matriz_cnpjs?: string | null
          ferramentas?: string | null
          final_consumer?: boolean | null
          fine_percentage?: number | null
          fixos?: string | null
          freight_knowledge?: string | null
          freight_preselection?: boolean | null
          funcionarios_presumido_para_este_cnpj?: string | null
          funcionarios_presumido_para_matriz_cnpj?: string | null
          grant_suframa_discount?: boolean | null
          hide_installment_on_bill?: boolean | null
          icms_deferral?: boolean | null
          icms_reduction_percentage?: number | null
          icms_st_reduction_percentage?: number | null
          id?: string | null
          id_pk?: number
          importacao?: string | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          instagram?: string | null
          ipi_in_icms_base?: boolean | null
          ipi_na_bc_icms?: string | null
          is_active?: boolean | null
          last_contact_date?: string | null
          legal_basis?: string | null
          link_da_empresa?: string | null
          linkedin?: string | null
          logradouro?: string | null
          lote_produto?: string | null
          melhor_celular?: string | null
          melhor_site?: string | null
          melhor_telefone?: string | null
          mesorregiao?: string | null
          microrregiao?: string | null
          mix_de_produtos?: string | null
          name?: string | null
          nao_participar_controle_premiacao?: string | null
          natureza_juridica?: string | null
          ncms_primarios?: string | null
          nf_transfer_path?: string | null
          nivel_de_atividade?: string | null
          nome_da_empresa?: string | null
          nome_equipe?: string | null
          nome_fantasia?: string | null
          not_protest_delivery_bill?: boolean | null
          notas?: string | null
          numero?: string | null
          observations?: string | null
          opening_date?: string | null
          operation_nature?: string | null
          outras?: string | null
          pat_funcionarios?: string | null
          pat_funcionarios_integer?: number | null
          pat_telefone?: string | null
          payment_form?: string | null
          percentual_dividas_cnpj_sobre_faturamento_anual?: string | null
          percentual_dividas_cnpj_socios_sobre_faturamento_anual?: string | null
          person_type?: string | null
          phone?: string | null
          pix_key?: string | null
          porte_estimado?: string | null
          potencial_compra?: string | null
          potencial_score?: string | null
          potential_level?: string | null
          potential_level_int?: number | null
          preferred_carrier?: string | null
          presence_indicator?: string | null
          price_list?: string | null
          price_table_id?: string | null
          qtd_filiais?: number | null
          raw_payload?: Json | null
          razao_social?: string | null
          recebimentos_do_governo_federal?: string | null
          regime_tributario?: string | null
          registration_status_date?: string | null
          report_id?: string | null
          representatives?: string | null
          rg?: string | null
          rk?: number | null
          sale_with_ipi?: boolean | null
          segundo_melhor_site?: string | null
          segundo_melhor_telefone?: string | null
          service_taxation?: string | null
          setor_amigavel?: string | null
          site?: string | null
          sites?: string | null
          situacao_cadastral?: string | null
          socios_e_administradores?: string | null
          somar_taxa_entrega_boleto?: string | null
          st_rate_percentage?: number | null
          state_inscriptions?: Json | null
          status?: string | null
          suframa_inscription?: string | null
          tags?: string | null
          tax_regime?: string | null
          tax_substitution?: boolean | null
          team?: string | null
          tecnologias?: string | null
          telefones_de_alta_assertividade?: string | null
          telefones_de_baixa_assertividade?: string | null
          telefones_de_media_assertividade?: string | null
          telefones_filiais?: string | null
          telefones_matriz?: string | null
          tipo_cliente?: string | null
          tipo_unidade?: string | null
          total_dividas_cnpj_com_a_uniao?: string | null
          total_dividas_cnpj_socios_com_a_uniao?: string | null
          twitter?: string | null
          uf?: string | null
          user_id?: string | null
          user_name?: string | null
          valor?: string | null
          vencimento_minimo?: string | null
          whatsapp?: string | null
          youtube?: string | null
        }
        Relationships: []
      }
      lista_numeros: {
        Row: {
          email: string | null
          id: string
          name: string | null
          phone_number: string | null
        }
        Insert: {
          email?: string | null
          id?: string
          name?: string | null
          phone_number?: string | null
        }
        Update: {
          email?: string | null
          id?: string
          name?: string | null
          phone_number?: string | null
        }
        Relationships: []
      }
      machines: {
        Row: {
          brand: string | null
          capacity_kg_hour: number | null
          code: string
          created_at: string | null
          id: string
          is_active: boolean | null
          model: string | null
          name: string
          notes: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          brand?: string | null
          capacity_kg_hour?: number | null
          code: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          model?: string | null
          name: string
          notes?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          brand?: string | null
          capacity_kg_hour?: number | null
          code?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          model?: string | null
          name?: string
          notes?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      news: {
        Row: {
          author: string | null
          bg: string | null
          caption: string | null
          content: string | null
          created_at: string | null
          desc_weather: string | null
          full_content: string | null
          full_desc_weather: string | null
          full_items: string[] | null
          hot: boolean | null
          id: string
          images: string[] | null
          img: string | null
          items: string[] | null
          marker: string | null
          order_index: number | null
          quote: boolean | null
          rotate: string | null
          subtitle: string | null
          tag: string | null
          tape: boolean | null
          temp: string | null
          title: string | null
          torn: boolean | null
          type: string
        }
        Insert: {
          author?: string | null
          bg?: string | null
          caption?: string | null
          content?: string | null
          created_at?: string | null
          desc_weather?: string | null
          full_content?: string | null
          full_desc_weather?: string | null
          full_items?: string[] | null
          hot?: boolean | null
          id?: string
          images?: string[] | null
          img?: string | null
          items?: string[] | null
          marker?: string | null
          order_index?: number | null
          quote?: boolean | null
          rotate?: string | null
          subtitle?: string | null
          tag?: string | null
          tape?: boolean | null
          temp?: string | null
          title?: string | null
          torn?: boolean | null
          type: string
        }
        Update: {
          author?: string | null
          bg?: string | null
          caption?: string | null
          content?: string | null
          created_at?: string | null
          desc_weather?: string | null
          full_content?: string | null
          full_desc_weather?: string | null
          full_items?: string[] | null
          hot?: boolean | null
          id?: string
          images?: string[] | null
          img?: string | null
          items?: string[] | null
          marker?: string | null
          order_index?: number | null
          quote?: boolean | null
          rotate?: string | null
          subtitle?: string | null
          tag?: string | null
          tape?: boolean | null
          temp?: string | null
          title?: string | null
          torn?: boolean | null
          type?: string
        }
        Relationships: []
      }
      news_editors: {
        Row: {
          created_at: string | null
          email: string
          id: string
          role: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          role?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          role?: string | null
        }
        Relationships: []
      }
      operators: {
        Row: {
          created_at: string | null
          department: string | null
          employee_id: string | null
          id: string
          is_active: boolean | null
          name: string
          primary_machine_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          department?: string | null
          employee_id?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          primary_machine_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          department?: string | null
          employee_id?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          primary_machine_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "operators_primary_machine_id_fkey"
            columns: ["primary_machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          codigo_fabricante: string | null
          codigo_produto: string | null
          created_at: string | null
          data_entrega: string | null
          desconto: number | null
          descricao: string | null
          id: string
          item_numero: number
          order_id: string | null
          qtde_faturar: number | null
          quantidade: number | null
          saldo: number | null
          situacao: string | null
          unidade: string | null
          valor_ipi: number | null
          valor_total: number | null
          valor_unitario: number | null
        }
        Insert: {
          codigo_fabricante?: string | null
          codigo_produto?: string | null
          created_at?: string | null
          data_entrega?: string | null
          desconto?: number | null
          descricao?: string | null
          id?: string
          item_numero: number
          order_id?: string | null
          qtde_faturar?: number | null
          quantidade?: number | null
          saldo?: number | null
          situacao?: string | null
          unidade?: string | null
          valor_ipi?: number | null
          valor_total?: number | null
          valor_unitario?: number | null
        }
        Update: {
          codigo_fabricante?: string | null
          codigo_produto?: string | null
          created_at?: string | null
          data_entrega?: string | null
          desconto?: number | null
          descricao?: string | null
          id?: string
          item_numero?: number
          order_id?: string | null
          qtde_faturar?: number | null
          quantidade?: number | null
          saldo?: number | null
          situacao?: string | null
          unidade?: string | null
          valor_ipi?: number | null
          valor_total?: number | null
          valor_unitario?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "vw_vendas_consolidadas"
            referencedColumns: ["pedido_id"]
          },
        ]
      }
      orders: {
        Row: {
          bloqueado: boolean | null
          client_id: string | null
          codigo: string
          created_at: string | null
          data_emissao: string
          data_entrega: string | null
          expedido: boolean | null
          id: string
          id_pedido_web: string | null
          impresso: boolean | null
          ipi: number | null
          itens_a_pesar: number | null
          mobile: boolean | null
          numero_nf: string | null
          numero_pedido: string | null
          peso_bruto: number | null
          peso_liquido: number | null
          qtde_volumes: number | null
          retirar_no_local: boolean | null
          situacao: string | null
          status: string | null
          updated_at: string | null
          user_id: string | null
          valor: number | null
          vendedor: string | null
        }
        Insert: {
          bloqueado?: boolean | null
          client_id?: string | null
          codigo: string
          created_at?: string | null
          data_emissao: string
          data_entrega?: string | null
          expedido?: boolean | null
          id?: string
          id_pedido_web?: string | null
          impresso?: boolean | null
          ipi?: number | null
          itens_a_pesar?: number | null
          mobile?: boolean | null
          numero_nf?: string | null
          numero_pedido?: string | null
          peso_bruto?: number | null
          peso_liquido?: number | null
          qtde_volumes?: number | null
          retirar_no_local?: boolean | null
          situacao?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
          valor?: number | null
          vendedor?: string | null
        }
        Update: {
          bloqueado?: boolean | null
          client_id?: string | null
          codigo?: string
          created_at?: string | null
          data_emissao?: string
          data_entrega?: string | null
          expedido?: boolean | null
          id?: string
          id_pedido_web?: string | null
          impresso?: boolean | null
          ipi?: number | null
          itens_a_pesar?: number | null
          mobile?: boolean | null
          numero_nf?: string | null
          numero_pedido?: string | null
          peso_bruto?: number | null
          peso_liquido?: number | null
          qtde_volumes?: number | null
          retirar_no_local?: boolean | null
          situacao?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
          valor?: number | null
          vendedor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "inactive_clients_available"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_alertas_comerciais"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_alertas"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_churn_risk"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_top_clientes"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_vendas_consolidadas"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_roles"
            referencedColumns: ["id"]
          },
        ]
      }
      personas: {
        Row: {
          city: string | null
          company_name: string | null
          company_size: string | null
          created_at: string
          decision_factor: string | null
          decision_maker: string | null
          id: string
          ideal_supplier_phrase: string | null
          internal_client_type: string | null
          internal_most_used_size: string | null
          internal_potential_volume: string | null
          internal_price_band: string | null
          internal_recommended_line: string | null
          main_pain: string | null
          main_segment: string | null
          monthly_volume: string | null
          packaging_difficulties: string[] | null
          packaging_process: string | null
          packaging_types: string[] | null
          price_range: string | null
          production_monthly: string | null
          report_id: string | null
          sizes_used: string[] | null
          state: string | null
          success_metric: string | null
          supplier_channels: string[] | null
          switch_reason: string | null
          unix_vac_interest: string | null
          updated_at: string
          user_id: string | null
          valued_qualities: string[] | null
        }
        Insert: {
          city?: string | null
          company_name?: string | null
          company_size?: string | null
          created_at?: string
          decision_factor?: string | null
          decision_maker?: string | null
          id?: string
          ideal_supplier_phrase?: string | null
          internal_client_type?: string | null
          internal_most_used_size?: string | null
          internal_potential_volume?: string | null
          internal_price_band?: string | null
          internal_recommended_line?: string | null
          main_pain?: string | null
          main_segment?: string | null
          monthly_volume?: string | null
          packaging_difficulties?: string[] | null
          packaging_process?: string | null
          packaging_types?: string[] | null
          price_range?: string | null
          production_monthly?: string | null
          report_id?: string | null
          sizes_used?: string[] | null
          state?: string | null
          success_metric?: string | null
          supplier_channels?: string[] | null
          switch_reason?: string | null
          unix_vac_interest?: string | null
          updated_at?: string
          user_id?: string | null
          valued_qualities?: string[] | null
        }
        Update: {
          city?: string | null
          company_name?: string | null
          company_size?: string | null
          created_at?: string
          decision_factor?: string | null
          decision_maker?: string | null
          id?: string
          ideal_supplier_phrase?: string | null
          internal_client_type?: string | null
          internal_most_used_size?: string | null
          internal_potential_volume?: string | null
          internal_price_band?: string | null
          internal_recommended_line?: string | null
          main_pain?: string | null
          main_segment?: string | null
          monthly_volume?: string | null
          packaging_difficulties?: string[] | null
          packaging_process?: string | null
          packaging_types?: string[] | null
          price_range?: string | null
          production_monthly?: string | null
          report_id?: string | null
          sizes_used?: string[] | null
          state?: string | null
          success_metric?: string | null
          supplier_channels?: string[] | null
          switch_reason?: string | null
          unix_vac_interest?: string | null
          updated_at?: string
          user_id?: string | null
          valued_qualities?: string[] | null
        }
        Relationships: []
      }
      pipelines: {
        Row: {
          created_at: string
          id: string
          is_default: boolean
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_default?: boolean
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          is_default?: boolean
          name?: string
        }
        Relationships: []
      }
      seller_normalization: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          normalized_name: string
          original_name: string
          user_role_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          normalized_name: string
          original_name: string
          user_role_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          normalized_name?: string
          original_name?: string
          user_role_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "seller_normalization_user_role_id_fkey"
            columns: ["user_role_id"]
            isOneToOne: false
            referencedRelation: "user_roles"
            referencedColumns: ["id"]
          },
        ]
      }
      seller_webhook_config: {
        Row: {
          conversation_id: string
          created_at: string | null
          evolution_api_key: string | null
          evolution_api_url: string | null
          evolution_instance: string | null
          id: string
          is_active: boolean | null
          seller_id: string | null
          seller_name: string
          updated_at: string | null
          url_audio_evolution_api: string | null
          webhook_url: string | null
          whatsapp_number: string | null
        }
        Insert: {
          conversation_id: string
          created_at?: string | null
          evolution_api_key?: string | null
          evolution_api_url?: string | null
          evolution_instance?: string | null
          id?: string
          is_active?: boolean | null
          seller_id?: string | null
          seller_name: string
          updated_at?: string | null
          url_audio_evolution_api?: string | null
          webhook_url?: string | null
          whatsapp_number?: string | null
        }
        Update: {
          conversation_id?: string
          created_at?: string | null
          evolution_api_key?: string | null
          evolution_api_url?: string | null
          evolution_instance?: string | null
          id?: string
          is_active?: boolean | null
          seller_id?: string | null
          seller_name?: string
          updated_at?: string | null
          url_audio_evolution_api?: string | null
          webhook_url?: string | null
          whatsapp_number?: string | null
        }
        Relationships: []
      }
      stages: {
        Row: {
          created_at: string
          id: string
          name: string
          order_index: number
          pipeline_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          order_index: number
          pipeline_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          order_index?: number
          pipeline_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "stages_pipeline_id_fkey"
            columns: ["pipeline_id"]
            isOneToOne: false
            referencedRelation: "pipelines"
            referencedColumns: ["id"]
          },
        ]
      }
      stg_clients_cnpj: {
        Row: {
          client_id: string | null
          cnpj_norm: string | null
          cnpj_raw: string | null
          email: string | null
          razao_social: string | null
        }
        Insert: {
          client_id?: string | null
          cnpj_norm?: string | null
          cnpj_raw?: string | null
          email?: string | null
          razao_social?: string | null
        }
        Update: {
          client_id?: string | null
          cnpj_norm?: string | null
          cnpj_raw?: string | null
          email?: string | null
          razao_social?: string | null
        }
        Relationships: []
      }
      stg_leads_import: {
        Row: {
          celulares: string | null
          cidade: string | null
          cnpj_norm: string | null
          melhor_telefone: string | null
          microrregiao: string | null
          nome_fantasia: string | null
          raw_cnpj: string | null
          razao_social: string | null
        }
        Insert: {
          celulares?: string | null
          cidade?: string | null
          cnpj_norm?: string | null
          melhor_telefone?: string | null
          microrregiao?: string | null
          nome_fantasia?: string | null
          raw_cnpj?: string | null
          razao_social?: string | null
        }
        Update: {
          celulares?: string | null
          cidade?: string | null
          cnpj_norm?: string | null
          melhor_telefone?: string | null
          microrregiao?: string | null
          nome_fantasia?: string | null
          raw_cnpj?: string | null
          razao_social?: string | null
        }
        Relationships: []
      }
      stg_orders_raw: {
        Row: {
          id: number
          imported: boolean | null
          raw_line: string | null
        }
        Insert: {
          id?: number
          imported?: boolean | null
          raw_line?: string | null
        }
        Update: {
          id?: number
          imported?: boolean | null
          raw_line?: string | null
        }
        Relationships: []
      }
      tasks: {
        Row: {
          assigned_by: string | null
          client_id: string | null
          column_slug: string
          completed_at: string | null
          created_at: string
          description: string | null
          id: string
          moved_to_current_column_at: string
          position: number
          priority: Database["public"]["Enums"]["task_priority"]
          report_id: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          assigned_by?: string | null
          client_id?: string | null
          column_slug?: string
          completed_at?: string | null
          created_at?: string
          description?: string | null
          id?: string
          moved_to_current_column_at?: string
          position?: number
          priority?: Database["public"]["Enums"]["task_priority"]
          report_id?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          assigned_by?: string | null
          client_id?: string | null
          column_slug?: string
          completed_at?: string | null
          created_at?: string
          description?: string | null
          id?: string
          moved_to_current_column_at?: string
          position?: number
          priority?: Database["public"]["Enums"]["task_priority"]
          report_id?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_column_slug_fkey"
            columns: ["column_slug"]
            isOneToOne: false
            referencedRelation: "kanban_columns"
            referencedColumns: ["slug"]
          },
        ]
      }
      user_modules: {
        Row: {
          created_at: string | null
          id: string
          module_name: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          module_name: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          module_name?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          nome_equipe: string | null
          report_id: string | null
          role: Database["public"]["Enums"]["app_role"]
          seller_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          nome_equipe?: string | null
          report_id?: string | null
          role: Database["public"]["Enums"]["app_role"]
          seller_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          nome_equipe?: string | null
          report_id?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          seller_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      inactive_clients_available: {
        Row: {
          client_id: string | null
          client_name: string | null
          days_inactive: number | null
          email: string | null
          last_order_at: string | null
          total_orders: number | null
        }
        Relationships: []
      }
      sellers: {
        Row: {
          report_id: string | null
          report_title: string | null
          team: string | null
          user_id: string | null
        }
        Insert: {
          report_id?: string | null
          report_title?: never
          team?: never
          user_id?: string | null
        }
        Update: {
          report_id?: string | null
          report_title?: never
          team?: never
          user_id?: string | null
        }
        Relationships: []
      }
      vw_alertas_comerciais: {
        Row: {
          acao_sugerida: string | null
          cidade: string | null
          client_id: string | null
          cliente_nome: string | null
          company_name: string | null
          curva_abc: string | null
          dias_sem_comprar: number | null
          email: string | null
          estado: string | null
          phone: string | null
          prioridade: number | null
          ticket_medio: number | null
          tipo_alerta: string | null
          total_pedidos: number | null
          total_vendas: number | null
          ultima_data: string | null
        }
        Relationships: []
      }
      vw_analise_produtos: {
        Row: {
          clientes_compraram: number | null
          codigo_produto: string | null
          dias_sem_venda: number | null
          faturamento_total: number | null
          preco_medio: number | null
          produto_descricao: string | null
          qtd_pedidos: number | null
          qtd_total_vendida: number | null
          ticket_medio_produto: number | null
          ultima_venda: string | null
        }
        Relationships: []
      }
      vw_bi_alertas: {
        Row: {
          acao: string | null
          cidade: string | null
          client_id: string | null
          cliente: string | null
          curva: string | null
          dias_sem_compra: number | null
          email: string | null
          equipe: string | null
          estado: string | null
          phone: string | null
          prioridade: number | null
          tipo_alerta: string | null
          ultima_compra: string | null
        }
        Insert: {
          acao?: never
          cidade?: string | null
          client_id?: string | null
          cliente?: never
          curva?: string | null
          dias_sem_compra?: never
          email?: string | null
          equipe?: string | null
          estado?: string | null
          phone?: string | null
          prioridade?: never
          tipo_alerta?: never
          ultima_compra?: string | null
        }
        Update: {
          acao?: never
          cidade?: string | null
          client_id?: string | null
          cliente?: never
          curva?: string | null
          dias_sem_compra?: never
          email?: string | null
          equipe?: string | null
          estado?: string | null
          phone?: string | null
          prioridade?: never
          tipo_alerta?: never
          ultima_compra?: string | null
        }
        Relationships: []
      }
      vw_bi_churn_risk: {
        Row: {
          cidade: string | null
          client_id: string | null
          cliente: string | null
          dias_sem_compra: number | null
          equipe: string | null
          estado: string | null
          id: string | null
          total_pedidos: number | null
          ultimo_pedido: string | null
          valor_historico: number | null
        }
        Relationships: []
      }
      vw_bi_curva_abc_clientes: {
        Row: {
          cidade: string | null
          client_id: string | null
          cliente: string | null
          curva: string | null
          estado: string | null
          percentual_acumulado: number | null
          qtd_pedidos: number | null
          ranking: number | null
          valor_total: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "inactive_clients_available"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_alertas_comerciais"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_alertas"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_churn_risk"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_top_clientes"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_vendas_consolidadas"
            referencedColumns: ["client_id"]
          },
        ]
      }
      vw_bi_estados: {
        Row: {
          estado: string | null
          qtd_clientes: number | null
          qtd_pedidos: number | null
          ticket_medio: number | null
          valor_total: number | null
        }
        Relationships: []
      }
      vw_bi_evolucao_mensal: {
        Row: {
          ano_mes: string | null
          baixado: number | null
          clientes_ativos: number | null
          faturado: number | null
          mes_label: string | null
          normal: number | null
          producao: number | null
          ticket_medio: number | null
          total_pedidos: number | null
          valor_total: number | null
          vendedores_ativos: number | null
        }
        Relationships: []
      }
      vw_bi_kpis_gerais: {
        Row: {
          pedidos_aberto: number | null
          pedidos_baixado: number | null
          pedidos_faturado: number | null
          pedidos_normal: number | null
          pedidos_producao: number | null
          ticket_medio: number | null
          total_clientes: number | null
          total_pedidos: number | null
          total_vendedores: number | null
          valor_aberto: number | null
          valor_baixado: number | null
          valor_faturado: number | null
          valor_normal: number | null
          valor_producao: number | null
          valor_total: number | null
        }
        Relationships: []
      }
      vw_bi_pipeline: {
        Row: {
          percentual: number | null
          situacao: string | null
          total_pedidos: number | null
          valor_total: number | null
        }
        Relationships: []
      }
      vw_bi_produtos: {
        Row: {
          codigo_produto: string | null
          descricao: string | null
          preco_medio: number | null
          qtd_vendas: number | null
          quantidade_total: number | null
          valor_total: number | null
        }
        Relationships: []
      }
      vw_bi_resumo_vendas: {
        Row: {
          em_aberto: number | null
          em_producao: number | null
          faturado: number | null
          ticket_medio: number | null
          total_clientes: number | null
          total_pedidos: number | null
          valor_total: number | null
        }
        Relationships: []
      }
      vw_bi_top_clientes: {
        Row: {
          cidade: string | null
          client_id: string | null
          curve_class: string | null
          dias_sem_compra: number | null
          email: string | null
          estado: string | null
          name: string | null
          nome_cliente: string | null
          nome_fantasia: string | null
          phone: string | null
          qtd_pedidos: number | null
          razao_social: string | null
          ultima_compra: string | null
          valor_total: number | null
        }
        Insert: {
          cidade?: string | null
          client_id?: string | null
          curve_class?: string | null
          dias_sem_compra?: never
          email?: string | null
          estado?: string | null
          name?: string | null
          nome_cliente?: never
          nome_fantasia?: string | null
          phone?: string | null
          qtd_pedidos?: never
          razao_social?: string | null
          ultima_compra?: string | null
          valor_total?: number | null
        }
        Update: {
          cidade?: string | null
          client_id?: string | null
          curve_class?: string | null
          dias_sem_compra?: never
          email?: string | null
          estado?: string | null
          name?: string | null
          nome_cliente?: never
          nome_fantasia?: string | null
          phone?: string | null
          qtd_pedidos?: never
          razao_social?: string | null
          ultima_compra?: string | null
          valor_total?: number | null
        }
        Relationships: []
      }
      vw_bi_top_clientes_vendedor: {
        Row: {
          cidade: string | null
          cliente: string | null
          estado: string | null
          primeiro_pedido: string | null
          qtd_pedidos: number | null
          ultimo_pedido: string | null
          valor_total: number | null
          vendedor: string | null
        }
        Relationships: []
      }
      vw_bi_top_produtos: {
        Row: {
          codigo_produto: string | null
          descricao: string | null
          preco_medio: number | null
          qtd_pedidos: number | null
          qtd_vendida: number | null
          valor_total: number | null
        }
        Relationships: []
      }
      vw_bi_vendas_mensal: {
        Row: {
          clientes_ativos: number | null
          mes: string | null
          mes_ano: string | null
          ticket_medio: number | null
          total_pedidos: number | null
          valor_total: number | null
        }
        Relationships: []
      }
      vw_bi_vendedor: {
        Row: {
          faturado: number | null
          pipeline: number | null
          ticket_medio: number | null
          total_clientes: number | null
          total_pedidos: number | null
          valor_por_cliente: number | null
          valor_total: number | null
          vendedor: string | null
        }
        Relationships: []
      }
      vw_bi_vendedor_mensal: {
        Row: {
          clientes_ativos: number | null
          mes: string | null
          mes_ano: string | null
          total_pedidos: number | null
          valor_total: number | null
          vendedor: string | null
        }
        Relationships: []
      }
      vw_bi_vendedores: {
        Row: {
          pedidos_faturados: number | null
          qtd_clientes: number | null
          qtd_pedidos: number | null
          taxa_conversao: number | null
          ticket_medio: number | null
          valor_carteira: number | null
          valor_faturado: number | null
          valor_total: number | null
          vendedor: string | null
        }
        Relationships: []
      }
      vw_bi_yoy: {
        Row: {
          ano: number | null
          mes: number | null
          mes_nome: string | null
          total_pedidos: number | null
          valor_total: number | null
        }
        Relationships: []
      }
      vw_clientes_novos_recorrentes: {
        Row: {
          ano: number | null
          ano_mes: string | null
          clientes_novos: number | null
          clientes_recorrentes: number | null
          mes: number | null
          total_clientes_mes: number | null
          vendas_novos: number | null
          vendas_recorrentes: number | null
        }
        Relationships: []
      }
      vw_curva_abc_clientes: {
        Row: {
          cidade: string | null
          client_id: string | null
          cliente_nome: string | null
          company_name: string | null
          curva_abc_calculada: string | null
          curva_cadastrada: string | null
          dias_sem_comprar: number | null
          email: string | null
          estado: string | null
          percentual_acumulado: number | null
          percentual_vendas: number | null
          phone: string | null
          ranking_posicao: number | null
          status_cliente: string | null
          ticket_medio: number | null
          total_pedidos: number | null
          total_vendas: number | null
          ultima_compra: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "inactive_clients_available"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_alertas_comerciais"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_alertas"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_churn_risk"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_top_clientes"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_vendas_consolidadas"
            referencedColumns: ["client_id"]
          },
        ]
      }
      vw_dashboard_executivo: {
        Row: {
          faturamento_total: number | null
          pedidos_abertos: number | null
          pedidos_faturados: number | null
          pedidos_producao: number | null
          periodo: string | null
          pipeline_total: number | null
          ticket_medio: number | null
          total_clientes: number | null
          total_pedidos: number | null
          total_vendedores: number | null
          valor_carteira: number | null
          valor_por_cliente: number | null
          valor_por_vendedor: number | null
          valor_total: number | null
        }
        Relationships: []
      }
      vw_kpis_vendedor: {
        Row: {
          carteira: number | null
          faturamento: number | null
          pedidos_abertos: number | null
          pedidos_faturados: number | null
          pedidos_producao: number | null
          ticket_medio: number | null
          total_clientes: number | null
          total_pedidos: number | null
          valor_por_cliente: number | null
          valor_total: number | null
          vendedor: string | null
        }
        Relationships: []
      }
      vw_mix_produtos_cliente: {
        Row: {
          client_id: string | null
          cliente_nome: string | null
          company_name: string | null
          curva_abc: string | null
          faixa_diversificacao: string | null
          faturamento_por_produto: number | null
          faturamento_total: number | null
          itens_total: number | null
          oportunidade_cross_sell: string | null
          pedidos_total: number | null
          produtos_diferentes: number | null
          ticket_medio_pedido: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "inactive_clients_available"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_alertas_comerciais"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_alertas"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_churn_risk"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_bi_top_clientes"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "vw_vendas_consolidadas"
            referencedColumns: ["client_id"]
          },
        ]
      }
      vw_performance_mensal: {
        Row: {
          ano: number | null
          ano_mes: string | null
          carteira: number | null
          clientes_ativos: number | null
          crescimento_mom_pct: number | null
          crescimento_yoy_pct: number | null
          faturamento: number | null
          mes: number | null
          ticket_medio: number | null
          total_pedidos: number | null
          valor_mes_anterior: number | null
          valor_mesmo_mes_ano_anterior: number | null
          valor_total: number | null
          vendedores_ativos: number | null
        }
        Relationships: []
      }
      vw_performance_regiao: {
        Row: {
          carteira: number | null
          cidade: string | null
          clientes: number | null
          estado: string | null
          faturamento: number | null
          pedidos: number | null
          ticket_medio: number | null
          ultima_venda: string | null
          valor_total: number | null
        }
        Relationships: []
      }
      vw_pipeline_mensal: {
        Row: {
          ano: number | null
          ano_mes: string | null
          clientes_unicos: number | null
          mes: number | null
          qtd_pedidos: number | null
          situacao: string | null
          ticket_medio: number | null
          valor_total: number | null
          vendedores_ativos: number | null
        }
        Relationships: []
      }
      vw_vendas_consolidadas: {
        Row: {
          ano: number | null
          ano_mes: string | null
          ano_trimestre: string | null
          cidade: string | null
          client_id: string | null
          company_name: string | null
          curva_abc: string | null
          data_emissao: string | null
          data_entrega: string | null
          estado: string | null
          mes: number | null
          numero_pedido: string | null
          pedido_id: string | null
          segmento: string | null
          situacao: string | null
          trimestre: number | null
          valor_total: number | null
          vendedor: string | null
        }
        Relationships: []
      }
      vw_vendedor_mensal: {
        Row: {
          ano: number | null
          ano_mes: string | null
          clientes_ativos: number | null
          mes: number | null
          ticket_medio: number | null
          total_pedidos: number | null
          valor_total: number | null
          vendedor: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      calculate_client_potential: { Args: never; Returns: undefined }
      calculate_commission: {
        Args: { p_order_value: number; p_report_id: string }
        Returns: {
          commission_amount: number
          commission_rate: number
        }[]
      }
      calculate_order_totals: {
        Args: { p_order_id: string }
        Returns: {
          ipi_valor: number
          subtotal: number
          total_geral: number
        }[]
      }
      check_stuck_tasks: { Args: never; Returns: undefined }
      complete_production_stage: {
        Args: { p_operator_name: string; p_stage_id: string }
        Returns: undefined
      }
      duplicate_order: { Args: { p_order_id: string }; Returns: string }
      fill_order_items_from_description: {
        Args: { order_uuid: string }
        Returns: undefined
      }
      first_phone: { Args: { a: string; b: string }; Returns: string }
      fn_bi_evolucao_mensal: {
        Args: {
          p_data_fim?: string
          p_data_inicio?: string
          p_vendedor?: string
        }
        Returns: {
          ano_mes: string
          baixado: number
          clientes_ativos: number
          faturado: number
          mes_label: string
          normal: number
          producao: number
          ticket_medio: number
          total_pedidos: number
          valor_total: number
          vendedores_ativos: number
        }[]
      }
      fn_bi_kpis: {
        Args: {
          p_data_fim?: string
          p_data_inicio?: string
          p_vendedor?: string
        }
        Returns: {
          pedidos_aberto: number
          pedidos_baixado: number
          pedidos_entrada: number
          pedidos_faturado: number
          pedidos_producao: number
          ticket_medio: number
          total_clientes: number
          total_pedidos: number
          total_vendedores: number
          valor_aberto: number
          valor_baixado: number
          valor_entrada: number
          valor_faturado: number
          valor_producao: number
          valor_total: number
        }[]
      }
      fn_bi_top_produtos: {
        Args: { p_data_fim?: string; p_data_inicio?: string; p_limit?: number }
        Returns: {
          codigo_produto: string
          descricao: string
          preco_medio: number
          qtd_pedidos: number
          qtd_vendida: number
          valor_total: number
        }[]
      }
      fn_bi_vendedores: {
        Args: { p_data_fim?: string; p_data_inicio?: string }
        Returns: {
          pedidos_faturados: number
          qtd_clientes: number
          qtd_pedidos: number
          taxa_conversao: number
          ticket_medio: number
          valor_carteira: number
          valor_faturado: number
          valor_total: number
          vendedor: string
        }[]
      }
      get_client_by_cnpj: {
        Args: { cnpj_param: string }
        Returns: {
          client_id: string
          company_name: string
          id: string
          name: string
          user_id: string
        }[]
      }
      get_monthly_commissions: {
        Args: { p_month?: number; p_year?: number }
        Returns: {
          commission_to_pay: number
          report_id: string
          representative_name: string
          total_commission: number
          total_orders: number
          total_sales: number
        }[]
      }
      get_user_role: {
        Args: { p_user_id: string }
        Returns: {
          report_id: string
          role: Database["public"]["Enums"]["app_role"]
        }[]
      }
      has_module_access: {
        Args: { _module_name: string; _user_id: string }
        Returns: boolean
      }
      is_admin: { Args: { _user_id: string }; Returns: boolean }
      is_gestor: { Args: { p_user_id: string }; Returns: boolean }
      keep_digits: { Args: { "": string }; Returns: string }
      match_documents: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      process_stg_order_line: { Args: { stg_id: number }; Returns: undefined }
      refresh_client_ultima_compra: {
        Args: { p_client_id: string }
        Returns: undefined
      }
      refresh_client_valor: {
        Args: { p_client_id: string }
        Returns: undefined
      }
      search_clients: {
        Args: { p_search_term: string }
        Returns: {
          client_id: string
          cnpj: string
          nome_fantasia: string
          razao_social: string
        }[]
      }
      start_production_stage: {
        Args: { p_operator_name: string; p_stage_id: string }
        Returns: undefined
      }
      sync_orders_missing_items: { Args: never; Returns: undefined }
      unaccent: { Args: { "": string }; Returns: string }
      validate_cnpj: { Args: { c: string }; Returns: boolean }
    }
    Enums: {
      app_role: "gestor" | "vendedor" | "captacao" | "rh" | "admin" | "producao"
      task_priority: "low" | "medium" | "high"
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
      app_role: ["gestor", "vendedor", "captacao", "rh", "admin", "producao"],
      task_priority: ["low", "medium", "high"],
    },
  },
} as const
