// =====================IMPORTS=====================
import React, { useState } from "react";
import {
    MainWrap,
    InnerWrap,
    Header2,
    Header3,
    ButtonStyle,
    Engraving,
    EngravingInput,
    Spacer,
    Splitter,
    Table,
    TD,
    TR,
} from "../../styles.js"
// ===================== =====================
const Character_Sheet = () => {

    const [gameName, set_gameName] = useState("DnD");
    const [systemName, set_systemName] = useState("5e");
    const [playerName, set_playerName] = useState("");
    const [characterName, set_characterName] = useState("");
    const [characterRace, set_characterRace] = useState("");
    const [characterBackground, set_characterBackground] = useState("");
    const [characterAlignment, set_characterAlignment] = useState("");
    const [characterExperience, set_characterExperience] = useState(0);
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
    <Header2>Truth Tables</Header2>
    <Spacer/>

    <Table>
    <tr><td colspan = "2"><Header3>From "Character Basics"</Header3></td></tr>
        <TR>
            <th>useState</th>
            <th>Contains</th>
        </TR>
        <TR>
            <TD>gameName</TD>
            <TD>{gameName}</TD>
        </TR>
        <TR>
            <TD>systemName</TD>
            <TD>{systemName}</TD>
        </TR>
        <TR>
            <TD>playerName</TD>
            <TD>{playerName}</TD>
        </TR>
        <TR>
            <TD>characterName</TD>
            <TD>{characterName}</TD>
        </TR>
        <TR>
            <TD>characterRace</TD>
            <TD>{characterRace}</TD>
        </TR>
        <TR>
            <TD>characterBackground</TD>
            <TD>{characterBackground}</TD>
        </TR>
        <TR>
            <TD>characterAlignment</TD>
            <TD>{characterAlignment}</TD>
        </TR>
        <TR>
            <TD>characterExperience</TD>
            <TD>{characterExperience}</TD>
        </TR>

    </Table>
       
        <Splitter/>
    
    <table>
    <tr>
        <td colspan = "2">
            <Header3>
                From "Character Attributes"
            </Header3>
        </td>
    </tr>
    
    <tr>
        <th>useState</th>
        <th>Contains</th>
    </tr>


    </table>

</InnerWrap>

                <InnerWrap flexRow>
                    
                    <Spacer inputTopMargin="10px"/>
                    <Header2>Character Basics</Header2>
                    <Spacer inputBottomMargin="10px"/>

                <InnerWrap flexRow inputColor="rgba(200, 200, 100 ,0.2)" inputBorder="inset 3px black">
                    <Engraving>
                        Player Name: 
                        <EngravingInput type= "text" placeholder="Your real name"  onChange={(e) => set_playerName(e.target.value)}/>
                        
                    </Engraving>
                    
                    <Engraving>
                        Character:
                        <EngravingInput type= "text" placeholder="Your characters name" inputWidth="155px" onChange={(e) => set_characterName(e.target.value)}/>
                    </Engraving>
                    
                    <Engraving>
                        Race:
                        <EngravingInput type= "text" placeholder="Halfing, Tiefling etc?" inputWidth="210px" onChange={(e) => set_characterRace(e.target.value)}/>
                    </Engraving>
                </InnerWrap>
                
                <InnerWrap flexRow inputColor="rgba(200, 200, 100 ,0.2)" inputBorder="inset 3px black">
                    <Engraving>
                        Background:
                        <EngravingInput type= "text" placeholder="Acolyte etc?" inputWidth="136px" onChange={(e) => set_characterBackground(e.target.value)}/>
                    </Engraving>
                    

                    <Engraving>
                        Alignment:
                        <EngravingInput type= "text" placeholder="LG, TN, CE?" inputWidth="152px" onChange={(e) => set_characterAlignment(e.target.value)}/>
                    </Engraving>
                    

                    <Engraving>
                        Experience:
                        <EngravingInput type= "text" placeholder="0" inputWidth="155px" onChange={(e) => set_characterExperience(e.target.value)}/>
                    </Engraving>
                </InnerWrap>
                <Spacer/>
                <Header2>Character Attributes</Header2>
                <Spacer inputBottomMargin="10px"/>
                <InnerWrap flexRow>
                    [I contain character attributes]
                    [I contain essential info]
                </InnerWrap>

                </InnerWrap>
                
    
                
                <InnerWrap flexRow>
                    [I contain the skills table]

                </InnerWrap>

            </MainWrap>
        
    )

};

export default Character_Sheet;