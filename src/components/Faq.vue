<template>
    <div class="container">
        <p class="header">Frequently Asked Questions</p>
        <ul>
            <li>
                <span class="list-head">How does it work?</span>
                <p class="list-item">
                    This toonification system is made using deep learning. 
                    It's based on distillation of a blended StyleGAN models into a pix2pixHD image to image translation network.
                </p>
            </li>
            <li>
                <span class="list-head">
                    How do I get good results?
                </span>
                <p class="list-item">
                    Try upload high resolution images to get better results. 
                    Something like a professional head shot works best. 
                </p>
            </li>
            <li>
                <span class="list-head">
                    Are you storing my photos?
                </span>
                <p class="list-item">
                    No we are not storing any of the images that you upload. 
                    We directly send them to <a href="https://deepai.org" target="_blank">Deep AI</a>
                    and then show you the results. 
                </p>
            </li>
            <li>
                <span class="list-head">
                    My face was not detected?
                </span>
                <p class="list-item">
                    We are using open source <a href="https://deepai.org/machine-learning-model/facial-recognition" target="_blank">Deep AI Face detection</a>
                    Its built to detect front facing faces but it ain't perfect. Try uploading a more clear picture with good lighting. 
                </p>
            </li>
            <li>
                <span class="list-head">
                    Who created this API and can I use it?
                </span>
                <p class="list-item">
                    This Toonificaton API was created by <a href="https://twitter.com/Buntworthy" target="_blank">Justin Pinkney</a>.
                    You can read about how this idea was born on his <a href="https://www.justinpinkney.com/making-toonify/" target="_blank">Blog Post</a>. 
                    <br>
                    Yes anyone can use this API. To get your api key head over to <a href="https://deepai.org" target="_blank">deepai.org</a>
                </p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .container{
        margin: 5% 5%;
    }
    a{
        text-decoration: none;
        color: #1C69B2;
    }

    .header{
        font-size: 2rem;
        font-weight: medium;
    }
    ul{
        margin: 0% 5%;
    }
    li {
        margin: 5% 0;
    }
    .list-head{
        font-size: 1.5rem;
        font-weight: medium;
    }
    .list-item{
        margin-top: 2%;
        text-align: justify;
    }
</style>