// =====================IMPORTS=====================
import React, { useState } from "react";
import {
    MainWrap,
    InnerWrap,
    Header2,
    ButtonStyle,
    Engraving,
    Spacer,
    PortraitFrame,
} from "../../styles.js"
// ===================== =====================
const Character_Sheet = () => {

    const [gameName, set_gameName] = useState("DnD")
    const [systemName, set_systemName] = useState("5e")

return(
        
            <MainWrap>
                
                <InnerWrap>
                    <Header2>{ gameName } [{ systemName }] Character Sheet</Header2>
                    <InnerWrap invisflexRow>
                        <ButtonStyle OptionButton onClick={() => set_systemName("3.5e")}>3.5e</ButtonStyle>
                        <ButtonStyle OptionButton onClick={() => set_systemName("Pathfinder")}>Pathfinder</ButtonStyle>
                        <ButtonStyle OptionButton onClick={() => set_systemName("5e")}>5e</ButtonStyle>
                    </InnerWrap>
                </InnerWrap>

                <InnerWrap flexRow>
                    {/* <InnerWrap portraitDiv>
                        <PortraitFrame />
                    </InnerWrap> */}
                
                    <Engraving>
                        Player Name: 
                        <input type= "text" />
                    </Engraving>
                    

                    <Engraving>
                        Character:
                        <input type= "text" />
                    </Engraving>
                    

                    <Engraving>
                        Race:
                        <input type= "text" />
                    </Engraving>
                    
                
                    
                
                    <Engraving>
                        Background:
                        <input type= "text" />
                    </Engraving>
                    

                    <Engraving>
                        Alignment:
                        <input type= "text" />
                    </Engraving>
                    

                    <Engraving>
                        Experience:
                        <input type= "text" />
                    </Engraving>
                </InnerWrap>
                
                <InnerWrap flexRow>
                    [I contain character attributes]
                    [I contain essential info]
                </InnerWrap>
                
                <InnerWrap flexRow>
                    [I contain the skills table]

                </InnerWrap>

            </MainWrap>
        
    )

};

export default Character_Sheet;