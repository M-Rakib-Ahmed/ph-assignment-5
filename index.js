

document.querySelector('#donate-now').addEventListener('click',()=>{
   
    const inputDonate = parseFloat(document.querySelector('#danate-input').value);
    const donateMoney = parseFloat(document.querySelector('#donate-money').innerText);
    console.log(donateMoney);
    
        if (isNaN(inputDonate) || inputDonate<= 0) {
            alert('invalid input')
            return
        } else {
            console.log("Donation successful!");
            my_modal_5.showModal()
        }
    

    
    const totalDoations = donateMoney - inputDonate;
    console.log(totalDoations);
    const payDonate = document.querySelector('#donate-money').innerText = totalDoations;
    
    const Donate = parseFloat(document.querySelector('#pay-donate').innerText);
    const succuessDonate = inputDonate + Donate;
    document.querySelector('#pay-donate').innerText = succuessDonate;
    console.log(succuessDonate);
    
})



// second functions start 
document.querySelector('#donate-now1').addEventListener('click', () => {

    const inputDonate = parseFloat(document.querySelector('#danate-input1').value);
    const donateMoney = parseFloat(document.querySelector('#donate-money').innerText);
    console.log(donateMoney);

    if (isNaN(inputDonate) || inputDonate <= 0) {
        alert('invalid input')
        return
    } else {
        console.log("Donation successful!");
        my_modal_5.showModal()
    }
    const totalDoations = donateMoney - inputDonate;
    console.log(totalDoations);
    const payDonate = document.querySelector('#donate-money').innerText = totalDoations;

    const Donate = parseFloat(document.querySelector('#pay-donate1').innerText);
    const succuessDonate = inputDonate + Donate;
    document.querySelector('#pay-donate1').innerText = succuessDonate;
    console.log(succuessDonate);

})

// second functions end
// third functions start 
document.querySelector('#donate-now2').addEventListener('click', () => {

    const inputDonate = parseFloat(document.querySelector('#danate-input2').value);
    const donateMoney = parseFloat(document.querySelector('#donate-money').innerText);
  
    if (isNaN(inputDonate) || inputDonate <= 0) {
        alert('invalid input')
        return
    } else {
        console.log("Donation successful!");
        my_modal_5.showModal()
    }

    const totalDoations = donateMoney - inputDonate;
    console.log(totalDoations);
    const payDonate = document.querySelector('#donate-money').innerText = totalDoations;

    const Donate = parseFloat(document.querySelector('#pay-donate2').innerText);
    const succuessDonate = inputDonate + Donate;
    document.querySelector('#pay-donate2').innerText = succuessDonate;
})

// third functions end




// button functionality start
const historyTab = document.querySelector('#history-tab');
historyTab.addEventListener('click',()=>{
    console.log('hello world');
    
    historyTab.classList.add('bg-[#81d82f]')
    document.querySelector('#donation-tab').classList.remove('bg-[#81d82f]')
})
const donationTab = document.querySelector('#donation-tab');
donationTab.addEventListener('click',()=>{
    console.log('hello world');
    
    donationTab.classList.add('bg-[#81d82f]')
    document.querySelector('#history-tab').classList.remove('bg-[#81d82f]')
})
// button functionalit end