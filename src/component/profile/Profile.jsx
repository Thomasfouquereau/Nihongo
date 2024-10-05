import UserInfoHeader from "./profile component/UserInfoHeader"
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    margin-left: 3vw;
    margin-top: 1vw;
    width: 76vw;
    height: 10vw;
    @media screen and (max-width: 560px) {

    }
`

export default function Profile() {

    return (
        <div>
            <Header>
                <UserInfoHeader />
            </Header>
        </div>
    )
}