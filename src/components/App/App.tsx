import React, {useEffect} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import {Chat} from "../Chat/Chat";
import Snackbar from "@material-ui/core/Snackbar";

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
                setActiveCourse({
                    ...activeCourse,
                    current: {
                        ...activeCourse.current,
                        isSent: true
                    },
                });
                // send
                setMessages([
                    ...messages,
                    {
                        ...messageObject,
                        id: `${Date.now()}${Math.round(Math.random() * 99999999)}`,
                    },
                ]);
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
        if (selectedCourse.blocks[activeCourse.current.block].final && activeCourse.current.isSent) {
            return;
        }

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

  return (
      <Container fixed>
          <Grid container spacing={4}>
              <Grid xs={6} item>
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
              <Grid item>
                  <Box style={{position: 'fixed'}} m={1}>
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
                  </Box>
              </Grid>
          </Grid>
      </Container>
  );
};

export default App;
