import * as React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import DebtAPI from "../services/api.service";
import HeaderRow from "../components/header-row.component";
import ContentRow from "../components/content-row.component";
import { allDebts } from "../types/debts";

interface Props {
    allDebts?: allDebts
}

const columnNames = ['Nome', 'Dívida Total', 'Dívida de Papai', 'Minha Dívida', 'Limite Disponível']

const formatToCurrency = (value: Number) => {
    return 'R$ ' + value.toFixed(2).replace('.', ',');
}

function HomePage({allDebts}) {
    return (
        <div style={{margin: '100px'}}>
            <HeaderRow columns={columnNames.length} content={columnNames} />
            <ContentRow columns={columnNames.length} content={allDebts.debtSourcesSummarized} />

            <SimpleGrid columns={2}>
                <Box border='1px solid black' fontWeight='bold'> TOTAL </Box>
                <Box border='1px solid black'> {formatToCurrency(allDebts.summarizedDebts.totalDebt)} </Box>

            </SimpleGrid>

            <SimpleGrid columns={2}>
                <Box border='1px solid black' fontWeight='bold'> TOTAL Papai </Box>
                <Box border='1px solid black'> {formatToCurrency(allDebts.summarizedDebts.totalDebtExternal)} </Box>

            </SimpleGrid>

            <SimpleGrid columns={2}>
                <Box border='1px solid black' fontWeight='bold'> TOTAL Meu </Box>
                <Box border='1px solid black'> {formatToCurrency(allDebts.summarizedDebts.totalDebtInternal)} </Box>

            </SimpleGrid>

        </div>
        
    )
  }
  
export default HomePage

export async function getServerSideProps() {
    let allDebts = await DebtAPI.searchByCEP()

    return {
		props: {
			allDebts
		}
	}

}