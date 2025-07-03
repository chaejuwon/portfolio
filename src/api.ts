import axios from "axios";

export interface IProjectProps {
  category: string;
  id: number;
  img: string;
  tags: string[];
  title: string;
  description: string;
}

export const projectJson = async () => {
  const response = await axios.get(`/data/projects.json`);
  return response.data;
}