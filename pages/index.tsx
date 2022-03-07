import * as React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import DebtAPI from "../services/api.service";

function HomePage({allDebts}) {
    return (
        <>
        <SimpleGrid columns={5} spacing={2}>
                <Box height='35px'>Nome</Box>
                <Box height='35px'>Dívida Total</Box>
                <Box height='35px'>Dívida de Papai</Box>
                <Box height='35px'>Minha Dívida</Box>
                <Box height='35px'>Limite Disponível</Box>

        {allDebts.debtSourcesSummarized.map(d => (
            <>
                <Box height='35px'>{d.name}</Box>
                <Box height='35px'>{d.totalDebt}</Box>
                <Box height='35px'>{d.totalDebtExternal}</Box>
                <Box height='35px'>{d.totalDebtInternal}</Box>
                <Box height='35px'>{d.availableLimit}</Box>
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