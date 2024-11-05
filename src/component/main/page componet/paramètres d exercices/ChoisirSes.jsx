import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Recherche from '../../dictionnaire/dictionnaire component/Recherche';
import { useLocation, useNavigate } from 'react-router-dom';
import KanjiEnter from '../../dictionnaire/dictionnaire component/dictionnaire enter/KanjiEnter';
import listeKanji from '../../../data/kanji/listeKanji.json';
import HiraganaEnter from '../../dictionnaire/dictionnaire component/dictionnaire enter/HiraganaEnter';
import listeHiragana from '../../../data/hiragana/listeHiragana.json';
import KatakanaEnter from '../../dictionnaire/dictionnaire component/dictionnaire enter/KatakanaEnter';
import listeKatakana from '../../../data/katakana/listeKatakana.json';
import VocabulaireEnter from '../../dictionnaire/dictionnaire component/dictionnaire enter/VocabulaireEnter';
import listeVocabulaire from '../../../data/vocabulaire/listeVocabulaire.json';
import { resetVocabulaire, resetHiragana, resetKatakana, resetKanji, resetNombre } from '../../../store';

import iconUpArrowLight from '../../../../assets/icon-up-arrow-light.svg';
import iconUpArrowDark from '../../../../assets/icon-up-arrow-dark.svg';
import iconCrossLight from '../../../../assets/icon-cross-white.svg';
import iconCrossDark from '../../../../assets/icon-cross-dark.svg';

const HeaderPage = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 10vw;
    @media screen and (max-width: 560px){
        margin-left: 0;
        margin-top: 20vw;
        margin-bottom: 0;
        gap: 3vw;
    }
`;

const HeaderMain = styled.div`
    display: flex;
    width:calc(100% - 3vw);
    height: 23vw;
    gap: 1vw;
    @media screen and (max-width: 560px){
        flex-direction: column-reverse;   
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
`

const Leftcontainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5vw;
    width: 50%;
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.8vw;
    padding: 1vw;
    @media screen and (max-width: 560px){
        padding: 3vw;
        border-radius: 4vw;
        width: 90%;
        height: 90vw;
        gap: 1.5vw;
    }
    div{
        display: flex;
        gap: 0.5vw;
        button{
            background-color: ${(props) => props.$color};
            color: ${(props) => props.$mainBgColor};
            border: none;
            border-radius: 0.5vw;
            padding: 0.5vw;
            font-size: 2vw;
            width: 25%;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
            will-change: transform;
            &:hover{
                cursor: pointer;
                transform: scale(1.04);
            }
            @media screen and (max-width: 560px){
                font-size: 6vw;
                border-radius: 3vw;
                padding: 1.5vw;
                width: 30%;
            }
        }
       @media screen and (max-width: 560px){
            gap: 1.5vw;
       }
    }
    div:nth-child(1){
        height: 20%;
        min-height: 20%;
        p{
            font-size: 2vw;
            font-weight: 700;
            background-color: ${(props) => props.$mainBgColor};
            border-radius: 0.5vw;
            max-width: 80%;
            width: 75%;
            padding-left: 1vw;
            padding-right: 1vw;
            display: flex;
            align-items: center;
            @media screen and (max-width: 560px){
                font-size: 6vw;
                border-radius : 3vw;
                padding: 4vw;
            }
        }
    }
    div:nth-child(2){
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        font-size: 1.5vw;
        background-color: ${(props) => props.$mainBgColor};
        border-radius: 0.5vw;
        max-width:calc(100% - 2vw);
        max-height: calc(80% - 2.5vw);
        width: 100%;
        height: 80%;
        padding: 1vw;
        gap: 0.5vw;
        overflow-y: scroll;
        scrollbar-color: ${(props) => props.$color} ${(props) => props.$mainBgColor};
        scrollbar-width: thin;
        @media screen and (max-width: 560px){
            font-size: 5vw;
            border-radius: 3vw;
            gap: 1.5vw;
        }
        p{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2vw;
            padding: 0.2vw 2vw;
            border-radius: 0.5vw;
            color: #F7F7F2;
            background-color: ${(props) => props.$color};
            @media screen and (max-width: 560px){
                font-size: 7vw;
                border-radius: 3vw;
                padding: 1vw 4vw;
            }
        }
    }
`

const Rightcontainer = styled.div`
    display: flex;
    gap: 0.5vw;
    width: 50%;
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.8vw;
    padding: 1vw;
    @media screen and (max-width: 560px){
        padding: 3vw;
        border-radius: 4vw;
        width: 90%;
        height: 30vw;
        gap: 1.5vw;
        flex-direction: column-reverse;
    }
    span{
        font-size: 4vw;
        font-weight: 700;
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$color};
        border-radius: 0.5vw;
        padding-left: 1vw;
        padding-right: 1vw;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        @media screen and (max-width: 560px){
            font-size: 15vw;
            border-radius: 3vw;
            padding: 4vw;
            width: 91%;
            height: 100%;
        }
    }
    p{
        font-size: 2vw;
        font-weight: 700;
        background-color: ${(props) => props.$mainBgColor};
        border-radius: 0.5vw;
        padding-left: 1vw;
        padding-right: 1vw;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 50%;
        @media screen and (max-width: 560px){
            display: none;
        }
    }
`

const ItemContainer = styled.div`
@media screen and (max-width: 560px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
}
`

const Close = styled.button`
    z-index: 100;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 1vw;
    background-color: ${(props) => props.$color};
    border: none;
    border-radius: 0.5vw;
    width: 5vw;
    height:4.3vw;
    border: ${(props) => props.$bgColor} 0.2vw solid;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        width: 15vw;
        height: 13vw;  
        border-radius: 3vw;
        top: 4vw;
        left: 4vw; 
    }
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
    img{
        width: 3.5vw;
        height: 3.5vw;
        @media screen and (max-width: 560px) {
            width: 8vw;
            height: 8vw;
        }
    }
`

const Valider = styled.button`
    z-index: 100;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 1vw;
    background-color: ${(props) => props.$color};
    border: none;
    border-radius: 0.5vw;
    width: 15vw;
    height:4.3vw;
    border: ${(props) => props.$bgColor} 0.2vw solid;
    font-size: 2vw;
    color: #F7F7F2;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        width: 33vw;
        height: 13vw;  
        border-radius: 3vw;
        bottom: 5vw;
        right: 4vw; 
        font-size: 6vw;
    }
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`

const UpButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 3vw);
   
 `

const UpButton = styled.button`
    background-color: ${(props) => props.$color};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    border: ${(props) => props.$bgColor} 0.2vw solid;
    position: fixed;
    bottom: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        width: 15vw;
        height: 13vw;  
        border-radius: 3vw;
        bottom: 5vw; 
    }
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
    img{
        width: 2.6vw;
        height: 2.6vw;
        resize: none;
        @media screen and (max-width: 560px) {
            width: 8vw;
            height: 8vw;
        }
    }
`

export default function ChoisirSes() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const hiraganaList = useSelector((state) => state.dataChoice.hiragana);
    const katakanaList = useSelector((state) => state.dataChoice.katakana);
    const kanjiList = useSelector((state) => state.dataChoice.kanji);
    const vocabulaireList = useSelector((state) => state.dataChoice.vocabulaire);
    const nombresList = useSelector((state) => state.dataChoice.nombres);
    const location = useLocation();
    let navigate = useNavigate();
    const searchText = useSelector((state) => state.search.searchText);
    const jlptLevel = useSelector((state) => state.search.jlptLevel);
    const kanaType = useSelector((state) => state.search.kanaType);
    const mode = useSelector(state => state.mode);
    const vocabulaireCategorie = useSelector(state => state.search.vocabulaireCategorie);
    const exerciceNumber = useSelector((state) => state.parametersExercice.exerciceNumber);

    const filteredKanjiList = listeKanji.kanji
        .filter((kanji) =>
            (kanji.Meaning?.toLowerCase().includes(searchText) ||
                kanji.SecondaryMeaning?.toLowerCase().includes(searchText)) &&
            (jlptLevel === '' || kanji.JLPTLevel === jlptLevel)
        )
        .sort((a, b) => {
            const aMatches = a.Kanji?.toLowerCase().startsWith(searchText) ||
                a.OnReading?.some((reading) => reading.toLowerCase().startsWith(searchText)) ||
                a.KunReading?.some((reading) => reading.toLowerCase().startsWith(searchText)) ||
                a.Meaning?.toLowerCase().startsWith(searchText) ||
                a.SecondaryMeaning?.toLowerCase().startsWith(searchText);

            const bMatches = b.Kanji?.toLowerCase().startsWith(searchText) ||
                b.OnReading?.some((reading) => reading.toLowerCase().startsWith(searchText)) ||
                b.KunReading?.some((reading) => reading.toLowerCase().startsWith(searchText)) ||
                b.Meaning?.toLowerCase().startsWith(searchText) ||
                b.SecondaryMeaning?.toLowerCase().startsWith(searchText);

            if (aMatches && !bMatches) return -1;
            if (!aMatches && bMatches) return 1;
            return 0;
        });

    const filteredHiraganaList = [
        ...listeHiragana.Hiragana,
        ...listeHiragana.Dakuten,
        ...listeHiragana.Handakuten,
        ...listeHiragana.Combinaison
    ].filter((hiragana) =>
        (hiragana.Hiragana?.toLowerCase().includes(searchText) ||
            hiragana.Dakuten?.toLowerCase().includes(searchText) ||
            hiragana.Handakuten?.toLowerCase().includes(searchText) ||
            hiragana.Romaji?.toLowerCase().includes(searchText)) &&
        (kanaType === '' || hiragana.Type === kanaType)
    ).sort((a, b) => {
        const aMatches = a.Hiragana?.toLowerCase().startsWith(searchText) ||
            a.Dakuten?.toLowerCase().startsWith(searchText) ||
            a.Handakuten?.toLowerCase().startsWith(searchText) ||
            a.Romaji?.toLowerCase().startsWith(searchText);
        const bMatches = b.Hiragana?.toLowerCase().startsWith(searchText) ||
            b.Dakuten?.toLowerCase().startsWith(searchText) ||
            b.Handakuten?.toLowerCase().startsWith(searchText) ||
            b.Romaji?.toLowerCase().startsWith(searchText);
        if (aMatches && !bMatches) return -1;
        if (!aMatches && bMatches) return 1;
        return 0;
    });

    const filteredKatakanaList = [
        ...listeKatakana.Katakana,
        ...listeKatakana.Dakuten,
        ...listeKatakana.Handakuten,
        ...listeKatakana.Combinaison
    ].filter((katakana) =>
        (katakana.Katakana?.toLowerCase().includes(searchText) ||
            katakana.Dakuten?.toLowerCase().includes(searchText) ||
            katakana.Handakuten?.toLowerCase().includes(searchText) ||
            katakana.Romaji?.toLowerCase().includes(searchText)) &&
        (kanaType === '' || katakana.Type === kanaType)
    ).sort((a, b) => {
        const aMatches = a.Katakana?.toLowerCase().startsWith(searchText) ||
            a.Dakuten?.toLowerCase().startsWith(searchText) ||
            a.Handakuten?.toLowerCase().startsWith(searchText) ||
            a.Romaji?.toLowerCase().startsWith(searchText);

        const bMatches = b.Katakana?.toLowerCase().startsWith(searchText) ||
            b.Dakuten?.toLowerCase().startsWith(searchText) ||
            b.Handakuten?.toLowerCase().startsWith(searchText) ||
            b.Romaji?.toLowerCase().startsWith(searchText);

        if (aMatches && !bMatches) return -1;
        if (!aMatches && bMatches) return 1;
        return 0;
    });

    const filteredVocabulaireList = Array.isArray(listeVocabulaire.vocabulaire) ? listeVocabulaire.vocabulaire.filter((vocabulaire) =>
        (vocabulaire.kanji?.toLowerCase().includes(searchText) ||
            vocabulaire.hiragana?.toLowerCase().includes(searchText) ||
            vocabulaire.francais?.toLowerCase().includes(searchText) ||
            vocabulaire.Romaji?.toLowerCase().includes(searchText)) &&
        (jlptLevel === '' || vocabulaire.JLPTLevel === jlptLevel) &&
        (vocabulaireCategorie.length === 0 || vocabulaireCategorie.includes(vocabulaire.categorie))
    ).sort((a, b) => {
        const aMatches = a.kanji?.toLowerCase().startsWith(searchText) ||
            a.hiragana?.toLowerCase().startsWith(searchText) ||
            a.francais?.toLowerCase().startsWith(searchText) ||
            a.Romaji?.toLowerCase().startsWith(searchText);
        const bMatches = b.kanji?.toLowerCase().startsWith(searchText) ||
            b.hiragana?.toLowerCase().startsWith(searchText) ||
            b.francais?.toLowerCase().startsWith(searchText) ||
            b.Romaji?.toLowerCase().startsWith(searchText);
        if (aMatches && !bMatches) return -1;
        if (!aMatches && bMatches) return 1;
        return 0;
    }) : [];



    const handleScrollToRecherche = () => {
        const rechercheElement = document.getElementById('recherche');
        rechercheElement.scrollIntoView({ behavior: 'smooth' });
    };

    const getText = () => {
        switch (location.pathname) {
            case '/choisir-ses/Kanji':
                return {
                    modeTitle: 'Kanji',
                };
            case '/choisir-ses/Hiragana':
                return {
                    modeTitle: 'Hiragana',
                };
            case '/choisir-ses/Katakana':
                return {
                    modeTitle: 'Katakana',
                };
            case '/choisir-ses/Vocabulaire':
                return {
                    modeTitle: 'Vocabulaire',
                };
            case '/choisir-ses/Nombres':
                return {
                    modeTitle: 'Nombres',
                };
            default:
                return 'Accueil';
        }
    };

    const text = getText();

    const url = location.pathname;

    let totalChoisi;
    switch (url) {
        case '/choisir-ses/Hiragana':
            totalChoisi = hiraganaList.length;
            break;
        case '/choisir-ses/Katakana':
            totalChoisi = katakanaList.length;
            break;
        case '/choisir-ses/Kanji':
            totalChoisi = kanjiList.length;
            break;
        case '/choisir-ses/Vocabulaire':
            totalChoisi = vocabulaireList.length;
            break;
        case '/choisir-ses/Nombres':
            totalChoisi = nombresList.length;
            break;
        default:
            totalChoisi = 0;
            break;
    }

    const dispatch = useDispatch();

    const handleEmptySelection = () => {
        switch (location.pathname) {
            case '/choisir-ses/Vocabulaire':
                dispatch(resetVocabulaire());
                break;
            case '/choisir-ses/Hiragana':
                dispatch(resetHiragana());
                break;
            case '/choisir-ses/Katakana':
                dispatch(resetKatakana());
                break;
            case '/choisir-ses/Kanji':
                dispatch(resetKanji());
                break;
            case '/choisir-ses/Nombres':
                dispatch(resetNombre());
                break;
            default:
                break;
        }
    };

    const handleValider = () => {
        if (totalChoisi !== exerciceNumber) {
            alert('Veuillez sélectionner plus de ' + exerciceNumber + ' ' + text.modeTitle);
        } else {
            navigate(-1)
        }
    }

    return (
        <HeaderPage >
            <Close onClick={() => navigate(-1)} $bgColor={bgColor} $color={color} $mainBgColor={mainBgColor} >
                <img src={mode.mode === 'light' ? iconCrossLight : iconCrossDark} />
            </Close>
            <HeaderMain>
                <Leftcontainer $mainBgColor={mainBgColor} $bgColor={bgColor} $fontColor={fontColor} $color={color}>
                    <div>
                        <p>{text.modeTitle} sélectionnes</p>
                        <button onClick={handleEmptySelection}>Vider</button>
                    </div>
                    <div id="selectionnes">
                        {url === '/choisir-ses/Hiragana' && hiraganaList.map((affichage, index) => (
                            <p key={index}>{
                                affichage.Nom === "Dakuten" ?
                                    affichage.Dakuten : affichage.Nom === "Handakuten" ?
                                        affichage.Handakuten : affichage.Hiragana
                            }</p>
                        ))}
                        {url === '/choisir-ses/Katakana' && katakanaList.map((affichage, index) => (
                            <p key={index}>{
                                affichage.Nom === "Dakuten" ?
                                    affichage.Dakuten : affichage.Nom === "Handakuten" ?
                                        affichage.Handakuten : affichage.Katakana
                            }</p>
                        ))}
                        {url === '/choisir-ses/Kanji' && kanjiList.map((affichage, index) => (
                            <p key={index}>{affichage.Kanji}</p>
                        ))}
                        {url === '/choisir-ses/Vocabulaire' && vocabulaireList.map((affichage, index) => (
                            <p key={index}>{affichage.kanji || affichage.hiragana}</p>
                        ))}
                        {url === '/choisir-ses/Nombres' && nombresList.map((affichage, index) => (
                            <p key={index}>{affichage.Nombre}</p>
                        ))}
                    </div>
                </Leftcontainer>
                <Rightcontainer $mainBgColor={mainBgColor} $bgColor={bgColor} $fontColor={fontColor} $color={color}>
                    <span> {totalChoisi}/{exerciceNumber}</span>
                    <p>{text.modeTitle} sélectionnes</p>
                </Rightcontainer>
            </HeaderMain>
            <Recherche />
            <ItemContainer>
                {location.pathname === '/choisir-ses/Kanji' && (
                    <KanjiEnter kanjiList={filteredKanjiList} />
                )}
                {location.pathname === '/choisir-ses/Hiragana' && (
                    <HiraganaEnter hiraganaList={filteredHiraganaList} />
                )}
                {location.pathname === '/choisir-ses/Katakana' && (
                    <KatakanaEnter katakanaList={filteredKatakanaList} />
                )}
                {location.pathname === '/choisir-ses/Vocabulaire' && (
                    <VocabulaireEnter vocabulaireList={filteredVocabulaireList} />
                )}
            </ItemContainer>
            <Valider onClick={handleValider} $bgColor={bgColor} $color={color} $mainBgColor={mainBgColor}>
                Valider
            </Valider>
            <UpButtonContainer>
                <UpButton onClick={handleScrollToRecherche} $bgColor={bgColor} $mainBgColor={mainBgColor} $color={color}>
                    <img src={mode.mode === 'light' ? iconUpArrowLight : iconUpArrowDark} />
                </UpButton>
            </UpButtonContainer>
        </HeaderPage>
    );
}