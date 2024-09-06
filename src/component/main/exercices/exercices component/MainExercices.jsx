// import Timer from "./main/Timer";
import LogiqueExercices from "./logique exercices/LogiqueExercices";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
    border-radius: 0.8vw;
    width: 78%;
    min-height: 80%;
`;

export default function Main() {
  const {  bgColor } = useSelector((state) => state.mode);

  return (
    <MainContainer $bgColor={bgColor}>
      {/* <Timer /> */}
      <LogiqueExercices />
    </MainContainer>
  );
}