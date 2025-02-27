document.getElementById('donate-1').addEventListener('click', function(event){
    event.preventDefault();
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    const payForNoakhali = document.getElementById('amount-1').value;
    const convertedPayForNoakhali = parseFloat(payForNoakhali);
    if(convertedPayForNoakhali <= convertedMainBalance && convertedPayForNoakhali > 0){
        const deduction = convertedMainBalance - convertedPayForNoakhali;
        document.getElementById('main-balance').innerText = deduction;
        document.getElementById('display-donation-1').innerText = convertedPayForNoakhali;
    }
    else{
        alert('Invalid input');
    }
})
document.getElementById('donate-2').addEventListener('click', function(event){
    event.preventDefault();
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    const payForFeni = document.getElementById('amount-2').value;
    const convertedPayForFeni = parseFloat(payForFeni);
    if(convertedPayForFeni <= convertedMainBalance && convertedPayForFeni > 0){
        const deduction = convertedMainBalance - convertedPayForFeni;
        document.getElementById('main-balance').innerText = deduction;
        document.getElementById('display-donation-2').innerText = convertedPayForFeni;
    }
    else{
        alert('Invalid input');
    }
})
document.getElementById('donate-3').addEventListener('click', function(event){
    event.preventDefault();
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    const aidForInjured = document.getElementById('amount-3').value;
    const convertedAidForInjured= parseFloat(aidForInjured);
    if(convertedAidForInjured <= convertedMainBalance && convertedAidForInjured > 0){
        const deduction = convertedMainBalance - convertedAidForInjured;
        document.getElementById('main-balance').innerText = deduction;
        document.getElementById('display-donation-3').innerText = convertedAidForInjured;
    }
    else{
        alert('Invalid input');
    }
})