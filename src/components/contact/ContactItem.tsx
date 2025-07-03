import styled from "styled-components";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin: 2% 5%;
  font-family: 'D2Coding', sans-serif;
`;
const ContactWrap = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 100px;
`;
const ContactTitle = styled.h2`
  font-size:28px;
  color: ${props => props.theme.palette.blue}
`;
const ContactContent = styled.ul`
  margin-left:20px;
  li {
    font-size:20px;
    padding: 10px 0;
  }
`;
const SendTitle = styled.h2`
  font-size:40px;
  font-weight: bold;
`;
const SendContent = styled.p`
  font-size:18px;
  font-weight: normal;
  margin-top:10px;
`;
const Form = styled.form`
  margin-top:20px;
`;
const FormWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Info = styled.div`
  width: 50%;
  box-sizing: border-box;
`;
const Content = styled.div`
  width: 50%;
  box-sizing: border-box;
`;
const Field = styled.div`
  padding:10px;
  margin-bottom:20px;
  p {
    font-size:20px;
    margin-bottom:10px;
  }
  input {
    border: 0;
    padding: 15px;
    background: #333;
    color:#fff;
    width: 100%;
    font-size:18px;
  }
  textarea {
    border: 0;
    height:300px;
    padding: 15px;
    background: #333;
    color:#fff;
    width: 100%;
    font-size:18px;
  }
`;
const Button = styled.button`
  padding: 10px 15px;
  font-size: 18px;
  width: 100%;
  color: ${props => props.theme.component.button.text};
  background-color: ${props=> props.theme.component.button.background};
`;
interface useFormProps {
  email: string;
  name: string;
  content: string;
  title: string;
}
function ContactItem() {
  const { register, handleSubmit } = useForm<useFormProps>();
  const onFormSubmit = ({email, name, title, content}: useFormProps) => {
    emailjs.send(
      'cjw02141@gmail.com',
      'template_x8rdc0t',
      {
        email: email,
        name: name,
        title: title,
        message: content,
        reply_to: email
      },
      'iCI2FMm-8L7b-2r9k'
    ).then(() => {
      alert('이메일이 성공적으로 전송되었습니다!');
    }).catch((error) => {
      alert('이메일 전송에 실패했습니다: ' + error.text);
    });
  }
  return (
    <Wrapper>
      <ContactWrap>
        <ContactTitle>{`.contact {`}</ContactTitle>
          <ContactContent>
            <li>이 메 일 : cjw02141@gmail.com</li>
            <li>휴 대 폰 : 010-8537-0609</li>
            <li>깃 허 브 : <Link to="https://github.com/chaejuwon" target="_blank">https://github.com/chaejuwon</Link></li>
          </ContactContent>
        <ContactTitle>{`}`}</ContactTitle>
      </ContactWrap>
      <SendTitle>문의사항</SendTitle>
      <SendContent>궁금하신 사항이 있으시면 이메일로 메세지를 보내주세요.</SendContent>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <FormWrap>
          <Info>
            <Field>
              <p>제목 *</p>
              <input type="text" placeholder="제목을 입력해주세요." {...register('title', {
                required: '제목을 입력해주세요.'
              })} />
            </Field>
            <Field>
              <p>성명 *</p>
              <input type="text" placeholder="성명을 입력해주세요." {...register('name', {
                required: '성명을 입력해주세요.'
              })} />
            </Field>
            <Field>
              <p>이메일 *</p>
              <input type="text" placeholder="이메일을 입력해주세요." {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: '이메일형식이 맞지 않습니다.'
                }
              })}/>
            </Field>
          </Info>
          <Content>
            <Field>
              <p>메세지 *</p>
              <textarea placeholder="메세지를 입력해주세요." {...register('content', {
                required: '메세지를 입력해주세요.'
              })} />
            </Field>
            <Field>
              <Button type="submit">전송하기</Button>
            </Field>
          </Content>
        </FormWrap>


      </Form>
    </Wrapper>
  )
}
export default ContactItem;