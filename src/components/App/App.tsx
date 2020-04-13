import React, {useEffect} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Container, createStyles, Theme} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import {Chat} from "../Chat/Chat";
import Snackbar from "@material-ui/core/Snackbar";
import {Viewer} from "../Viewer/Viewer";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        [theme.breakpoints.up('xs')]: {
            position: 'static'
        },
        [theme.breakpoints.up('md')]: {
            position: 'fixed',
        },
    },
}));

// FIXME: #ЯСДЕЛЯЛЬ #ИТАКСОЙДЁТ
const App: React.FC = ({ selectedCourse }: any) => {
    const [messages, setMessages] = React.useState<Array<any>>([]);
    const [notification, setNotification] = React.useState<string>('');
    const [activeCourse, setActiveCourse] = React.useState<any>({
        startDate: (new Date()).toISOString(),
        state: selectedCourse.state,
        current: {
            block: selectedCourse.initial,
            transitionedDate: (new Date()).toISOString()
        },
    });


    function makeCourseParams() {
        return {
            isPatron: async () => (window as any).isPatron,
            state: activeCourse.state,
            setState: async (newState: any) => {
                const data = Object.assign({}, activeCourse.state, newState);
                setActiveCourse({
                    ...activeCourse,
                    state: data,
                });
                return data;
            },
            send: async (messageObject: any) => {
                // send
                messages.push({
                    ...messageObject,
                    id: `${Date.now()}${Math.round(Math.random() * 99999999)}`,
                });

                setMessages([
                    ...messages,
                ]);

                // // send
                // messages.push({
                //     ...messageObject,
                //     id: `${Date.now()}${Math.round(Math.random() * 99999999)}`,
                // });
                // setMessages([
                //     ...messages,
                // ])
            },
            transition: async (block: any) => {
                setActiveCourse((prevState:any) => ({
                    ...prevState,
                    current: {
                        transitionedDate: (new Date()).toISOString(),
                        block
                    }
                }));
            }
        };
    }

    async function nextDay () {
        if (activeCourse.current.isExecuted) {
            return;
        }

        activeCourse.current.isExecuted = true;
        setActiveCourse({
            ...activeCourse,
            current: {
                ...activeCourse.current,
                isExecuted: true
            },
        });
        await selectedCourse.blocks[activeCourse.current.block].execute(makeCourseParams());
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!selectedCourse.blocks[activeCourse.current.block].wait && !selectedCourse.blocks[activeCourse.current.block].final) {
                nextDay();
            }
        }, 2000);

        return () => {
            clearTimeout(timeout);
        }

    }, [activeCourse]);

    const classes = useStyles();

  return (
      <Container fixed>
          <Grid container spacing={2}>
              <Grid xs={12} md={5} item>
                <Chat selectedCourse={selectedCourse} messages={messages} onAction={(messageId: any, button: any) => {
                    selectedCourse.actions[button.action]({
                        argument: button.argument,
                        ...makeCourseParams(),
                        notify: async (notification: any) => {
                            setNotification(notification);
                        },
                        edit: async (messageObject: any) => {
                            const message = messages.find(m => m.id === messageId);

                            if (messageObject.message) {
                                message.message = messageObject.message;
                            }
                            if (messageObject.buttons) {
                                message.buttons = messageObject.buttons;
                            }
                            setMessages([...messages]);
                        }
                    });
                }}/>
                  <Snackbar
                      anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                      }}
                      open={Boolean(notification)}
                      onClose={() => {
                          setNotification('');
                      }}
                      autoHideDuration={1500}
                      message={notification}
                  />
              </Grid>
              <Grid item xs={12} md={7}>
                  <Box className={classes.root} m={1}>
                      <Grid
                          container
                          spacing={2}
                      >
                          <Grid item>
                              <Grid
                                  container
                                  direction="column"
                              >
                                  <Grid item>
                                      <Box m={1}>
                                          <TextField
                                              disabled
                                              id="filled-disabled"
                                              label="Текущий блок"
                                              value={activeCourse.current.block}
                                              variant="outlined"
                                              fullWidth
                                          />
                                      </Box>
                                  </Grid>
                                  <Grid item>
                                      <Box m={1}>
                                          <TextField
                                              disabled
                                              id="filled-disabled"
                                              label="state"
                                              value={JSON.stringify(activeCourse.state, null,'    ')}
                                              rows="12"
                                              variant="outlined"
                                              multiline
                                              fullWidth
                                          />
                                      </Box>
                                  </Grid>
                                  <Grid item>
                                      <Box m={1}>
                                          <Button onClick={() => nextDay()} fullWidth={true} variant="contained" color="primary">
                                              Следующий день
                                          </Button>
                                      </Box>
                                  </Grid>
                              </Grid>
                          </Grid>
                          <Grid item xs={12} md={7}>
                              <Viewer block={selectedCourse.blocks[activeCourse.current.block]} />
                          </Grid>
                      </Grid>
                  </Box>
              </Grid>
          </Grid>
      </Container>
  );
};

export default App;
