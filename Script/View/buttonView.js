import picController from '../Controller/picController.js';
import recordModel from '../model/recordModel.js';
import {ids} from '../registry.js';

const buttonView = {
    init: function(){
        const currentPicture = picController.getCurrentPicture();
        const totalPictures = picController.getNumberOfPictures();
        if( currentPicture.id !== totalPictures ){
            this.handleYesButton();
            this.handleNoButton();
        }
    },
    handleYesButton(){
        const yesButton = document.getElementById(ids.YES);
        const answer = picController.getCurrentPicture().answer;
        yesButton.addEventListener('click', function(){
            if(answer === true){
                recordModel.score += 1
            }
            picController.handleNextPicture();
        } )
    },
    handleNoButton(){
        const noButton = document.getElementById(ids.NO);
        const answer = picController.getCurrentPicture().answer;
        noButton.addEventListener('click', function(){
            if(answer === false){
                recordModel.score += 1
            }
            picController.handleNextPicture();
        } )
    },
    
}

export default buttonView
