var i = 0,
    images = [
        "https://i.ibb.co/PctmHgp/image.png",
        "https://i.ibb.co/1sDSVMH/1.png",
        "https://i.ibb.co/Xj4C1jg/2.png",
        "https://i.ibb.co/Rbww6X3/3.png",
        "https://i.ibb.co/sVFrsYf/4.png",
        "https://i.ibb.co/6vsDrsj/5.png",
        "https://i.ibb.co/8bmQcmw/6.png",
        "https://i.ibb.co/74L0mK3/7.png",
        "https://i.ibb.co/GM9PZWp/8.png",
        "https://i.ibb.co/SxdHxt2/9.png",
        "https://i.ibb.co/KhqgWPM/10.png",
        "https://i.ibb.co/x2jFQs4/11.png",
        "https://i.ibb.co/Yfg17Db/12.png",
        "https://i.ibb.co/XpSvb8d/13.png",
        "https://i.ibb.co/6wBZ3pN/14.png",
        "https://i.ibb.co/L0mCwG6/15.png",
        "https://i.ibb.co/85kf1fQ/16.png",
        "https://i.ibb.co/7QRMCrr/17.png",
        "https://i.ibb.co/jMkq6F0/18.png",
        "https://i.ibb.co/n1M4KRG/20.png"
    ];

function mySlide(param) {
    if (param === "next") {
        i++;
        if (i === images.length) {
            i = images.length - 1;
        }
    } else {
        i--;
        if (i < 0) {
            i = 0;
        }
    }

    document.getElementById("slide").src = images[i];
}
