import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary(){

    const {transactions} = useTransactions()

    const sumary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
             acc.deposits += transaction.amount;
             acc.total += transaction.amount;
        }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })
    return(
        <Container>
            <div>
                <header>
                    Entradas 
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.deposits)}
                </strong>

            </div>

            <div>
                <header>
                    Saidas 
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong> -
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.withdraws)}
                </strong>

            </div>

            <div className="card">
                <header>
                    Total 
                    <img src={totalImg} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.total)}
                </strong>
            </div>
        </Container>
    )
}