export type WorkCategory =
  | "Video Editing"
  | "Motion Graphics"
  | "Graphic Design"
  | "Photo & Video";

export interface Work {
  id: number;
  title: string;
  category: WorkCategory;

  thumbnail: string;
  preview: string;

  tools: string[];

  duration?: string;

  link?: string;
  youtube?: string;

  description: string;

  orientation?: "portrait" | "landscape";

  role?: string;
  client?: string;
  year?: string;
}