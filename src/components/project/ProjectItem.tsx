import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { projectJson, IProjectProps } from "../../api";

const Wrapper = styled.div`
  margin: 2% 5%;
  font-family: 'D2Coding', sans-serif;
`;
const ProjectGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const ProjectGridItem = styled.li`
  
`;
function ProjectItem() {
  const { isLoading, data } = useQuery<IProjectProps[]>({
    queryKey: ['projects'],
    queryFn: projectJson
  });
  console.log(data);
  return (
    <Wrapper>
      <ProjectGrid>
        {isLoading ? "isLoading" : (
          data?.map((project) => (
            <ProjectGridItem key={project.id}>
              <img src={process.env.PUBLIC_URL + project.img} alt={project.description} />
              <p>{project.title}</p>
            </ProjectGridItem>
          ))
        )}
      </ProjectGrid>
    </Wrapper>
  )
}
export default ProjectItem;