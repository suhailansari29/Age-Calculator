function cal_age(){
    let dob=document.getElementById("dob").value;
    console.log(dob)
    let result=document.getElementById("res");
    if(dob==""){
        document.getElementById("res").innerHTML="Please Enter your dob";
        return;
    }
    let bday= new Date(dob);
    console.log(bday)
    let now= new Date();
    console.log(now)

    let diff = now-bday;
    console.log(diff)

    let sec=Math.floor(diff/1000);
    let min=Math.floor(sec/60);
    let h=Math.floor(min/60);
    let days=Math.floor(h/24);
    let y= Math.floor(days/365);
    let m = Math.floor((days%365)/30);

    let remd = (days%365)%30;
    let remh = h%24;
    let remmin = min%60;
    let remsec = sec%60;

    result.innerHTML=`
    <b>${y}</b> Years,
    <b>${m}</b> Months,
    <b>${remd}</b> Days,
    <b>${remh}</b> Hours,
    <b>${remmin}</b> Minutes,
    <b>${remsec}</b> Seconds,
    `;


}