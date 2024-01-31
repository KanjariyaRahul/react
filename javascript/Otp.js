function otp(otpLength)
        {
        let otp = "";
  
        for (let i = 0; i < otpLength; i++) {
         otp += Math.floor(Math.random() * 10);
        }
        return Number(otp);
        };
    
         document.getElementById("otp").innerHTML = "Your OTP is : " + otp(5);