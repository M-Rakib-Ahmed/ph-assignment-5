
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
    const dvitag = document.createElement('div');
    dvitag.classList.add('border', 'p-5', 'rounded-md', 'mt-3')
    dvitag.innerHTML = `
      <p>${inputDonate}Taka is Donated for famine-2024 at Feni,Bangladesh</p>
       <p class="text-xs text-gray-500">${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standrd Time)</p>
      
      `
    const historyContaier = document.querySelector('#history-container');
    historyContaier.appendChild(dvitag)
    document.querySelector('#danate-input').value = ""

})

console.log(document.querySelector('#history-container').innerHTML);

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
    const dvitag = document.createElement('div');
    dvitag.classList.add('border', 'p-5', 'rounded-md', 'mt-3')
    dvitag.innerHTML = `
      <p>${inputDonate}Taka is Donated for famine-2024 at Feni,Bangladesh</p>
     <p class="text-xs text-gray-500">${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standrd Time)</p>
      
      `
    const historyContaier = document.querySelector('#history-container');
    historyContaier.appendChild(dvitag)
    document.querySelector('#danate-input1').value = ""
    

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
    const dvitag = document.createElement('div');
    dvitag.classList.add('border', 'p-5', 'rounded-md', 'mt-3')
    dvitag.innerHTML = `
      <p>${inputDonate}Taka is Donated for famine-2024 at Feni,Bangladesh</p>
       <p class="text-xs text-gray-500">${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standrd Time)</p>
      
      `
    const historyContaier = document.querySelector('#history-container');
    historyContaier.appendChild(dvitag)
    document.querySelector('#danate-input2').value = ""
    
})

// third functions end




// button functionality start
const historyTab = document.querySelector('#history-tab');
historyTab.addEventListener('click',(e)=>{
    e.preventDefault()
    
    historyTab.classList.add('bg-[#81d82f]')
    // document.querySelector('#donation-tab').classList.remove('bg-[#81d82f]')
    document.querySelector('#history-container').classList.remove('hidden')
    document.querySelector('#section-container').classList.add('hidden')
    
})
const donationTab = document.querySelector('#donation-tab');
donationTab.addEventListener('click',(e)=>{
    e.preventDefault()
    
    donationTab.classList.add('bg-[#81d82f]')
    document.querySelector('#history-tab').classList.remove('bg-[#81d82f]')
    document.querySelector('#history-container').classList.add('hidden')
    document.querySelector('#section-container').classList.remove('hidden')
    // document.querySelector('#section-container').classList.remove('hidden')
    // document.querySelector('#history-container').classList.add('hidden')
})
// button functionalit end