function css3RadialProgressBar() {
    /* Vars */
    var xvaluenow = Math.floor((Math.random() * 100) + 0); //Generates a random number (0-100) only for demonstration
    //var xvaluenow = 0; //Insert here a specific number (0-100) and remove the comment this var, and the above code
    var rotatenum = 'rotate(' + xvaluenow * 1.8 + 'deg)';
    var progress = document.getElementById('progress');
    var progress_circle = document.getElementById('progress-circle');
    var progress_style = document.getElementById('progress-style');

    /* Fix: Cover gap with shadow */
    if (xvaluenow == 0) {
        var shadowfix = "0";
    }
    else {
        var shadowfix = "1px";
    }

    /* Inserting values */
    progress.innerHTML = xvaluenow + '%';
    progress_circle.setAttribute("aria-valuenow", xvaluenow);
    progress_style.innerHTML = " \
.p-h:before, .p-f, .p-f:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}

document.body.onload = function () {
    css3RadialProgressBar()
};


//    11111111111  //////////////


function css3RadialProgressBar1() {
    /* Vars */
    var xvaluenow = Math.floor((Math.random() * 100) + 0); //Generates a random number (0-100) only for demonstration
    //var xvaluenow = 0; //Insert here a specific number (0-100) and remove the comment this var, and the above code
    var rotatenum = 'rotate(' + xvaluenow * 1.8 + 'deg)';
    var progress = document.getElementById('progress1');
    var progress_circle = document.getElementById('progress-circle1');
    var progress_style = document.getElementById('progress-style1');

    /* Fix: Cover gap with shadow */
    if (xvaluenow == 0) {
        var shadowfix = "0";
    }
    else {
        var shadowfix = "1px";
    }

//     /* Inserting values */
    progress.innerHTML = xvaluenow + '%';
    progress_circle.setAttribute("aria-valuenow", xvaluenow);
    progress_style.innerHTML = " \
.p-h1:before, .p-f1, .p-f1:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}

document.body.onload = function () {
    css3RadialProgressBar1()
};


document.body.onload = function () {
    css3RadialProgressBar1()
};

//   2222222222222  //

function css3RadialProgressBar2() {
    /* Vars */
    var xvaluenow = Math.floor((Math.random() * 100) + 0); //Generates a random number (0-100) only for demonstration
    //var xvaluenow = 0; //Insert here a specific number (0-100) and remove the comment this var, and the above code
    var rotatenum = 'rotate(' + xvaluenow * 1.8 + 'deg)';
    var progress = document.getElementById('progress2');
    var progress_circle = document.getElementById('progress-circle2');
    var progress_style = document.getElementById('progress-style2');

    /* Fix: Cover gap with shadow */
    if (xvaluenow == 0) {
        var shadowfix = "0";
    }
    else {
        var shadowfix = "1px";
    }

    /* Inserting values */
    progress.innerHTML = xvaluenow + '%';
    progress_circle.setAttribute("aria-valuenow", xvaluenow);
    progress_style.innerHTML = " \
.p-h2:before, .p-f2, .p-f2:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}

document.body.onload = function () {
    css3RadialProgressBar2()
};

//   333333333333333  //

function css3RadialProgressBar3() {
    /* Vars */
    var xvaluenow = Math.floor((Math.random() * 100) + 0); //Generates a random number (0-100) only for demonstration
    //var xvaluenow = 0; //Insert here a specific number (0-100) and remove the comment this var, and the above code
    var rotatenum = 'rotate(' + xvaluenow * 1.8 + 'deg)';
    var progress = document.getElementById('progress3');
    var progress_circle = document.getElementById('progress-circle3');
    var progress_style = document.getElementById('progress-style3');

    /* Fix: Cover gap with shadow */
    if (xvaluenow == 0) {
        var shadowfix = "0";
    }
    else {
        var shadowfix = "1px";
    }

    /* Inserting values */
    progress.innerHTML = xvaluenow + '%';
    progress_circle.setAttribute("aria-valuenow", xvaluenow);
    progress_style.innerHTML = " \
.p-h3:before, .p-f3, .p-f3:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}

document.body.onload = function () {
    css3RadialProgressBar3()
};


/*    kraj progress */

