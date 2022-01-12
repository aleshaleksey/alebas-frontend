// =====================IMPORTS=====================
import React, { useState } from "react";
import {
    MainWrap,
    InnerWrap,
    Header2,
    Header3,
    Header4,
    ButtonStyle,
    Engraving,
    EngravingInput,
    EngravingDisplay,
    Spacer,
    Splitter,
    Table,
    TD,
    TR,
    AttributeFrame,
    AttributeInput,
    InfoFrame,
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

    const [charEssentials, set_CharEssentials] = useState(
        {
            charPlayerName: "",
            charCharacter: "",
            charRace: "",
            charClass: "",
            charLevel: 0,
            charBackground: "",
            charAlignment: "",
            charExperience: 0,
        });

    //useState for attributes and associated bonuses
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
  
//useState for character info. Level, proficiency, hp and etc
    const [charInfo, set_CharInfo] = useState(
        {
            charLevel: 1,
            charProficiency: 0,
            charInitiative: 0,
            charAC: 0,
            charHP: 0,
            charSpeed: 30,
            charPassPerc: 10
        });
    
//function to handle changes to the 'charAttribute' useStates as it uses multiple states
    const handle_attr_Change = (t) => {
        let value = t.value;
        set_CharAttributes(
            {
                ...charAttributes,
                [t.name]: value,
                [t.name+"mod"]: Math.floor(((value)-10)/2)
            }
        );

    //function to handle changes to the 'charAttribute' useStates as it uses multiple states
    const handle_attr_Change = (t) => {
        let value = t.value;
        set_CharAttributes(
            {
                ...charAttributes,
                [t.name]: value,
                [t.name+"mod"]: Math.floor(((value)-10)/2)
            }
        );

    }
//function to handle changes to the 'charInfo' useStates as it uses multiple states
    const handle_info_Change = (i) => {
        let value = i.value;
        console.log("======================================")
        console.log("Entered 'handle_info_Change function!")
        console.log("The value of 'i.value' is: ", value)
        set_CharInfo(
            {
                ...charInfo,
                [i.name+"Level"]: value,
                [i.name+"Proficiency"]: Math.floor(2+((value -1)/4)),
                [i.name+"Initiative"]: (charAttributes.charDEXmod),
                [i.name+"AC"]: (10 + (charAttributes.charDEXmod)),
                [i.name+"HP"]: (10 * (value)),
                [i.name+"PassPerc"]: (10 + (charAttributes.charWISmod)),
            }
        );
        console.log("After update, charInfo contains:",charInfo);
    }

return(
        
    <MainWrap>
        
        <InnerWrap flexRow>
{/* GAME SYSTEM, SYSTEM VERSION */}
            <Header2>{ systemName } [{ gameName }] Character Sheet</Header2>
            <InnerWrap invisflexRow>
                <ButtonStyle OptionButton onClick={() => set_systemName("3.5e")}>3.5e</ButtonStyle>
                <ButtonStyle OptionButton onClick={() => set_systemName("Pathfinder")}>Pathfinder</ButtonStyle>
                <ButtonStyle OptionButton onClick={() => set_systemName("5e")}>5e</ButtonStyle>
            </InnerWrap>
        </InnerWrap>

<InnerWrap flexRow>
{/* TRUTH TABLES */}
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

    <Table>
    <tr><td colSpan = "2"><Header3>From "Character Info"</Header3></td></tr>
    {/* charLevel: 1,
            charProficiency: 0,
            charInitiative: 0,
            charAC: 0,
            charHP: 0,
            charSpeed: 30,
            charPassPerc: 10 */}
      
       <TR>
            <th>useState</th>
            <th>Contains</th>
        </TR>
        <TR>
            <TD>charLevel</TD>
            <TD>{charInfo.charLevel}</TD>
        </TR>
        <TR>
            <TD>charProficiency</TD>
            <TD>{charInfo.charProficiency}</TD>
        </TR>
        <TR>
            <TD>charInitiative</TD>
            <TD>{charInfo.charInitiative}</TD>
        </TR>
        <TR>
            <TD>charAC</TD>
            <TD>{charInfo.charInitiative}</TD>
        </TR>
        <TR>
            <TD>charHP</TD>
            <TD>{charInfo.charHP}</TD>
        </TR>
        <TR>
            <TD>charSpeed</TD>
            <TD>{charInfo.charSpeed}</TD>
        </TR>
        <TR>
            <TD>charPassPerc</TD>
            <TD>{charInfo.charPassPerc}</TD>
        </TR>
        <TR>
            <TD>characterExperience</TD>
            <TD>{characterExperience}</TD>
        </TR>

    </Table>

</InnerWrap>

<InnerWrap flexRow> 
{/* CHARACTER BASICS */}                    
    <Spacer inputTopMargin="10px"/>
    <Header2>Character Basics</Header2>
    <Spacer inputBottomMargin="10px"/>

{/* PLAYER NAME, CHARACTER, RACE, CLASS, LEVEL */}
    <InnerWrap flexRow inputWidth="95%" >
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

        <Engraving>
            Class:
            <EngravingInput 
                type= "text" 
                placeholder="Fighter, Sorcerer etc?" 
                inputWidth="210px" 
                onChange={(e) => set_characterRace(e.target.value)}/>
        </Engraving>
    
{/* BACKGROUND, ALIGNMENT, EXPERIENCE */}                
    
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

    <InnerWrap flexRow inputHeight="150px">
        
    <Header4>Attributes</Header4>

    <Spacer inputBottomMargin="10px"/>                    
{/* STRENGTH ATTRIBUTE */}   
        <AttributeFrame inputWidth="auto" inputHeight="auto">
            <AttributeInput 
                type= "text" 
                name="charSTR" 
                value={charAttributes.charSTR} 
                onChange={(e) => handle_attr_Change(e.target)}/>
            <>{charAttributes.charSTRmod}</>
            <Header4>STR</Header4>
        </AttributeFrame>
{/* DEXTERITY ATTRIBUTE */}
        <AttributeFrame inputWidth="auto" inputHeight="auto">
            <AttributeInput 
                type= "text" 
                name="charDEX" 
                value={charAttributes.charDEX} 
                onChange={(e) => handle_attr_Change(e.target)}/>
            <>{charAttributes.charDEXmod}</>
            <Header4>DEX</Header4>
        </AttributeFrame>
{/* CONSTITUTION ATTRIBUTE */}
        <AttributeFrame inputWidth="auto" inputHeight="auto">
            <AttributeInput 
                type= "text" 
                name="charCON" 
                value={charAttributes.charCON} 
                onChange={(e) => handle_attr_Change(e.target)}/>
            <>{charAttributes.charCONmod}</>
            <Header4>CON</Header4>
        </AttributeFrame>
{/* INTELLIGENCE ATTRIBUTE */}
        <AttributeFrame inputWidth="auto" inputHeight="auto">
            <AttributeInput 
                type= "text" 
                name="charINT" 
                value={charAttributes.charINT} 
                onChange={(e) => handle_attr_Change(e.target)}/>
            <>{charAttributes.charINTmod}</>
            <Header4>INT</Header4>
        </AttributeFrame>
{/* WISDOM ATTRIBUTE */}
    <AttributeFrame inputWidth="auto" inputHeight="auto">
            <AttributeInput 
                type= "text" 
                name="charWIS" 
                value={charAttributes.charWIS} 
                onChange={(e) => handle_attr_Change(e.target)}/>
            <>{charAttributes.charWISmod}</>
            <Header4>WIS</Header4>
        </AttributeFrame>
{/* CHARISMA ATTRIBUTE */}
    <AttributeFrame inputWidth="auto" inputHeight="auto">
            <AttributeInput 
                type= "text" 
                name="charCHA" 
                value={charAttributes.charCHA} 
                onChange={(e) => handle_attr_Change(e.target)}/>
            <>{charAttributes.charCHAmod}</>
            <Header4>CHA</Header4>
        </AttributeFrame>
    </InnerWrap>

    <InnerWrap flexRow inputHeight="150px">
        <Splitter inputHeight = "45px"/>
    <Header4>Level</Header4>
        <Splitter inputHeight = "45px"/>
    <Header4>Proficiency</Header4> 
        <Splitter inputHeight = "45px"/>
    <Header4>Initiative</Header4> 
        <Splitter inputHeight = "45px"/>
    <Header4>AC</Header4> 
        <Splitter inputHeight = "45px"/>
    <Header4>HP</Header4> 
        <Splitter inputHeight = "45px"/>
    <Header4>Passive<br/>Perception</Header4> 
        <Splitter inputHeight = "45px"/>
    <Spacer inputBottomMargin="5px"/>
{/* CHARACTER LEVEL */} 
    <AttributeFrame inputWidth="auto" inputHeight="auto">
        <InfoFrame inputWidth="32px" inputHeight="32px">
            <EngravingInput 
            id="CharacterLevel"
            type= "text"
            name="char"
            value={charInfo.charLevel}
            onChange={(e) => handle_info_Change(e.target)}
            inputWidth="30px" 
            inputHeight="30px" 
            inputBorderRadius="100%" 
            inputMargin="1px" />                            
        </InfoFrame>
        
    </AttributeFrame>
                    
{/* CHARACTER PROFICIENCY */}    
    <AttributeFrame 
                            inputJustifyContent="center" 
                            inputWidth="auto" 
                            inputHeight="auto">
                            <InfoFrame 
                                inputWidth="32px" 
                                inputHeight="32px">
                                <EngravingDisplay
                                    name="char"
                                    inputWidth="30px" 
                                    inputHeight="30px" 
                                    inputBorderRadius="100%" 
                                    >                            
                                    {charInfo.charProficiency}
                                </EngravingDisplay>
                            </InfoFrame>
        </AttributeFrame>
{/* CHARACTER INITIATIVE */}    
    <AttributeFrame 
                            inputJustifyContent="center" 
                            inputWidth="auto" 
                            inputHeight="auto">
                            <InfoFrame 
                                inputWidth="32px" 
                                inputHeight="32px">
                                <EngravingDisplay
                                    name="char"
                                    inputWidth="30px" 
                                    inputHeight="30px" 
                                    inputBorderRadius="100%" 
                                    >                            
                                    {charInfo.charInitiative}
                                </EngravingDisplay>
                            </InfoFrame>
        </AttributeFrame>
{/* CHARACTER AC */}    
    <AttributeFrame 
                            inputJustifyContent="center" 
                            inputWidth="auto" 
                            inputHeight="auto"
                            >
                            <InfoFrame 
                                inputWidth="32px" 
                                inputHeight="32px"
                                inputRadius="20px 20px 100px 100px">
                                <EngravingDisplay
                                    name="char"
                                    inputWidth="30px" 
                                    inputHeight="30px" 
                                    inputBorderRadius="0px 0px 100px 100px" 
                                    
                                    >                            
                                    {charInfo.charAC}
                                </EngravingDisplay>
                            </InfoFrame>
        </AttributeFrame>
{/* CHARACTER HP */}    
    <AttributeFrame 
                            inputJustifyContent="center" 
                            inputWidth="auto" 
                            inputHeight="auto"
                            >
                            <InfoFrame 
                                inputWidth="32px" 
                                inputHeight="32px"
                                inputRadius="20px 20px 100px 100px">
                                <EngravingDisplay
                                    name="char"
                                    inputWidth="30px" 
                                    inputHeight="30px" 
                                    inputRadius="100%"
                                    
                                    >                            
                                    {charInfo.charHP}
                                </EngravingDisplay>
                            </InfoFrame>
        </AttributeFrame>
{/* CHARACTER Passive Perception */}    
    <AttributeFrame 
                            inputJustifyContent="center" 
                            inputWidth="auto" 
                            inputHeight="auto"
                            >
                            <InfoFrame 
                                inputWidth="32px" 
                                inputHeight="32px"
                                inputRadius="100%">
                                <EngravingDisplay
                                    name="char"
                                    inputWidth="30px" 
                                    inputHeight="30px" 
                                    inputBorderRadius="0px 0px 100px 100px" 
                                    >                            
                                    {charInfo.charPassPerc}
                                </EngravingDisplay>
                            </InfoFrame>
        </AttributeFrame>

    </InnerWrap>                
</InnerWrap>
    <InnerWrap flexRow>
        [I contain the skills table]
    </InnerWrap>
</MainWrap>
    )
};

export default Character_Sheet;