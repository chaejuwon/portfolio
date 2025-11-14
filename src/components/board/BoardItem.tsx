import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import BoardIcon from "../../assets/images/board.svg";
import { DbProps, myDb, myDbAdd } from "../../api";
import { Link } from "react-router-dom";
import { useMatch, useNavigate } from "react-router-dom";


const Wrapper = styled.div`
  overflow-y: auto;
  font-family: 'D2Coding', sans-serif;
  height: calc(100vh - 80px);
`;
const BoardWrapper = styled.div`
  margin: 2% 5%;
  position: relative;
`;
const BoardTitle = styled.h2`
  font-size: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap:10px;
  img {
    width: 50px;
  }
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

  th, td {
    padding: 12px 16px;
    text-align: left;
  }

  th {
    background: ${props => props.theme.colors.tablePrimary};
    color: ${props => props.theme.colors.textPrimary};
    font-weight: 600;
    font-size: 14px;
    border-bottom: ${props => props.theme.colors.border};
    text-align: center;
  }

  td {
    background: ${props => props.theme.colors.tableSecondary};
    color: ${props => props.theme.colors.textPrimary};
    font-size: 14px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    text-align: center;
  }
`;
const AddBoard = styled.div`
  text-align: right;
  margin-top: 10px;
  button {
    border: 0;
    background: ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.textPrimary};
    padding:8px 16px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const BoardModal = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;
const Overlay = styled.div`
  background: rgba(0, 0, 0, .8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const ModalWrap = styled.div`
  width: 40%;
  height: 50vh;
  position: fixed;
  top: 150px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #fff;
  color: #181818;
  padding: 50px;
  border-radius: 10px;
  font-family: 'pretendard', 'D2Coding', sans-serif;
  overflow: hidden;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input, textarea {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
  }
  
  textarea {
    height: 100px;
  }

  input:focus, textarea:focus {
    border-color: #4f46e5;
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }

  button {
    background: #4f46e5;
    color: #fff;
    padding: 10px 0;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
  }

  button:hover {
    background: #4338ca;
  }
`;
const ModalTitle = styled.h2`
  font-size: 40px;
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
  margin-bottom: 30px;
`;
const modalVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.3
    }
  }
}
function BoardItem() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  // 게시글 조회
  const {isLoading, data} = useQuery<DbProps[]>({
    queryKey: ['board'],
    queryFn: myDb
  });
  const queryClient = useQueryClient();

  // 게시글 등록
  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    await myDbAdd(name, content);
    setName("");
    setContent("");
    setModal(false);
    await queryClient.invalidateQueries({queryKey: ['board']});
  }
  // open modal
  const openModal = () => {
    setModal(true);
  }
  // close modal
  const closeModal = () => {
    setModal(false);
  }
  return (
    <Wrapper>
      <BoardWrapper>
        <BoardTitle><img src={BoardIcon} /> 방명록</BoardTitle>
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>닉네임</th>
              <th>내용</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
                <tr>
                  <td colSpan={4}>로딩중...</td>
                </tr>
            ) : (
              data?.map((post, index) => (
                <tr key={post.id}>
                  <td>{index + 1}</td>
                  <td>{post.name}</td>
                  <td>{post.content}</td>
                  <td>{post.created}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        <AddBoard>
          <button onClick={openModal}>방명록 작성</button>
        </AddBoard>
      </BoardWrapper>
      {modal ? <AnimatePresence>
        <BoardModal variants={modalVariants} initial="initial" animate="animate">
          <Overlay onClick={closeModal} />
          <ModalWrap>
            <ModalTitle>방명록</ModalTitle>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                placeholder="내용을 작성해주세요."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button type="submit">등록</button>
            </form>
          </ModalWrap>
        </BoardModal>
      </AnimatePresence> : null}
    </Wrapper>
  )
}
export default BoardItem;