import { Promise} from "../AccesALaBase.js";
import queries from "../../Requêtes/Select/PrendRequetes.js";
import { generateDisplay } from "../../Generer/GenererDisplay.js";

let getAnswer;
 
/**BASIC */
const basicc2 = (req, res) => {
    Promise(generateDisplay(queries.basic2Q), res);
}

const basicc3 = (req, res) => {
    Promise(generateDisplay(queries.basic3Q), res);
}

const basicc4 = (req, res) => {
    Promise(generateDisplay(queries.basic4Q), res);
}

const basicc6 = (req, res) => {
    Promise(generateDisplay(queries.basic6Q), res);
}

const basicc7 = (req, res) => {
    Promise(generateDisplay(queries.basic7Q), res);
}

const basicc8 = (req, res) => {
    Promise(generateDisplay(queries.basic8Q), res);
}

const basicc10 = (req, res) => {
    Promise(generateDisplay(queries.basic10Q), res);
}

const basicc18 = (req, res) => {
    Promise(generateDisplay(queries.basic18Q), res);
}



/**hard*/
const hardd3 = (req, res) => {
    Promise(generateDisplay(queries.hard3Q), res);
}

const hardd8 = (req, res) => {
    Promise(generateDisplay(queries.hard8Q), res);
}

const hardd10 = (req, res) => {
    Promise(generateDisplay(queries.hard10Q), res);
}

const hardd11 = (req, res) => {
    Promise(generateDisplay(queries.hard11Q), res);
}

/**medium */
const mediumm2 = (req, res) => {
    Promise(generateDisplay(queries.medium2Q), res);
}

const mediumm3 = (req, res) => {
    Promise(generateDisplay(queries.medium3Q), res);
}

const mediumm4 = (req, res) => {
    Promise(generateDisplay(queries.medium4Q), res);
}

const mediumm6 = (req, res) => {
    Promise(generateDisplay(queries.medium6Q), res);
}

const mediumm7 = (req, res) => {
    Promise(generateDisplay(queries.medium7Q), res);
}

const mediumm8 = (req, res) => {
    Promise(generateDisplay(queries.medium8Q), res);
}

const mediumm9 = (req, res) => {
    Promise(generateDisplay(queries.medium9Q), res);
}

const mediumm12 = (req, res) => {
    Promise(generateDisplay(queries.medium12Q), res);
}

export default getAnswer = {
    /**hard */
   hardd10,
   hardd11,
   hardd3,
   hardd8,

   /**basic */
   basicc10,
   basicc2,
   basicc3,
   basicc4,
   basicc6,
   basicc7,
   basicc8,
   basicc18,

   /**medium */
   mediumm12,
   mediumm2,
   mediumm3,
   mediumm4,
   mediumm6,
   mediumm7,
   mediumm8,
   mediumm9,
  }