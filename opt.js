 const Otp = (otpLength) => {
    let otp = "";
  
  
  for (let i = 0; i < otpLength; i++) {
     otp += Math.floor(Math.random() * 10);
    }
    return Number(otp);
  };
  
   console.log("Your Otp is :  ", Otp(4));
