import axios from "axios";

const BASE_URL = `https://portfolio-backend-9mey.onrender.com/board`;

export interface IProjectProps {
  category: string;
  id: number;
  img: string;
  tags: ITagsProps[];
  title: string;
  description: string;
  year: number;
  path: string;
  git: string;
  homepage: string;
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

// restfull api를 이용한 게시판 작성
// 인터페이스 추가
export interface DbProps {
  id: number;
  name: string;
  content: string;
  created: number;
}
// 게시글조회
export const myDb = async () => {
  const response = await axios.get(
    `${BASE_URL}`
  );
  return response.data;
}

// 게시글추가
export const myDbAdd = async (name: string, content: string) => {
  const response = await axios.post(
    `${BASE_URL}`, { name, content }
  )
  return response.data;
}

// 게시글삭제
export const myDbDelete = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

// 게시글수정
export const myDbUpdate = async (id: number, title:string, content:string) => {
  const response = await axios.put(
    `${BASE_URL}/${id}`, {title, content}
  );
  return response.data;
}