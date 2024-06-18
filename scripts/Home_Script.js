document.getElementById('english').addEventListener('click', function () {
    window.location.href = 'Home.html';
});
document.getElementById('vietnamese').addEventListener('click', function () {
    window.location.href = 'Home_vn.html';
});
document.getElementById('facebook').addEventListener('click', () => {
    window.open('https://www.facebook.com/phatfioraa', '_blank');
});
document.getElementById('instagram').addEventListener('click', () => {
    window.open('https://www.instagram.com/phatphatdinh', '_blank');
});
document.getElementById('github').addEventListener('click', () => {
    window.open('https://github.com/dinhphatphat', '_blank');
});

document.getElementById('gmail').addEventListener('click', () => {
    let emailAddress = 'dinhtainang@gmail.com';
    let subject = 'Subject of the email';
    let body = 'Content of the email';

    let mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
});

document.getElementById('phone').addEventListener('click', () => {
    let phoneNumber = '+84868063569'; // Thay bằng số điện thoại của bạn
    window.location.href = `tel:${phoneNumber}`;
});