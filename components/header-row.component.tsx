import * as React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

function headerRow({columns, content}) {
    return (
        <div>
            <SimpleGrid columns={columns}>
                {content.map( content => (
                    <React.Fragment>
                        <Box  border='1px solid black' fontWeight='bold'> {content} </Box>
                    </React.Fragment>
                ))}
            </SimpleGrid>

        </div>
        
    )
  }
  
export default headerRow
