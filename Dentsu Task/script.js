function numberWithCommas(x) {
    return '$' + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

async function backgroundImage() {
    //getting json data
    let response = await fetch('https://cdn.d4.digital/json/d4-demo-company/F7F2Z7/FXDJ24/scripts/datafile.js')
    let data = await response.json()
    let amount = data.items[0].amount.value.split(',').join('')
    document.getElementById('difference').innerHTML = data.items[0].headline_1.value
    document.getElementById('main').style.backgroundImage = "url(" + data.items[0].bg_image.value + ")";
    document.getElementById('amount').innerHTML = amount;
    document.getElementById('raise').innerHTML = data.items[0].headline_2.value;

    //animations
    gsap.from('#difference', {duration: 1.5, opacity: 0, ease: Expo.easeOut});
    gsap.from('#tip', {delay: 1.5, duration: 0.2, y:'-100%'});
    gsap.to('#cover', {delay: 1.6, duration: 1.9, y:'100%'})
    gsap.from('#raise', {delay: 3.5, duration: 1.5, opacity: 0, ease: Expo.easeOut});
    gsap.from('#amount', {delay: 4.5, opacity:0, duration: 0.5, onUpdate: function() {this.targets()[0].innerHTML = '$0'}});
    gsap.from('#amount', {delay: 5, textContent: 0, duration: 2, ease: "power1.in", 
    onUpdate: function() {this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));}})
}

backgroundImage()


