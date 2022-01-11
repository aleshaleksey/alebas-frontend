//=========================IMPORTS=========================
import styled, { css } from "styled-components";
import Saloth from './Images/PortraitsMale/saloth.png';
//=========================GLOBAL WRAPPERS=========================
//Css meant to organise elements in entire app page
export const AppWrapper = styled.div`
    display: flex;
    flex=direction: row;
`;

//Meant to makes sure Sidebar and other elements wrap together underneath the top navbar
export const PairWrapper =styled.div`
    display: flex;
    flex-direction: row;
  `

//=========================GENERIC WRAPPERS=========================
  //MainWrap is meant to wrap other items as a panel
export const MainWrap = styled.div`
    background: grey;
    border: solid 2px rgba(150,90,85,0.7);
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: white;

    height: 10%;
    padding: 10px;
    margin: 50px;

    width:  90%;

    text-align: center
`;

// InnerWrap is a wrapper to contain individual elements in a component
export const InnerWrap = styled.div`

    background:  ${props => props.inputColor || "linear-gradient(to bottom, rgba(145,85,77,0.7), rgba(185, 156, 107, 0.5))"};
    border:  ${props => props.inputBorder || "solid 2px rgba(150,90,85,0.7)"};
    border-radius: 8px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    color: white;

    height: 10%;
    padding: 10px;
    margin: 5px;
    margin-bottom: 20px;

    width: auto;

    text-align: center

// Additional rules for if an 'Innerwrap' section that has the keyword 'flexRow' in its declaration
    ${props => props.flexRow && css`
        display: flex;
        flex-direction: row;
    `}

// Additional rules for if an 'Innerwrap' section that has the keyword 'flexColumn' in its declaration
    ${props => props.flexColumn && css`
        display: flex;
        flex-direction: column;
    `}

// Additional rules for if an 'Innerwrap' section that has the keyword 'flexColumnAlignment' in its declaration
    ${props => props.flexRowAlignment && css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    `}

// Additional rules for if an 'Innerwrap' section that has the keyword 'invisflexRow' in its declaration
//Normally used inside a wrapper that already has a background. This has no background    
${props => props.invisflexRow && css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        background: none;
        border: none;
    `}

// Additional rules for if an 'Innerwrap' section that has the keyword 'portraitDiv' in its declaration
//This is used to 
${props => props.portraitDiv && css`
        background: none;
        border: none;
        margin: 0px;
        padding: 0px;
        height: 100vh;
        
    `}
`;

//=========================NAVBARS=========================
//CSS For a navbar that sits on TOP of a page
export const TopNavBarStyle = styled.div`
    background: red;
    color: white;
    height: 10%;
    padding: 10px;
    text-align: center;
`;

//CSS For a navbar that sits on LEFT side of a page
export const SideNavBarStyle = styled.div`
    background: green;
    color: white;
    height: 100vh;
    width: 200px;
    padding: 10px;
    text-align: center;
`;

//=========================BUTTONS=========================
export const ButtonStyle = styled.button`
background-color: blue;
color: white;
padding: 5px;
margin: 5px;

// Style override for a Randomiser Button
${props => props.OptionButton && css`
  background-color: gray;
  color: white;

  width: auto;
  height: 25px;
  border: outset 1px;
  border-radius: 5px;
  
  font-weight: bolder;
  font-size: 18px;
  font-family: Courier;
`}
`;

//========================='STYLISTIC' TAGS=========================
//Or tags meant for decorative purposes (like an 'engraving')
export const Engraving = styled.div`
    background-color: rgba(20, 20, 20, 0.2);
    color: black;
    border: rgba(10,10,10, 0.5);
    border-top-style: solid;
    border-right-style: none;
    border-bottom-style: solid;
    border-left-style: none;
    border-radius: 15px 15px 15px 15px;

    text-shadow: 0px 1px 0px rgba(255, 255, 255, .5);
    
    font-weight: bolder;
    font-size: 20px;
    font-variant: small-caps;
    padding: 10px;
    margin: 5px;
    width: 290px;

    text-align: center;
`;

//Element to contain attributes (two numbers, stacked in a column)
export const AttributeFrame = styled.div`
display: flex;
flex-direction: column;
align-items: ${props => props.inputAlignItems || "center"};
justify-content: ${props => props.inputJustifyContent || "space-apart"};
width: ${props => props.inputWidth || "100px"};
height: ${props => props.inputHeight || "100px"};
margin-left: 5px;
margin-right: 5px;
background: rgba(200,200,200,0.4);
border: solid 2px brown;
border-radius: ${props => props.inputRadius || "10px"};
`;

//Element to contain useful info. Circular display, one display element
export const InfoFrame = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: ${props => props.inputWidth || "50px"};
height: ${props => props.inputHeight || "50px"};
padding: 5px;
margin: 5px 5px 5px 5px;

background: rgba(10,10,190,1);
border: solid 2px brown;
border-radius: ${props => props.inputRadius || "100%"};
`;


//Element to contain a portrait picture
export const PortraitFrame = styled.div`
width: 170px;
height: 180px;
background: url(${Saloth});
background-repeat: no-repeat;
background-position: center;
background-size: cover;

border: solid black;
padding: 5px;
margin: 10px;
`;

//empty div meant to space elements horizontal rule
export const Spacer = styled.div`
    height: 0px;
    flex-basis: ${props => props.inputFlexBasis || "95%"};
    border: solid 2px rgba(10,10,10,0.2);
    border-radius: 5px;
    margin-bottom: ${props => props.inputBottomMargin || "0px"};
    margin-top: ${props => props.inputTopMargin || "0px"};
`;

//empty div meant to space elements with a vertical rule
export const Splitter = styled.div`
    //declare a tag with "inputHeight" to set a custom height for the rule
    height: ${props => props.inputHeight || "300px"};
    
    border: solid 2px rgba(10,10,10,0.2);
    border-radius: 5px;
    margin-left: ${props => props.inputLeftMargin || "0px"};
    margin-right: ${props => props.inputRightMargin || "0px"};
`;


//rules for input boxes (make em bigger and have a left margin)
export const EngravingInput = styled.input`
width: ${props => props.inputWidth || "30px"};
height: ${props => props.inputHeight || "30px"};

margin: ${props => props.inputMargin || "0px 0px 0px 10px"};
padding: ${props => props.inputpadding || "0px"};

text-align: center;
font-family: calibri;
font-size: 17px;

background-color: ${props => props.inputBackground || "rgba(100,60,60,0.5)"};
color: white;

box-shadow: 1px 1px 5px rgba(220,220,220, 0.5);
border-radius: ${props => props.inputBorderRadius || "0px 12px 12px 0px"};

::placeholder,
::-webkit-input-placeholder {
  color: rgba(255,255,255,0.6);
}
:-ms-input-placeholder {
   color: rgba(255,255,255,0.6);
}
`;

//rules for a standard display (contains text that cant be directly edited)
export const EngravingDisplay = styled.p`
display: flex;
align-items: center;
justify-content: center;  

width: ${props => props.inputWidth || "30px"};
height: ${props => props.inputHeight || "30px"};

margin: ${props => props.inputMargin || "0px"};
padding: ${props => props.inputPadding || "0px"};

text-align: center;
font-family: calibri;
font-size: 17px;

background-color: ${props => props.inputBackground || "rgba(100,60,60,0.4)"};
color: white;

border-radius: ${props => props.inputBorderRadius || "0px"};

&:hover {
    background: rgba(120,80,80,0.8);
}
`;

//rules for input boxes (make em bigger and have a left margin)
export const AttributeInput = styled.input`
width: 20px;
height: auto;

margin: 5px;
padding: 8px;

text-align: center;
font-family: calibri;
font-size: 17px;

background-color: rgba(100,60,60,0.5);
color: white;

box-shadow: 1px 1px 5px rgba(220,220,220, 0.5);
border-radius: 10px;
`;
//=========================TABLE TAGS=========================
export const Table = styled.table`
    border: 2px groove black;
`;

export const TD = styled.td`
    border: 1px solid black;
`;

export const TR = styled.tr`
    border: 1px solid black;
`;

//=========================HEADING TAGS=========================
//CSS for a H1 tag (title)
export const Header1 = styled.h1`
    Webkit-Text-Stroke: 1px rgba(160,90,70,0.5);
    color: #rgb(203, 186, 151);
    text-shadow: rgb(50, 50, 50) 4px 3px 1px;
    font-size: 4.3rem;
    font-family: Cambria;
    margin: 0.75rem;
    font-weight: 600;
`;

//this is a h2 style
export const Header2 = styled.h2`
    color: white;
    text-shadow: rgb(50, 50, 50) 2px 2px 1px;

    font-size: 2.3rem;
    font-family: Cambria;
    font-variant: small-caps;

    margin: 5px;
`;

//this is a h3 style
export const Header3 = styled.h3`
    color: white;
    text-shadow: rgb(50, 50, 50) 1px 1px 1px;

    font-size: 1.5rem;
    font-family: Cambria;

    margin: 5px;
`;

//this is a h4 style
export const Header4 = styled.h4`
    color: white;
    text-shadow: rgb(50, 50, 50) 1px 1px 1px;

    font-family: Cambria;
    font-variant: small-caps;

    margin: 5px;
`;
//=========================OTHER THINGS=========================