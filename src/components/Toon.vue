<template>
    <div class="container">
        <div class="header">
            <p>Lets Get you Toonified😜</p>
            <span>Upload your photo and see what you might look in an Animated Movie</span>
        </div>
        <div>
            <p><input type="file"  accept="image/*" name="image" id="file"  @change="loadFile($event)" style="display: none;"></p>
        <label class="fileInput" for="file">
            <span class="text" id="text">No Files</span>
            <span class="btn" ><span>Upload Image</span> </span>
        </label>
        </div>
        <div class="result">
            <button class="btn" @click="getResult()">
                <span>Toonify Me</span>
            </button>
            <div class="images" v-if="resp">
                <div class="original">
                    <img :src="ogSrc" alt="original">
                </div>
                <div class="tooned">
                    <img :src="toonSrc" alt="toonified">
                </div>
               
            </div>
             <div class="msg" v-if="error || infoMsg">
                <div class="error" v-if="error">
                    <span>{{error}}</span>
                </div>
                <div class="info" v-if="infoMsg">
                    <span>{{infoMsg}}</span>
                </div>
             </div>
        </div>
    </div>

    
</template>

<script>
import deepai from 'deepai';
import Vue from 'vue'; // Import component
import Loading from 'vue-loading-overlay'; // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'; // Init plugin
Vue.use(Loading);


export default {
    data() {
        return {
            resp: '',
            ogSrc: '',
            toonSrc: '',
            error: '',
            faces: '',
            infoMsg: '',
        }
    },
    methods: {
        async loadFile(event) {
            this.error = '';
            this.infoMsg = '';
            this.resp = '';
            var name = document.getElementById('text');
            name.innerText = event.target.files[0].name;
            this.ogSrc = URL.createObjectURL(event.target.files[0]);
            this.resp = '';
        },
        async getResult() {
            let loader = this.$loading.show({
                  // Optional parameters
                    container: null,
                    canCancel: true,
                    onCancel: this.onCancel,
                    color: '#41B883',
                    loader: 'dots',
                    backgroundColor: '#E5E5E5',
                    opacity: 0.8
                });
            try{

                this.resp = await deepai.callStandardApi("toonify", {
                image: document.getElementById('file'),
                });
                
                this.toonSrc = this.resp.output_url;
                if(this.resp){
                    loader.hide();
                    this.faces = await deepai.callStandardApi("facial-recognition", {
                    image: document.getElementById('file'),
                    });
                if(this.faces.output.faces.length > 1){
                    this.infoMsg = 'We can toonify only one face 🙂';
                }
                }
                
            }
            catch(err) {
                loader.hide();
                this.error = 'No face was detected 😟';
            }
            
        }
    }
    
}
</script>

<style scoped>

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 5% 10%;
    }
    

    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .header p {
        font-size: 3rem;
        font-weight:medium;
        padding-bottom: 5px;
        text-align: center;
    }

    .header span {
        font-size: 1.1rem;
        font-weight: lighter;
        padding-bottom: 30px;
        text-align: center;
    }

    .fileInput {
    margin: 0;
    padding: 0;
    margin-left: 5px;
    width: 80vw;
    border: 2px solid #41b883;
    border-right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
    border-radius: 5px;
    }

    .fileInput label {
    cursor: pointer;
    }

    .text{
    color: grey;
    margin-left: 4px;
    }

    .button {
    text-decoration: none;
    color: black;
    background-color: #41b883;
    border-radius: 5px;
    margin: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 135px;

    }

    .btn{ 
        background-color: #41b883;
        color: white;
        position: relative;
        padding: 10px;
        display: block;
        /* margin: 30px auto; */
        padding: 0;

        overflow: hidden;

        border-width: 0;
        outline: none;
        border-radius: 2px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .6);

    }

    .btn:hover, .btn:focus {
        background-color: #27ae60;
}

    .btn span {
        display: block;
        padding: 12px 24px;
    }

    .btn:before {
        content: "";
        
        position: absolute;
        top: 50%;
        left: 50%;
        
        display: block;
        width: 0;
        padding-top: 0;
            
        border-radius: 100%;
        
        background-color: rgba(236, 240, 241, .3);
        
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        }

    .btn:active:before {
        width: 120%;
        padding-top: 120%;
        
        transition: width .2s ease-out, padding-top .2s ease-out;
    }
    img{
        max-width: 100%;
        max-height: 100%;
        display: block; /* remove extra space below image */
    }
    .result {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        margin-top: 2%;
        padding:5%;
    }
    .images{
        margin: 5%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
    .original, .tooned{
        width: 45vw;
        margin: 2%;
    }

    .msg{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .error, .info{
        background-color: #e95b5b;
        color: white;
        font-weight: medium;
        width: 90vw;
        height: 10vh;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .info{
        background-color: #5bbce9;
        color: black;
    }
</style>