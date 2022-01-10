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
    AttributeFrame,
    AttributeInput,
} from "../../styles.js"
// =====================COMPONENT=====================
const Character_Sheet = () => {
    
    //useStates for system/game basics
    const [gameName, set_gameName] = useState("DnD");
    const [systemName, set_systemName] = useState("5e");
        
    //useStates for character basics
    const [playerName, set_playerName] = useState("");
    const [characterName, set_characterName] = useState("");
    const [characterRace, set_characterRace] = useState("");
    const [characterBackground, set_characterBackground] = useState("");
    const [characterAlignment, set_characterAlignment] = useState("");
    const [characterExperience, set_characterExperience] = useState(0);

    //useStates for attributes and bonuses
    const [charAttributes, set_CharAttributes] = useState(
        {
          charSTR: 0,
          charSTRmod: 0, 
          charDEX: 0,
          charDEXmod: 0, 
          charCON: 0,
          charCONmod: 0, 
          charINT: 0,
          charINTmod: 0,
          charWIS: 0,
          charWISmod: 0, 
          charCHA: 0,
          charCHAmod: 0
        });
    
    //function to handle changes to the 'systemState' useStates
    //as it uses multiple states
    const handle_attr_Change = (t) => {
        let value = t.value;

        console.log("\nPRE UPDATE → charAttributes contains: ", charAttributes)

        set_CharAttributes(
            {
                ...charAttributes,
                [t.name]: value,
                [t.name+"mod"]: Math.floor(((value)-10)/2)
            }

        );
        console.log("POST UPDATE → charAttributes contains: ", charAttributes,"\n");
    }

    //function to calculate an attributes bonus
    const calcBonus = (input) => {
        try{
            let result = (input - 10)/2;
            console.log("Calc bonus was called.(", input, "-10 ) / 2 =", result);
            return result;
        }
        catch(error)
        {
            console.log("\nAn error was thrown by calcBonus:",error)
        }
        
    }    

return(
        
            <MainWrap>
                
                <InnerWrap>
                    <Header2>{ systemName } [{ gameName }] Character Sheet</Header2>
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
    <tr><td colSpan = "2"><Header3>From "Character Basics"</Header3></td></tr>
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
                        <EngravingInput 
                            type="text" 
                            placeholder="Your real name"
                            inputWidth="135px"
                            onChange={(e) => set_playerName(e.target.value)}/>
                    </Engraving>
                    
                    <Engraving>
                        Character:
                        <EngravingInput 
                            type="text" 
                            placeholder="Your characters name" 
                            inputWidth="155px" 
                            onChange={(e) => set_characterName(e.target.value)}/>
                    </Engraving>
                    
                    <Engraving>
                        Race:
                        <EngravingInput 
                            type= "text" 
                            placeholder="Halfing, Tiefling etc?" 
                            inputWidth="210px" 
                            onChange={(e) => set_characterRace(e.target.value)}/>
                    </Engraving>
                </InnerWrap>
                
                <InnerWrap flexRow inputColor="rgba(200, 200, 100 ,0.2)" inputBorder="inset 3px black">
                    <Engraving>
                        Background:
                        <EngravingInput 
                        type= "text" 
                        placeholder="Acolyte etc?" 
                        inputWidth="136px" 
                        onChange={(e) => set_characterBackground(e.target.value)}/>
                    </Engraving>

                    <Engraving>
                        Alignment:
                        <EngravingInput 
                            type= "text" 
                            placeholder="LG, TN, CE?" 
                            inputWidth="152px" 
                            onChange={(e) => set_characterAlignment(e.target.value)}/>
                    </Engraving>
                    
                    <Engraving>
                        Experience:
                        <EngravingInput 
                            type= "text" 
                            placeholder="0" 
                            inputWidth="155px" 
                            onChange={(e) => set_characterExperience(e.target.value)}/>
                    </Engraving>
                </InnerWrap>

                <Spacer/>
                
                <Header2>Character Attributes</Header2>

                <Spacer inputBottomMargin="10px"/>
{/* STRENGTH ATTRIBUTE */}                
                <InnerWrap flexRow>
                    <AttributeFrame inputWidth="auto" inputHeight="auto">
                        <AttributeInput 
                            type= "text" 
                            name="charSTR" 
                            value={charAttributes.charSTR} 
                            onChange={(e) => handle_attr_Change(e.target)}/>
                        <Spacer />
                        <>{charAttributes.charSTRmod}</>
                        <Spacer inputFlexBasis="20px" />
                        <>STR</>
                    </AttributeFrame>
{/* DEXTERITY ATTRIBUTE */}
                    <AttributeFrame inputWidth="auto" inputHeight="auto">
                        <AttributeInput 
                            type= "text" 
                            name="charDEX" 
                            value={charAttributes.charDEX} 
                            onChange={(e) => handle_attr_Change(e.target)}/>
                        <Spacer />
                        <>{charAttributes.charDEXmod}</>
                        <Spacer inputFlexBasis="20px" />
                        <>DEX</>
                    </AttributeFrame>
{/* CONSTITUTION ATTRIBUTE */}
                    <AttributeFrame inputWidth="auto" inputHeight="auto">
                        <AttributeInput 
                            type= "text" 
                            name="charCON" 
                            value={charAttributes.charCON} 
                            onChange={(e) => handle_attr_Change(e.target)}/>
                        <Spacer />
                        <>{charAttributes.charCONmod}</>
                        <Spacer inputFlexBasis="20px" />
                        <>CON</>
                    </AttributeFrame>
{/* INTELLIGENCE ATTRIBUTE */}
                    <AttributeFrame inputWidth="auto" inputHeight="auto">
                        <AttributeInput 
                            type= "text" 
                            name="charINT" 
                            value={charAttributes.charINT} 
                            onChange={(e) => handle_attr_Change(e.target)}/>
                        <Spacer />
                        <>{charAttributes.charINTmod}</>
                        <Spacer inputFlexBasis="20px" />
                        <>INT</>
                    </AttributeFrame>
{/* WISDOM ATTRIBUTE */}
                <AttributeFrame inputWidth="auto" inputHeight="auto">
                        <AttributeInput 
                            type= "text" 
                            name="charWIS" 
                            value={charAttributes.charWIS} 
                            onChange={(e) => handle_attr_Change(e.target)}/>
                        <Spacer />
                        <>{charAttributes.charWISmod}</>
                        <Spacer inputFlexBasis="20px" />
                        <>WIS</>
                    </AttributeFrame>

{/* CHARISMA ATTRIBUTE */}
                <AttributeFrame inputWidth="auto" inputHeight="auto">
                        <AttributeInput 
                            type= "text" 
                            name="charCHA" 
                            value={charAttributes.charCHA} 
                            onChange={(e) => handle_attr_Change(e.target)}/>
                        <Spacer />
                        <>{charAttributes.charCHAmod}</>
                        <Spacer inputFlexBasis="20px" />
                        <>CHA</>
                    </AttributeFrame>
                </InnerWrap>

                [I contain essential info]
                
                </InnerWrap>
                
    
                
                <InnerWrap flexRow>
                    [I contain the skills table]

                </InnerWrap>

            </MainWrap>
        
    )

};

export default Character_Sheet;