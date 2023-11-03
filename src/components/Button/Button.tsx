import { ReactNode } from "react";
import { Button as StyledButton} from "./Button.Styled";
type Button = {
    children: ReactNode;
}

function Button ({children}: Button) {
    return(
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button;