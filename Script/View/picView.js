import picController from '../Controller/picController.js';
import recordModel from '../model/recordModel.js';

const picView = {
    renderGalleryPicture: function() {
        const currentPicture = picController.getCurrentPicture();
        const totalPictures = picController.getNumberOfPictures();
        const galleryPicture = document.querySelector('.main__left');
        galleryPicture.innerHTML = `<img class="pic__gallery"
        src=${currentPicture.pic__url}
        alt="Loading...">`

        if(currentPicture.id === totalPictures){
            galleryPicture.innerHTML += `<div class="button__reply">
            <h2>final score: </h2>
            <p> ${recordModel.score}  </p>
            <h2> / ${totalPictures-1} </h2>
            </div>`
        }
        else{
            galleryPicture.innerHTML += `<h3> ${currentPicture.question} </h3>
            <div class="button__reply">
                <button id="replyYes" class="reply--yes"> yes </button>
                <button id="replyNo"  class="reply--no"> no </button>
            </div>`
        }
    },
    getThumbnail: function(data) {
        const thumbnailPicture = document.createElement('div');
        thumbnailPicture.classList.add('thumb__data');
        thumbnailPicture.innerHTML = `<img class="pic__thumb"
        src=${data.pic__url}
        alt="image +${data.id}">
        <h5>${data.question}</h5>`;
        return thumbnailPicture;
    },
    renderThumbnailPicture: function() {
        const currentPicture = picController.getCurrentPicture();
        const totalPictures = picController.getNumberOfPictures();
        const allPictures = picController.getAllPictures();
        const thumbnailPictures = document.querySelector('.main__right');
        while(thumbnailPictures.firstChild){
            thumbnailPictures.removeChild(thumbnailPictures.firstChild)
        };
        if(currentPicture.id + 1 <= totalPictures ){
            for(let i = currentPicture.id ; i<totalPictures ; i++ ){
                thumbnailPictures.appendChild(this.getThumbnail(allPictures[i]));
            }
        }
    },
    renderPictureDisplay: function() {
        this.renderGalleryPicture();
        this.renderThumbnailPicture();
    }
}

export default picView;
