document.querySelector('#donate-now').addEventListener('click',()=>{
   
    const inputDonate = parseFloat(document.querySelector('#danate-input').value);
    const donateMoney = parseFloat(document.querySelector('#donate-money').innerText);
    console.log(donateMoney);
    
    const totalDoations = donateMoney - inputDonate;
    console.log(totalDoations);
    const payDonate = document.querySelector('#donate-money').innerText = totalDoations;
    
    const Donate = parseFloat(document.querySelector('#pay-donate').innerText);
    const succuessDonate = inputDonate + Donate;
    document.querySelector('#pay-donate').innerText = succuessDonate;
    console.log(succuessDonate);
    
    
    
    
    
         
    
    
})