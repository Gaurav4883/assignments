function submitForm(event) {
    event.preventDefault();
    const birthdate = new Date(document.getElementById("birthdate").value);

    const today = new Date();
    // age taken in milliseconds
    const ageInMilliseconds = today.getTime() - birthdate.getTime();
    // 1000 ms = 1s, multiplied by 60 for min. 60 for hour 24 hours in total and 365 days in  1 year 
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    // remainder after dividing ageInMS by same thing and again dividing for 30 days in 1 month
    const ageInMonths = Math.floor(
        (ageInMilliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    // To get days, same process
    const ageInDays = Math.floor(
        (ageInMilliseconds % (1000 * 60 * 60 * 24 * 365)) % (1000 * 60 * 60 * 24 * 30) /
        (1000 * 60 * 60 * 24)
    );
    const ageString = `Your age is ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days.`;

    if (birthdate) {
        Swal.fire({
            icon: 'success',
            title: 'Congratulations',
            text: ageString,
            confirmButtonText: 'OK'
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your birthdate',
            confirmButtonText: 'OK'
        })
    }
}