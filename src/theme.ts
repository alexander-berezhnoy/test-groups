import { createTheme } from '@material-ui/core/styles';

export const defaultTheme = createTheme({
  typography: {
    fontFamily: 'PF Agora Sans Pro,  Roboto, Arial',
    fontWeightMedium: 500,
    // htmlFontSize: 14,
    body2: {
      fontFamily: 'PF Agora Sans Pro,  Roboto, Arial',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.7,
      letterSpacing: '0.01071em',
    },
  },
  props: {
    MuiIconButton: {
      size: 'small',
      // disableFocusRipple: true,
      // disableRipple: true,
    },
    MuiTabs: {
      indicatorColor: 'primary',
    },
  },
  palette: {
    secondary: {
      main: '#A82A38',
      light: '#e53e4f',
      dark: '#8a0030',
      contrastText: '#fff',
    },
    primary: {
      main: '#00B8E4',
      light: '#65eaff',
      dark: '#02538b',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontFamily: 'PF Agora Sans Pro,  Roboto, Arial',
        },
        body: {
          backgroundColor: '#00B8E408',
        },
      },
    },

    MuiAccordion: {
      root: {
        '&$expanded': {
          margin: 'auto',
        },
      },
    },

    MuiAccordionSummary: {
      root: {
        minHeight: 32,
        '&$expanded': {
          minHeight: 32,
        },
      },
      content: {
        overflow: 'hidden',
        margin: '4px 0',
        '&$expanded': {
          margin: '4px 0',
        },
      },
      expandIcon: {
        color: 'inherit',
      },
    },

    MuiButton: {
      root: {
        minWidth: 48,
        lineHeight: 1.7,
      },
      label: {
        whiteSpace: 'nowrap',
      },
    },

    MuiIconButton: {
      colorPrimary: {
        '&:hover': {
          color: '#02538b',
        },
      },
    },
    MuiTableRow: {
      root: {
        '&$hover:hover': {
          color: '#02538b',
          backgroundColor: '#fafafa',
        },
      },
    },
    MuiTableCell: {
      root: {
        padding: 3,
        '&:first-child': {
          paddingLeft: 8,
        },
        '&:last-child': {
          paddingRight: 12,
        },
      },

      head: {
        height: '38px',
        padding: 3,
      },
      sizeSmall: {
        padding: '6px 4px 6px 4px',
        minWidth: 70,
        '&:first-child': {
          paddingLeft: 8,
        },
        '&:last-child': {
          paddingRight: 12,
        },
        '&$paddingCheckbox': {
          width: 24,
          minWidth: 24,
          padding: '0px 8px',
          '&:last-child': {
            paddingLeft: 8,
            paddingRight: 12,
          },
          '& > *': {
            padding: 'auto',
          },
        },
      },
    },

    MuiBadge: {
      badge: {
        fontSize: '0.7rem',
        padding: '0 2px',
        height: 18,
        minWidth: 18,
      },
    },
    MuiTabs: {
      indicator: {
        top: 0,
        transition: 'none',
      },
    },
    MuiInputBase: {
      input: {
        padding: '4px 0 5px',
      },
      multiline: {
        padding: '4px 0 5px',
      },
    },
    MuiInput: {
      formControl: {
        'label + &': {
          marginTop: 20,
        },
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '8px 10px',
      },
      adornedEnd: {
        paddingRight: '6px',
      },
      multiline: {
        padding: '8px 10px',
      },
    },

    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'none',
        },
      },
    },
  },
});
