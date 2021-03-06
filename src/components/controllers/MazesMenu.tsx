import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    ButtonGroup,
    Stack,
    Typography
} from "@mui/material";
import React, {useRef} from "react";
import {fontColor, mazesColor, mazesDropDownColor} from "../colors";
import {Maze} from "../../model/mazes/MazesEngine";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


interface MazesProps {
    width: number
    clicked: any
    isBusy: boolean
    mazeSelected: Maze
}

export const MazesMenu = ({width, clicked, isBusy, mazeSelected}: MazesProps) => {

    const buttonSx = {backgroundColor: mazesColor, width: width * 0.75}
    const expandRef = useRef(null)

    const toggleAndClicked = (maze: Maze) => {
        // @ts-ignore
        expandRef.current.click()
        clicked(maze);
    }

    return (
        <Stack direction="column" width={width} marginLeft={1}>
            <Accordion sx={{
                backgroundColor: mazesDropDownColor,
                color: fontColor,
                marginBottom: 1,
            }} disabled={isBusy} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: fontColor}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{marginBottom: 0}} ref={expandRef}>
                    <Typography fontWeight='bold' fontSize={13}>MAZE: </Typography>
                    <Typography paddingLeft={1} fontSize={13}>  {mazeSelected.name}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{marginBottom: 0}} >
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="contained"
                        sx={{marginTop: 0}}>
                        <Button sx={buttonSx} onClick={() => toggleAndClicked(Maze.RecursiveDivison)}> Recursive</Button>
                        <Button sx={buttonSx} onClick={() => toggleAndClicked(Maze.Custom)}> Custom </Button>
                        <Button sx={buttonSx} onClick={() => toggleAndClicked(Maze.Random)}> Random </Button>
                    </ButtonGroup>
                </AccordionDetails>
            </Accordion>
        </Stack>
    );
}
