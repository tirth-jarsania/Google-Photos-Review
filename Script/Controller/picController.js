import picModel from '../model/picModel.js';
import picView from '../View/picView.js';
import buttonView from '../View/buttonView.js';

const picController = {
    init: function( pictures ){
        picModel.init( pictures );
        picView.renderPictureDisplay();
        buttonView.init();
    },
    getCurrentPicture : function(){
        return picModel.currentPicture;
    },
    setCurrentPicture : function(id){
        picModel.currentPicture = picModel.pictures[id-1];
        picView.renderPictureDisplay();
        buttonView.init();
    },
    getAllPictures : function(){
        return picModel.pictures;
    },
    getNumberOfPictures : function(){
        return picModel.pictures.length;
    },
    handleNextPicture : function(){
        const currentPicture = this.getCurrentPicture();
        if(currentPicture.id < this.getNumberOfPictures()){
            this.setCurrentPicture(currentPicture.id + 1);
        }
    } 
}

export default picController
