//=======================COMPONENT IMPORTS
import TopNavBar from './Components/TopNavBar/C-TopNavBar.js'
import SideNavBar from './Components/SideNavBar/C-SideNavBar.js'
import Character_Sheet from './Components/CharacterSheet/C-CharacterSheet.js';
// import {socket, character} from './wsock/webSocket.js';

//=======================STYLING IMPORTS
import {
  AppWrapper,
  PairWrapper,
} from "./styles";

//=======================MAIN APP
// Socket and character need to be defined in the top most scope
// in order to be reuseable. Perhaps can be imported here from a random module.
export var socket = new WebSocket("ws://127.0.0.1:55555");
export var character;
function App() {
  // This socket needs to have functions to define what it does when:
  // a) it gets a message (eg. Got a character-> set variables).
  // b) when it receives a message (eg. Added a spell -> Need to update db).
  // The functions for `.onopen`, `.onclose`, `.onerror` are optional, but
  // might be useful.

  // NB: These need to be reused when the socket is reopened on close!
  function resp_open (e) {
    console.log("[open] Connection established");
    console.log("Sending to server");
    // This sends a command to open a database. If you have no databases
    // the response will be nonsense, but whatever.
    socket.send("{\"InitialiseFromPath\":\"dnd.db\"}");
  };
  function resp_receive(event) {
    // Here when we get data, we steal it...
    let text = event.data;
    // ..Examine it..
    console.log("\n.....\n"+text+"\n.....\n");
    // ..Convert it to JSON...
    let j = JSON.parse(text);
    // ..If we have the `InitialiseFromPath` variant received, index and see...
    // NB: This will generally throw an error, because usually we do not have an
    // `InitialiseFromPath` request. So don't mind the,
    // "Uncaught TypeError: j.InitialiseFromPath is undefined" errors. ;)
    if(j["InitialiseFromPath"].length > 0) {
      console.log("[uuid] Euridice the 1st:" + j["InitialiseFromPath"][0]["uuid"])
      console.log("[name] Euridice the 1st:" + j["InitialiseFromPath"][0]["name"])
      console.log(`\n------------\n[message] Data received from server: ${event.data}`);
    }
  };
  function resp_error(error) {
    console.log(`[error] ${error.message}`);
  };
  function resp_close(event) {
    // On close try to reopen.. (Currently doesn't work.)
    socket = new WebSocket("ws://127.0.0.1:55555");
    // Recursively reset the functions (This is why we define them like this!).
    socket.onopen = function(e) { resp_open(e) };
    socket.onmessage = function(e) { resp_receive(e) };
    socket.onclose = function(e) { resp_close(e) };
    socket.onerror = function(e) { resp_error(e) };
    if (event.wasClean) {
      console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      console.log('[close] Connection died');
    }
  };

  socket.onopen = function(e) { resp_open(e) };
  socket.onmessage = function(e) { resp_receive(e) };
  socket.onclose = function(e) { resp_close(e) };
  socket.onerror = function(e) { resp_error(e) };
  // Now that this is all defined, please see changes to `C-CharacterSheet.js`
  // Line 79 for 'handle_attr_Change`, to see how this is applied.
  return (
    <>
      <TopNavBar />
      <PairWrapper>
        <SideNavBar />
        <Character_Sheet />
      </PairWrapper>
    </>
  );
}

export default App;
