const { createTheme } = require("@mui/material/styles");

//Palette the colors
const colorPrimary = "#191919";

const theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: colorPrimary,
            contrastText: "#fff",
            dark: "#311650"
        },
        secondary: {
            main: "#9299b8",
        },
        error: {
            main: "#E64F3A"
        },
        success: {
            main: "#56B14B"
        },
        info: {
            main: "#5C82EE"
        },
        text: {
            primary: "#3B4468",
            secondary: colorPrimary,
            disabled: "#6E757D",
        }
    },
    typography: {
        fontFamily: "'Mulish'",
        allVariants: {
            color: '#191919',
        },
        h1: {
            fontSize: '24px',
            lineHeight: '28px',
            fontWeight: '700',
        },
        h2: {
            fontSize: '24px',
            lineHeight: '28px',
            fontWeight: '600',
        },
        h3: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '700',
        },
        h4: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: '600',
        },
        h5: {
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '400',
        },
        caption: {
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '600',
        },
        inputLabel: {
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '500',
        },
        button: {
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '700',
            textTransform: "none",
        },
        supralabel: {
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: '700',
            fontFamily: "'Mulish'",
            color: '#191919',
        }

    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            },
            styleOverrides: {
                root: {
                    fontSize: '12px',
                    lineHeight: '16px',
                    fontWeight: '700',
                    borderRadius: '33px',
                    padding: '8px 28px',
                    textTransform: "none",
                    height: '40px',

                    '.MuiButton-endIcon': {
                        marginLeft: '20px',
                    },

                    '&.Mui-disabled': {
                        color: 'white'
                    }
                }
            },
            variants: [
                {
                    props: {variant: 'contained-white'},
                    style: {
                        backgroundColor: 'white',
                        color: colorPrimary,
                        boxShadow: '0px 4px 4px 0px rgba(155, 143, 164, 0.3)'
                    },
                }
            ]
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: '33px !important',
                    fontSize: '14px',
                    height: '40px'
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#7B809A',
                    fontSize: '14px',
                    '& input:valid': {
                        borderColor: 'green', // Estilo para cuando el input tiene contenido
                    },
                },
                shrink: {
                    transform: 'translate(14px, -9px) scale(0.8) !important',
                },
                outlined: {
                    transform: 'translate(14px, 10px) scale(1)',
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            },
            variants: [
                {
                    props: { color: 'primary' },
                    style: {
                        backgroundColor: colorPrimary, 
                        padding: '6px', height: 35, width: 35,

                        ':hover': {
                            backgroundColor: '#502561', 
                        }
                    }
                }
            ]
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: 0,
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    justifyContent: 'center',
                    borderRadius: '8px',
                    margin: '0px 12px',
                    '&.Mui-selected': {
                        backgroundColor: colorPrimary,
                        color: 'white',
                        fontWeight: 'bold'
                    },
                    ':hover': {
                        backgroundColor: "rgba(115, 53, 139, 0.1)",
                        color: 'black',
                    }
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                root: {
                    borderRadius: '16px',
                    '.MuiPopover-paper': {
                        borderRadius: '16px'
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                }
            }
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    'span' : {
                        fontSize: '14px !important',
                        lineHeight: '24px',
                        fontWeight: '600',
                    }
                }
            }
        },
        MuiPopper: {
            styleOverrides: {
                root: {
                    justifyContent: 'center',
                    borderRadius: '8px',
                    margin: '0px 12px',
                    '&.Mui-selected': {
                        backgroundColor: colorPrimary,
                        color: 'white',
                        fontWeight: 'bold'
                    },
                    ':hover': {
                        backgroundColor: "rgba(115, 53, 139, 0.1)",
                        color: 'black',
                    },

                    '.MuiAutocomplete-popper': {
                        backgroundColor: 'red'
                    }
                }
            }
        },
    },
});

export default theme;