import UserInfoHeader from "./profile component/UserInfoHeader"
import styled from "styled-components";
import BackButtonHeader from "./profile component/BackButtonHeader";
import RecapLvl from "./profile component/RecapLvl";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
`

const Header = styled.header`
    display: flex;
    margin-left: 3vw;
    margin-top: 1vw;
    width: 76.4vw;
    height: 12vw;
    gap: 0.8vw;
    @media screen and (max-width: 560px) {
        margin-top: 20vw;
        width: 100vw;
        height: 70vw;
        flex-direction: column;
        align-items: center;
        gap: 3vw;
        margin-left: 0vw;
    }
`

const Section1 = styled.section`
    display: flex;
    gap: 0.8vw;
    width: calc(100% - 6vw);
    margin-left: 3vw;
    height: 25vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        margin-top: 5vw;
        gap: 3vw;
        height: 400vw;
    }
`

const Section1Left = styled.div`
    width: 50% ;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 560px) {
        width: calc(100% - 6vw);
        height: 50%;
    }
`


export default function Profile() {

    return (
        <Container>
            <Header>
                <UserInfoHeader />
                <BackButtonHeader />
            </Header>
            <Section1>
                <Section1Left>
                    <RecapLvl />
                    <div>a</div>
                </Section1Left>
                <div>a</div>
            </Section1>
        </Container>
    )
}