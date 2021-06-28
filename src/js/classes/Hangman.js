export default class Hangman {
    constructor() {
        this.bodyContainer = document.getElementById('body-container');
        this.head = null;
        this.leftEye = null;
        this.rightEye = null;
        this.torso = null;
        this.leftArm = null;
        this.rightArm = null;
        this.leftLeg = null;
        this.rightLeg = null;

        this.init();
    }

    init() {
        let body = this.bodyContainer;
        
        if (body) {
            this.head = body.querySelector('.head');
            this.leftEye = body.querySelector('.eye.left');
            this.rightEye = body.querySelector('.eye.right');
            this.torso = body.querySelector('.torso');
            this.leftArm = body.querySelector('.arm.left');
            this.rightArm = body.querySelector('.arm.right');
            this.leftLeg = body.querySelector('.leg.left');
            this.rightLeg = body.querySelector('.leg.right');

            this.reset(body)
        }
    }

    reset(body) {
        body.classList.remove("dead");
        let visibleBodyParts = body.querySelectorAll(".show");
        
        for(let i = 0; i < visibleBodyParts.length; i++) {
          visibleBodyParts[i].classList.toggle("show");
        }
    }

    die() {
        if (this.bodyContainer) {
            this.bodyContainer.classList.toggle('dead');
        }
    }

    showPart(part) {
        if (part) {
            part.classList.toggle('show');
        } else {
            console.log(`part "${part}" does not exist`);
        }
    }

    showParts(num) {
        switch (num) {

        }
    }
}