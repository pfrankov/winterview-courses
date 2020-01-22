import Box from "@material-ui/core/Box";
import {Message} from "../Message/Message";
import Paper from "@material-ui/core/Paper";
import React from "react";

export const Chat = ({ messages, onAction, selectedCourse }: any) => {
    return (
        <Box height="100%" clone>
            <Paper variant="outlined">
                <Box m={4}>
                    <Message message={selectedCourse.description({ history: [] })}/>
                </Box>
                <Box m={4}>
                    {
                        messages.map((messageObject: any, index: number) => (
                            <Box key={index} mb={3}>
                                <Message messageId={messageObject.id} message={messageObject.message} buttons={messageObject.buttons} onAction={onAction}/>
                            </Box>
                        ))
                    }
                </Box>
            </Paper>
        </Box>
    )
};