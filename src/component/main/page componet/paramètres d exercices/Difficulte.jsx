import { useSelector } from 'react-redux';
import styled from 'styled-components';

import IconDifficulte1 from '../../../../assets/icon-difficulte-1.svg';
import IconDifficulte2 from '../../../../assets/icon-difficulte-2.svg';
import IconDifficulte3 from '../../../../assets/icon-difficulte-3.svg';

const SectionDifficulte = styled.div`
    display: flex;
    width: 100%;
    height: 35vw;
    gap: 1vw;
    margin-right: 3vw;
`

const ComingSoon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: 24%;
    padding: 1vw;
`

const ComingSoonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    width: 100%;
    height: 100%;
    font-size: 1.5vw;
`

const ComingSoonJpTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1vw;
`

const ComingSoonKanji = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.5vw;
    margin-right:0.8vw ;
`

const ComingSoonFurigana = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.$color};
    font-size: 1.1vw;
`

const DifficulteContainer = styled.div`
    display: flex;  
    flex-direction: column;
    gap: 0.6vw;
    width: 67.8%;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    padding: 1vw;
`

const DifficulteTitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 0.6vw;
    height: 6vw;
`

const DifficulteTitle = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
`

const DifficulteTitleJp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$color};
    width: 50%;
    border-radius: 0.5vw;
    color: #F7F7F2;
`

const DifficulteTitleFurigana = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 0.8vw;
    span{
        width: 2vw;
    }
`

const DifficulteTitleKanji = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2vw;
    span{
        width: 2vw;
        transform: translateY(-0.3vw);
    }
`

const DifficulteContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    height: 27vw;
`

const DifficulteContent = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    height: 35%;
    padding: 0;
    &:hover{
        background-color: #858585;
    }
`

const DifficulteContentLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    margin-left: 2vw;
    img{
        width: 5vw;
        height: 5vw;
    }
    span{
        font-size: 1.2vw;
    }
`

export const DifficulteContentRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    margin-right: 2vw;
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2vw;
        background-color: ${(props) => props.$color};
        width: 15vw;
        height: 7vw;
        border-radius: 0.5vw;
        color: #F7F7F2;
    }
`

export default function Difficulte() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    return (
        <SectionDifficulte>
            <ComingSoon $bgColor={bgColor}>
                <ComingSoonContainer $mainBgColor={mainBgColor} $fontColor={fontColor}>
                    <ComingSoonJpTitleContainer>
                        <ComingSoonKanji>
                            <span>近</span>
                            <span>日</span>
                            <span>公</span>
                            <span>開</span>
                        </ComingSoonKanji>
                        <ComingSoonFurigana $color={color}>
                            <span>き</span>
                            <span>ん</span>
                            <span>じ</span>
                            <span>つ</span>
                            <span>こ</span>
                            <span>う</span>
                            <span>か</span>
                            <span>い</span>
                        </ComingSoonFurigana>
                    </ComingSoonJpTitleContainer>
                    <span>A venir</span>
                </ComingSoonContainer>
            </ComingSoon>
            <DifficulteContainer $bgColor={bgColor}>
                <DifficulteTitleContainer>
                    <DifficulteTitle $mainBgColor={mainBgColor} $fontColor={fontColor}>Difficulté</DifficulteTitle>
                    <DifficulteTitleJp $color={color}>
                        <DifficulteTitleFurigana>
                            <span>こん</span>
                            <span>なん</span>
                        </DifficulteTitleFurigana>
                        <DifficulteTitleKanji>
                            <span>困</span>
                            <span>難</span>
                        </DifficulteTitleKanji>
                    </DifficulteTitleJp>
                </DifficulteTitleContainer>
                <DifficulteContentContainer>
                    <DifficulteContent $mainBgColor={mainBgColor} $fontColor={fontColor}>
                        <DifficulteContentLeft>
                            <img src={IconDifficulte1} />
                            <span>Débutant</span>
                        </DifficulteContentLeft>
                        <DifficulteContentRight $mainBgColor={mainBgColor} $color={color}>
                            <span>Hiragana/Katakana</span>
                            <span>Rōmaji</span>
                        </DifficulteContentRight>
                    </DifficulteContent>
                    <DifficulteContent $mainBgColor={mainBgColor} $fontColor={fontColor}>
                        <DifficulteContentLeft>
                            <img src={IconDifficulte2}/>
                            <span>Intermédiaire</span>
                        </DifficulteContentLeft>
                        <DifficulteContentRight $mainBgColor={mainBgColor} $color={color}>
                            <span>Hiragana/Katakana</span>
                        </DifficulteContentRight>
                    </DifficulteContent>
                    <DifficulteContent $mainBgColor={mainBgColor} $fontColor={fontColor}>
                        <DifficulteContentLeft>
                            <img src={IconDifficulte3}/>
                            <span>Confirmer</span>
                        </DifficulteContentLeft>
                    </DifficulteContent>
                </DifficulteContentContainer>

            </DifficulteContainer>
        </SectionDifficulte>
    );
}
