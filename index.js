async function getData(){
    document.getElementById("ifsc").innerText = "Loading...";
    let ifsc=document.getElementById("ifsc-input").value
    fetch(`https://ifsc.razorpay.com/${ifsc}`)
        .then((res) => {
            if(res.status==404){
                throw("error");
            }
            else{
                return res.json()
            }
        })
        .then(data=>{
            // console.log(data)
            document.getElementById("ifsc").innerText = data.IFSC;
            document.getElementById("bank").innerText=data.BANK
            document.getElementById("branch").innerText=data.BRANCH
            document.getElementById("city").innerText=data.CITY
            document.getElementById("district").innerText=data.DISTRICT
            document.getElementById("address").innerText=data.ADDRESS
            document.getElementById("micr").innerText=data.MICR
        })
        .catch(err=>{
            document.getElementById("ifsc").innerText = "Please Enter a Valid IFSC Code";
            document.getElementById("bank").innerText = "...";
            document.getElementById("branch").innerText = "...";
            document.getElementById("city").innerText = "...";
            document.getElementById("district").innerText = "...";
            document.getElementById("address").innerText = "...";
            document.getElementById("micr").innerText = "...";
        })
}