<template>
    <div class="container">
        <p class="header">Examples</p>
        <br>
        <div class="grid">
            <div class="image">
                <img src="../assets/Modi.jpg" alt="">
            </div>
            <div class="image">
                <img src="../assets/virat.jpg" alt="">
            </div>
            <div class="image">
                <img src="../assets/deniro_01.jpg" alt="">
            </div>
            <div class="image">
                <img src="../assets/hollywoods-top-10-highest-paid-actresses-in-2018_k8qw_01.jpg" alt="">
            </div>
            <div class="image">
                <img src="../assets/Johnny-Depp-1024x1024_01.jpg" alt="">
            </div>
            <div class="image">
                <img src="../assets/trek_01.jpg" alt="">
            </div>
        </div>
    </div>
    
</template>

<style scoped>

    .container{ 
        margin: 5% 5%;
    }
    .header{
        font-size: 2rem;
        font-weight: medium;
    }
    .grid{
        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 90vw;
        gap: 5px;
    }

    .image{
        width: 30vw;
    }
    img{
        max-width: 100%;
        max-height: 100%;
        display: block; /* remove extra space below image */
    }
</style>