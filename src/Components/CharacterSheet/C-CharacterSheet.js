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

    <table>
    <tr><td colspan = "2"><Header3>From "Character Basics"</Header3></td></tr>
        <tr>
            <th>useState</th>
            <th>Contains</th>
        </tr>
        <tr>
            <td>Game Name</td>
            <td>{gameName}</td>
        </tr>
        <tr>
            <td>System Name</td>
            <td>{systemName}</td>
        </tr>
        <tr>
            <td>Player Name</td>
            <td>{playerName}</td>
        </tr>
        <tr>
            <td>Character Name</td>
            <td>{characterName}</td>
        </tr>
        <tr>
            <td>Character Race</td>
            <td>{characterRace}</td>
        </tr>
        <tr>
            <td>Character Background</td>
            <td>{characterBackground}</td>
        </tr>
        <tr>
            <td>Character Alignment</td>
            <td>{characterAlignment}</td>
        </tr>
        <tr>
            <td>Character Experience</td>
            <td>{characterExperience}</td>
        </tr>

    </table>
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