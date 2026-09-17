export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

type TableDef<Row, Insert, Update> = {
  Row: Row;
  Insert: Insert;
  Update: Update;
  Relationships: [];
};

export interface Database {
  public: {
    Tables: {
      roles: TableDef<
        {
          id: string;
          name: string;
          created_at: string;
        },
        {
          id?: string;
          name: string;
          created_at?: string;
        },
        {
          id?: string;
          name?: string;
          created_at?: string;
        }
      >;
      services: TableDef<
        {
          id: string;
          title: string;
          slug: string;
          summary: string;
          content: string;
          icon: string | null;
          order: number;
          status: "draft" | "published";
          problem: string | null;
          deliverables: string[] | null;
          technologies: string[] | null;
          cta_text: string | null;
          created_at: string;
          updated_at: string;
        },
        {
          id?: string;
          title: string;
          slug: string;
          summary: string;
          content?: string;
          icon?: string | null;
          order?: number;
          status?: "draft" | "published";
          problem?: string | null;
          deliverables?: string[] | null;
          technologies?: string[] | null;
          cta_text?: string | null;
          created_at?: string;
          updated_at?: string;
        },
        {
          id?: string;
          title?: string;
          slug?: string;
          summary?: string;
          content?: string;
          icon?: string | null;
          order?: number;
          status?: "draft" | "published";
          problem?: string | null;
          deliverables?: string[] | null;
          technologies?: string[] | null;
          cta_text?: string | null;
          created_at?: string;
          updated_at?: string;
        }
      >;
      projects: TableDef<
        {
          id: string;
          title: string;
          slug: string;
          summary: string;
          content: string;
          cover: string | null;
          category: string | null;
          technologies: string[] | null;
          status: "draft" | "published";
          featured: boolean;
          challenge: string | null;
          objectives: string | null;
          strategy: string | null;
          result: string | null;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        },
        {
          id?: string;
          title: string;
          slug: string;
          summary: string;
          content?: string;
          cover?: string | null;
          category?: string | null;
          technologies?: string[] | null;
          status?: "draft" | "published";
          featured?: boolean;
          challenge?: string | null;
          objectives?: string | null;
          strategy?: string | null;
          result?: string | null;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        },
        {
          id?: string;
          title?: string;
          slug?: string;
          summary?: string;
          content?: string;
          cover?: string | null;
          category?: string | null;
          technologies?: string[] | null;
          status?: "draft" | "published";
          featured?: boolean;
          challenge?: string | null;
          objectives?: string | null;
          strategy?: string | null;
          result?: string | null;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        }
      >;
      leads: TableDef<
        {
          id: string;
          name: string;
          email: string;
          company: string | null;
          service: string;
          budget: string | null;
          deadline: string | null;
          message: string;
          attachment_url: string | null;
          status: "new" | "contacted" | "qualified" | "closed";
          created_at: string;
        },
        {
          id?: string;
          name: string;
          email: string;
          company?: string | null;
          service: string;
          budget?: string | null;
          deadline?: string | null;
          message: string;
          attachment_url?: string | null;
          status?: "new" | "contacted" | "qualified" | "closed";
          created_at?: string;
        },
        {
          id?: string;
          name?: string;
          email?: string;
          company?: string | null;
          service?: string;
          budget?: string | null;
          deadline?: string | null;
          message?: string;
          attachment_url?: string | null;
          status?: "new" | "contacted" | "qualified" | "closed";
          created_at?: string;
        }
      >;
      posts: TableDef<
        {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          cover: string | null;
          status: "draft" | "published";
          published_at: string | null;
          created_at: string;
          updated_at: string;
        },
        {
          id?: string;
          title: string;
          slug: string;
          excerpt: string;
          content?: string;
          cover?: string | null;
          status?: "draft" | "published";
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        },
        {
          id?: string;
          title?: string;
          slug?: string;
          excerpt?: string;
          content?: string;
          cover?: string | null;
          status?: "draft" | "published";
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        }
      >;
      team_members: TableDef<
        {
          id: string;
          name: string;
          role: string;
          bio: string | null;
          avatar: string | null;
          order: number;
          status: "draft" | "published";
          created_at: string;
        },
        {
          id?: string;
          name: string;
          role: string;
          bio?: string | null;
          avatar?: string | null;
          order?: number;
          status?: "draft" | "published";
          created_at?: string;
        },
        {
          id?: string;
          name?: string;
          role?: string;
          bio?: string | null;
          avatar?: string | null;
          order?: number;
          status?: "draft" | "published";
          created_at?: string;
        }
      >;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export type Service = Database["public"]["Tables"]["services"]["Row"];
export type Project = Database["public"]["Tables"]["projects"]["Row"];
export type Lead = Database["public"]["Tables"]["leads"]["Row"];
export type Post = Database["public"]["Tables"]["posts"]["Row"];
export type TeamMember = Database["public"]["Tables"]["team_members"]["Row"];
