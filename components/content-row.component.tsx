import * as React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

function contentRow({columns, content}) {

    const formatToCurrency = (value) => {
        return 'R$ ' + value.toFixed(2).replace('.', ',');
    }

    return (
        <div>
            <SimpleGrid columns={columns}>
                {content.map( content => (
                    <React.Fragment>
                        <Box  border='1px solid black'> {content.name} </Box>
                        <Box border='1px solid black'> {formatToCurrency(content.totalDebt)} </Box>
                        <Box  border='1px solid black'> {formatToCurrency(content.totalDebtExternal)} </Box>
                        <Box  border='1px solid black'> {formatToCurrency(content.totalDebtInternal)} </Box>
                        <Box border='1px solid black'> {formatToCurrency(content.availableLimit)} </Box>
                    </React.Fragment>
                ))}
            </SimpleGrid>

        </div>
        
    )
  }
  
export default contentRow
