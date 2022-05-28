console.log('Hello World!')

let dd = new Date()
    document.getElementById('major-footer').innerHTML = dd.getFullYear() + ' ' + '&copy All Rights Reserved'

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }



 document.querySelector('.nav-bar').addEventListener('click', function (){
     document.querySelector('.responsive').classList.toggle('block')
 })

