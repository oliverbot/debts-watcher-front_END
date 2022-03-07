import * as React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import DebtAPI from "../services/api.service";

function HomePage({allDebts}) {
    return (
        <>
        <SimpleGrid columns={5} spacing={0}>
                <Box  border='1px solid black'>Nome</Box>
                <Box border='1px solid black'>Dívida Total</Box>
                <Box  border='1px solid black'>Dívida de Papai</Box>
                <Box border='1px solid black'>Minha Dívida</Box>
                <Box  border='1px solid black'>Limite Disponível</Box>

        {allDebts.debtSourcesSummarized.map(d => (
            <>
                <Box  border='1px solid black'>{d.name}</Box>
                <Box border='1px solid black'>{d.totalDebt}</Box>
                <Box  border='1px solid black'>{d.totalDebtExternal}</Box>
                <Box  border='1px solid black'>{d.totalDebtInternal}</Box>
                <Box border='1px solid black'>{d.availableLimit}</Box>
            </>
        ))}
        </SimpleGrid>

        </>
        
    )
  }
  
export default HomePage

export async function getServerSideProps() {
    let allDebts = await DebtAPI.searchByCEP()

    console.log(allDebts)

    return {
		props: {
			allDebts
		}
	}

}