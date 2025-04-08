import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
  animation: ${fadeIn} 0.5s ease-in;
`;

const Content = styled.div`
  max-width: 500px;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.8s ease-in;
`;

const Title = styled.h1`
  font-size: 80px;
  margin: 0;
  color: #dc3545;
  font-weight: 700;
  animation: ${bounce} 1s ease;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin: 10px 0 20px;
  color: #343a40;
  animation: ${fadeIn} 1.2s ease-in;
`;

const Message = styled.p`
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 30px;
  animation: ${fadeIn} 1.4s ease-in;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  animation: ${fadeIn} 1.6s ease-in;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0069d9;
    transform: translateY(-3px);
  }
`;

const Link = styled.a`
  display: inline-block;
  color: #6c757d;
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid #6c757d;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.3s;

  &:hover {
    background-color: #6c757d;
    color: white;
    transform: translateY(-3px);
  }
`;

export const ErrorStyle = {
  Container,
  Content,
  Title,
  Subtitle,
  Message,
  Actions,
  Button,
  Link
};