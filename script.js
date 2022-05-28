console.log('Hello World!')

let dd = new Date()
    document.getElementById('major-footer').innerHTML = dd.getFullYear() + ' ' + '&copy All Rights Reserved'

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    