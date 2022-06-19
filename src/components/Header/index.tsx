import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProsp{
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProsp){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button onClick={onOpenNewTransactionModal}>Nova transação</button>

            
            </Content>
        </Container>
    )
}