import { useContext } from "react";
import { formatDistanceToNow} from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { HistoryContainer, HistoryList, Status } from "./style";
import { CyclesContext } from "../../contexts/CyclesContext";

export function History(){
    const { cycles } = useContext(CyclesContext)
    return(
        <HistoryContainer>
            <h1>Meu Histórico</h1>

                
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cycles.map(cycles =>{
                            return(
                                <tr key={cycles.id}>
                                    <td>{cycles.task}</td>
                                    <td>{cycles.minutesAmount} minutos</td>
                                    <td>{formatDistanceToNow(new Date(cycles.startDate), {
                                        addSuffix:true,
                                        locale:ptBR,
                                    })}</td>
                                    <td>
                                        { cycles.finishedDate && ( <Status statusColor="green">Concluído</Status>)}

                                        { cycles.interruptedDate && (<Status statusColor="red">Interrompido</Status>)}

                                      {(!cycles.finishedDate && !cycles.interruptedDate) && (
                                        <Status statusColor="yellow">Em andamento</Status>)}

                                    </td>


                                </tr>

                            )
                        })}                       
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}
