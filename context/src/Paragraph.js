import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Paragraph() {

    const context = useContext(ThemeContext)

    return (
        <p className={context.theme}>
            translate.google.com/?sl=vi&tl=en&text=t%
            C3%A1ch%20file&op=translate
        </p>
    )
}

export default Paragraph