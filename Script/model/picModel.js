const picModel = {
    pictures : null ,
    currentPicture: null,

    init: function(pictures){
        this.pictures = pictures;
        this.currentPicture = this.pictures[0]; 
    }
}

export default picModel