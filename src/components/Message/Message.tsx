import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React from "react";
import './Message.css';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";

type MessageProps = {
    message?: any;
    buttons?: any;
    onAction?: any;
    image?: any;
    messageId?: any;
}

export const Message: React.FC<MessageProps> = ({ messageId, message, buttons, image, onAction }) => {

    function convertButtons(buttonsFromCourse: any) {
        function replaceAllButtons(btns: any) {
            return btns.map((button: any, index: number) => {
                if (Array.isArray(button)) {
                    return (
                        <Grid key={index} container spacing={2}>
                            {
                                replaceAllButtons(button)
                            }
                        </Grid>
                    );
                }

                return (
                    <Grid key={index} item xs>
                        <Button
                            fullWidth
                            variant="outlined"
                            size="small"
                            color="primary"
                            className="MessageButton"
                            onClick={() => onAction(messageId, button)}
                        >
                            {button.text}
                        </Button>
                    </Grid>
                );
            });
        }

        let buttons = null;
        if (buttonsFromCourse) {
            buttons = (
                <div style={{ width: "100%" }}>
                    { replaceAllButtons(buttonsFromCourse) }
                </div>
            );
        } else {
            buttons = [];
        }
        return buttons;
    }

    return (
        <Card variant="outlined">
            {
                image && (
                    <CardMedia
                        component="img"
                        image={`//localhost:8080/${process.env.REACT_APP_COURSE}/${image}`}
                    />
                )
            }
            <CardContent>
                <Typography
                    variant="body2"
                    color="textPrimary"
                    component="pre"
                    className="Message"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            </CardContent>
            <CardActions>
                {
                    convertButtons(buttons)
                }
            </CardActions>
        </Card>
    )
}