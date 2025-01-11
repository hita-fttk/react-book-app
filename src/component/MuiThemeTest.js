import { Button, ThemeProvider,createTheme } from "@mui/material"
import { red } from "@mui/material/colors"

const MuiThemeTest = () => {
    const theme = createTheme({
        palette:{
            primary:{
                main: red[500]
            }
        }
    })

    return (<>
    <Button color="primary" variant="contained">Defaultのテーマ</Button>
    <ThemeProvider theme={theme}>
        <Button color="primary" variant="contained">theme設定後のテーマ</Button>
    </ThemeProvider>
    </>)
}

export default MuiThemeTest