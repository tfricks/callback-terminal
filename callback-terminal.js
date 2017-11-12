/**
 * @author Tyler Fricks
 * @version 1.0
 * @file callback-terminal.js
 * @license MIT 
 * @copyright Tyler Fricks 2017
 * 
 * The CallbackTerminal is a basic/lightweight terminal emulator. It will take developer defined commands
 * and execute the provided callbacks.
 */
class CallbackTerminal {

  /**
   * 
   * @param {*} cbObject A Javascript object containing names of commands and callback functions. 
   * @param {*} options  A Javascript object containing styles and other configuration options.
   * @param {*} id       A unique div ID.
   */
  constructor(cbObject, options, id) {
    this.callbacks = cbObject;
    this.id = id;
    // TODO: Stylize with options input. (Also figure out how to have default opts.)
  }

  /**
   * @return HTML of terminal to be placed where desired.
   */
  html() {
    // TODO: return 
    return "";
  }

  /**
   * A private method to process command events.
   */
  _processCmd() {
    // Process command from the callbacks. If command dosen't exist inform the user. (should make option for error msg.)
  }

  /**
   * Only called once. Will begin taking input from user.
   */
  _prompt() {
    // Start getting input from ye old user. Set up keyboard listeners (Maybe use the one I made earlier this week?).
  }




}

export default CallbackTerminal;