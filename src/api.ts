import axios from "axios";

export interface IProjectProps {
  category: string;
  id: number;
  img: string;
  tags: ITagsProps[];
  title: string;
  description: string;
  year: number;
}

export interface ITagsProps {
  id: number;
  tag: string;
}

export interface IProjectDetailProps {
  "category": string;
  "path": string;
  "id": number;
  "title": string;
  "description": string;
  "tech_stack": {
    "frontend": string[];
    "backend": string[];
    "database": string[];
    "environment": string[];
  },
  "features": string[];
  "contribution": {
    "design": string[]
    "development": string[]
    "optimization": string[]
  },
  "mainImg": string;
  "mockupImg": string;
  "year" : number;
}

export const projectJson = async () => {
  const response = await axios.get(`/data/projects.json`);
  return response.data;
}

export const projectDetail = async (projectId: number) => {
  const response = await axios.get(`/data/projectDetail.json`);
  const allProjects = response.data;

  const project = allProjects.find((item: any) => item.id === projectId);

  return project;
}